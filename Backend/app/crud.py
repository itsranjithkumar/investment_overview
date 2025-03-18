from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from .models import Investment, Allocation
from .schemas import InvestmentCreate, AllocationCreate

async def get_investments(db: AsyncSession):
    result = await db.execute(select(Investment))
    return result.scalars().all()

async def create_investment(db: AsyncSession, investment_data: InvestmentCreate):
    investment = Investment(**investment_data.dict())
    db.add(investment)
    await db.commit()
    await db.refresh(investment)
    return investment

async def get_allocations(db: AsyncSession):
    result = await db.execute(select(Allocation))
    return result.scalars().all()

async def create_allocation(db: AsyncSession, allocation_data: AllocationCreate):
    allocation = Allocation(**allocation_data.dict())
    db.add(allocation)
    await db.commit()
    await db.refresh(allocation)
    return allocation
