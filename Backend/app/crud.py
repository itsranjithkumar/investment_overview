from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from .models import Investment, Allocation
from .schemas import InvestmentCreate, AllocationCreate
from .database import get_db
from fastapi import Depends

async def get_investments(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Investment))
    return result.scalars().all()

async def create_investment(investment_data: InvestmentCreate, db: AsyncSession = Depends(get_db)):
    investment = Investment(**investment_data.dict())
    db.add(investment)
    await db.commit()
    await db.refresh(investment)
    return investment

async def get_allocations(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Allocation))
    return result.scalars().all()

async def create_allocation(allocation_data: AllocationCreate, db: AsyncSession = Depends(get_db)):
    allocation = Allocation(**allocation_data.dict())   
    db.add(allocation)
    await db.commit()
    await db.refresh(allocation)
    return allocation
