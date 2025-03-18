from sqlalchemy import Column, Integer, String, Float, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.ext.asyncio import create_async_engine
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_async_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, class_=AsyncSession)
Base = declarative_base()

class Investment(Base):
    __tablename__ = "investments"

    id = Column(Integer, primary_key=True, index=True)
    mutual_fund = Column(String, index=True)
    investment_date = Column(Date)
    amount_invested = Column(Float)
    isn = Column(String, unique=True)
    nav_at_investment = Column(Float)
    returns = Column(Float)

class Allocation(Base):
    __tablename__ = "allocations"

    id = Column(Integer, primary_key=True, index=True)
    mutual_fund = Column(String, index=True)
    sector_allocation = Column(String)
    stock_allocation = Column(String)
    market_cap_allocation = Column(String)
