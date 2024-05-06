from sqlalchemy import Column, Integer, String, Float, Date, Index
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Charge(Base):
    __tablename__ = 'charges'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    government_id = Column(String)
    email = Column(String)
    debt_amount = Column(Float)
    debt_due_date = Column(Date)

    # índice explícito para government_id
    __table_args__ = (Index('idx_government_id', 'government_id'),)