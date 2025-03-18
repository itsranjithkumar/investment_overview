from pydantic import BaseModel
from datetime import date

class InvestmentCreate(BaseModel):
    mutual_fund: str
    investment_date: date
    amount_invested: float
    isn: str
    nav_at_investment: float
    returns: float

class InvestmentResponse(InvestmentCreate):
    id: int

    class Config:
        orm_mode = True

class AllocationCreate(BaseModel):
    mutual_fund: str
    sector_allocation: str
    stock_allocation: str
    market_cap_allocation: str

class AllocationResponse(AllocationCreate):
    id: int

    class Config:
        orm_mode = True
