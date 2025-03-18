from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select  
from .database import get_db
from .models import Base, engine, Investment, Allocation  
from .crud import get_investments, create_investment, get_allocations, create_allocation
from .schemas import InvestmentCreate, InvestmentResponse, AllocationCreate, AllocationResponse
from datetime import date

app = FastAPI()

# Initialize database tables
async def create_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

# Insert Sample Data
async def insert_sample_data(db: AsyncSession):
    result = await db.execute(select(Investment).limit(1))
    if result.scalars().first():
        print("Sample data already exists.")
        return

    sample_investments = [
        Investment(mutual_fund="ICICI Prudential Bluechip Fund", investment_date=date(2023,1,10),
                   amount_invested=1000000, isn="INF109K016L0", nav_at_investment=100, returns=12.5),
        Investment(mutual_fund="HDFC Top 100 Fund", investment_date=date(2022,12,5),
                   amount_invested=800000, isn="INF179K01YV8", nav_at_investment=100, returns=10.2),
    ]

    sample_allocations = [
        Allocation(mutual_fund="ICICI Prudential Bluechip Fund",
                   sector_allocation="IT: 38%, Financials: 37%, Energy/Conglomerate: 25%",
                   stock_allocation="Reliance Industries: 25%, HDFC Bank: 22%, TCS: 20%, Infosys: 18%, ICICI Bank: 15%",
                   market_cap_allocation="Large Cap: 98%, Mid Cap: 2%, Small Cap: 0%"),
    ]

    db.add_all(sample_investments + sample_allocations)
    await db.commit()
    print("✅ Sample data inserted!")

async def startup_event():
    await create_tables()
    async for db in get_db():  
        await insert_sample_data(db)
        break  

app.add_event_handler("startup", startup_event)

@app.get("/investments/", response_model=list[InvestmentResponse])
async def read_investments(db: AsyncSession = Depends(get_db)):
    return await get_investments(db)

@app.post("/investments/", response_model=InvestmentResponse)
async def create_new_investment(investment: InvestmentCreate, db: AsyncSession = Depends(get_db)):
    return await create_investment(db, investment)

@app.get("/allocations/", response_model=list[AllocationResponse])
async def read_allocations(db: AsyncSession = Depends(get_db)):
    return await get_allocations(db)

@app.post("/allocations/", response_model=AllocationResponse)
async def create_new_allocation(allocation: AllocationCreate, db: AsyncSession = Depends(get_db)):
    return await create_allocation(db, allocation)
