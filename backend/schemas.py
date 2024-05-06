from pydantic import BaseModel, Field
from datetime import datetime

class ChargeCreate(BaseModel):
    name: str
    government_id: str
    email: str
    debt_amount: float
    debt_due_date: datetime

    class Config:
        allow_population_by_field_name = True

class ChargeInDB(ChargeCreate):
    id: int

    class Config:
        orm_mode = True
