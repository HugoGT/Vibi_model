

import pickle

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel


with open('xgb_model.pkl', 'rb') as file:
    model = pickle.load(file)


app = FastAPI()


class InputData(BaseModel):
    area: int
    bath: int
    room: int
    parking: int
    year: int
    property_type: int
    near_cc: int
    near_school: int
    near_parks: int
    near_avenue: int
    security: int
    elevator: int
    rest_area: int
    pool: int
    ranking: float


@app.post("/predict/")
async def predict(data: InputData):
    try:
        result = model.predict([[
            data.area, data.bath, data.room, data.parking, data.year, data.property_type, data.near_cc,
            data.near_school, data.near_parks, data.near_avenue, data.security, data.elevator,
            data.rest_area, data.pool, data.ranking
        ]])

        return {"resultado": str(result[0])}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
