from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Sample investment data
investments = [
    {"id": 1, "name": "Investment A", "amount": 1000},
    {"id": 2, "name": "Investment B", "amount": 2000},
    {"id": 3, "name": "Investment C", "amount": 1500},
]

class Investment(BaseModel):
    id: int
    name: str
    amount: float

@app.post("/investments/")
async def create_investment(investment: Investment):
    investments.append(investment.dict())
    return investment

@app.get("/investments/")
async def get_investments():
    return investments

@app.get("/investments/{investment_id}")
async def read_investment(investment_id: int):
    for investment in investments:
        if investment["id"] == investment_id:
            return investment
    return {"error": "Investment not found"}