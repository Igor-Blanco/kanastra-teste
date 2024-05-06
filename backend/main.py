from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from models import Charge
from database import SessionLocal, init_db
from schemas import ChargeCreate, ChargeInDB

app = FastAPI()

# Adiciona middleware para CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas as origens
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

@app.on_event("startup")
def startup_event():
    init_db()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"API live!"}

@app.get("/hello")
def read_root():
    return {"Hello Kanastra!"}

@app.post("/charges", response_model=ChargeInDB)
def create_charge(charge: ChargeCreate, db: Session = Depends(get_db)):
    db_charge = Charge(
        name=charge.name,
        government_id=charge.government_id,
        email=charge.email,
        debt_amount=charge.debt_amount,
        debt_due_date=charge.debt_due_date
    )
    db.add(db_charge)
    db.commit()
    db.refresh(db_charge)
    return db_charge

@app.get("/charges/{government_id}/total")
def get_total_debt(government_id: str, db: Session = Depends(get_db)):
    charges = db.query(Charge).filter(Charge.government_id == government_id).all()
    if not charges:
        raise HTTPException(status_code=404, detail="No charges found for this Gov. ID")
    total_debt_amount = sum(charge.debt_amount for charge in charges)
    return total_debt_amount

