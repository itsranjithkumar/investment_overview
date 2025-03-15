export const investmentData = {
    user: {
      name: "Gokul",
      currentValue: 575000,
      initialValue: 500000,
      bestPerforming: {
        name: "ICICI Prudential Midcap Fund",
        returns: 13,
      },
      worstPerforming: {
        name: "Axis Flexi Cap Fund",
        returns: -5,
      },
    },
    funds: [
      {
        name: "ICICI Prudential Bluechip Fund",
        investmentDate: "2023-01-10",
        amount: 1000000,
        isn: "INF109K016L0",
        navAtInvestment: 100,
        returns: 12.5,
        sectorAllocation: {
          IT: 38,
          Financials: 37,
          "Energy/Conglomerate": 25,
        },
        stockAllocation: {
          "Reliance Industries": 25,
          "HDFC Bank": 22,
          TCS: 20,
          Infosys: 18,
          "ICICI Bank": 15,
        },
        marketCapAllocation: {
          "Large Cap": 98,
          "Mid Cap": 2,
          "Small Cap": 0,
        },
      },
      {
        name: "HDFC Top 100 Fund",
        investmentDate: "2022-12-05",
        amount: 800000,
        isn: "INF179K01YV8",
        navAtInvestment: 100,
        returns: 10.2,
        sectorAllocation: {
          Financials: 80,
          "Energy/Conglomerate": 20,
        },
        stockAllocation: {
          "HDFC Bank": 28,
          "ICICI Bank": 24,
          "Reliance Industries": 20,
          "Kotak Mahindra Bank": 18,
          "Bajaj Finance": 10,
        },
        marketCapAllocation: {
          "Large Cap": 85,
          "Mid Cap": 13,
          "Small Cap": 2,
        },
      },
      {
        name: "SBI Bluechip Fund",
        investmentDate: "2023-02-15",
        amount: 1200000,
        isn: "INF200K01QX4",
        navAtInvestment: 100,
        returns: 11,
        sectorAllocation: {
          "Energy/Conglomerate": 27,
          IT: 40,
          Financials: 21,
          Industrials: 12,
        },
        stockAllocation: {
          "Reliance Industries": 27,
          TCS: 23,
          "HDFC Bank": 21,
          Infosys: 17,
          "Larsen & Toubro": 12,
        },
        marketCapAllocation: {
          "Large Cap": 97,
          "Mid Cap": 3,
          "Small Cap": 0,
        },
      },
      {
        name: "Axis Bluechip Fund",
        investmentDate: "2022-11-20",
        amount: 950000,
        isn: "INF846K01DP8",
        navAtInvestment: 100,
        returns: 9.8,
        sectorAllocation: {
          IT: 50,
          Financials: 32,
          "Energy/Conglomerate": 18,
        },
        stockAllocation: {
          TCS: 26,
          Infosys: 24,
          "HDFC Bank": 22,
          "Reliance Industries": 18,
          "State Bank of India (SBI)": 10,
        },
        marketCapAllocation: {
          "Large Cap": 98,
          "Mid Cap": 2,
          "Small Cap": 0,
        },
      },
      {
        name: "Mirae Asset Large Cap Fund",
        investmentDate: "2023-03-01",
        amount: 1100000,
        isn: "INF769K01AX2",
        navAtInvestment: 100,
        returns: 13,
        sectorAllocation: {
          IT: 42,
          Financials: 34,
          "Energy/Conglomerate": 24,
        },
        stockAllocation: {
          "Reliance Industries": 24,
          "HDFC Bank": 23,
          TCS: 22,
          Infosys: 20,
          "ICICI Bank": 11,
        },
        marketCapAllocation: {
          "Large Cap": 96,
          "Mid Cap": 4,
          "Small Cap": 0,
        },
      },
    ],
    sectorAllocation: {
      Financial: {
        percentage: 34,
        amount: 170000,
      },
      Healthcare: {
        percentage: 14.5,
        amount: 73250,
      },
      Technology: {
        percentage: 19,
        amount: 111000,
      },
      "Consumer Goods": {
        percentage: 9.5,
        amount: 55500,
      },
      Energy: {
        percentage: 9.5,
        amount: 55500,
      },
      "Other Sectors": {
        percentage: 9.5,
        amount: 55500,
      },
    },
    overlaps: [
      {
        pair: ["ICICI Bluechip", "HDFC Top 100"],
        percentage: 67,
      },
      {
        pair: ["ICICI Bluechip", "SBI Bluechip"],
        percentage: 87,
      },
      {
        pair: ["ICICI Bluechip", "Axis Bluechip"],
        percentage: 88,
      },
      {
        pair: ["ICICI Bluechip", "Mirae Asset Large Cap"],
        percentage: 100,
      },
      {
        pair: ["HDFC Top 100", "SBI Bluechip"],
        percentage: 48,
      },
      {
        pair: ["HDFC Top 100", "Axis Bluechip"],
        percentage: 44,
      },
      {
        pair: ["HDFC Top 100", "Mirae Asset Large Cap"],
        percentage: 65,
      },
      {
        pair: ["SBI Bluechip", "Axis Bluechip"],
        percentage: 89,
      },
      {
        pair: ["SBI Bluechip", "Mirae Asset Large Cap"],
        percentage: 89,
      },
      {
        pair: ["Axis Bluechip", "Mirae Asset Large Cap"],
        percentage: 90,
      },
    ],
    performanceData: [
      { date: "7 Feb", value: 520000 },
      { date: "12 Feb", value: 530000 },
      { date: "17 Feb", value: 510000 },
      { date: "22 Feb", value: 540000 },
      { date: "27 Feb", value: 550000 },
      { date: "4 Mar", value: 560000 },
      { date: "9 Mar", value: 575000 },
    ],
  }
  
  