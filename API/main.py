# Vibi API

import pickle

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from data import InputData, FormData
from validate_data import validate_data
from postgres import update_DB


with open('xgb_model.pkl', 'rb') as file:
    model = pickle.load(file)


app = FastAPI(title="Vibi API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Authorization", "Content-Type"],
)


@app.post("/register/")
async def predict(data: FormData):
    data = validate_data(data)

    if data["errors"]:
        return {"errors": data["errors"]}

    response = update_DB(data)

    return {"message": response}


@app.post("/predict/")
async def predict(data: InputData):
    try:
        result = model.predict([[
            data.area, data.bath, data.room, data.parking, data.year, data.property_type, data.near_cc,
            data.near_school, data.near_parks, data.near_avenue, data.security, data.elevator,
            data.rest_area, data.pool, data.ranking
        ]])

        return {"result": str(result[0])}

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
