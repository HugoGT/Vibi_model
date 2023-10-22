# Data

from pydantic import BaseModel


class FormData(BaseModel):
    credit: str
    full_name: str
    age: str
    phone: str
    email: str
    dni: str
    dni_date: str
    home_price: str = None
    currency: str = None
    initial_payment: str = None
    situation: str = None
    department: str = None
    district: str = None
    income: str = None
    estimated_purchase: str = None


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
