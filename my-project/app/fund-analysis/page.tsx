import { investmentData } from "../lib/data"

export default function FundAnalysisPage() {
  const { funds } = investmentData

  return (
    <div className="space-y-8">
      <div>
      <h1 className="text-2xl font-semibold text-white">Fund Analysis</h1>        <p className="text-muted-foreground">Detailed analysis of your mutual fund investments</p>
      </div>

      <div className="space-y-6">
        {funds.map((fund) => (
          <div key={fund.isn} className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-xl font-medium mb-4">
              <p className="text-white">{fund.name}</p>
              <p className="text-muted-foreground">Investment Date: {fund.investmentDate}</p>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3 text-white">Sector Allocation</h3>
                <div className="space-y-2">
                  {Object.entries(fund.sectorAllocation).map(([sector, percentage]) => (
                    <div key={sector} className="flex justify-between">
                      <span className="text-gray-400">{sector}</span>
                      <span className="text-white">{percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3 text-white">Stock Allocation</h3>
                <div className="space-y-2">
                  {Object.entries(fund.stockAllocation).map(([stock, percentage]) => (
                    <div key={stock} className="flex justify-between">
                      <span className="text-gray-400">{stock}</span>
                      <span className="text-white">{percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3 text-white">Market Cap Allocation</h3>
                <div className="space-y-2">
                  {Object.entries(fund.marketCapAllocation).map(([cap, percentage]) => (
                    <div key={cap} className="flex justify-between">
                      <span className="text-gray-400">{cap}</span>
                      <span className="text-white">{percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
