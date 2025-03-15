import { investmentData } from "../lib/data"

export default function HoldingsPage() {
  const { funds } = investmentData

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-white">Holdings</h1>
        <p className="text-white">View your current investment holdings</p>      </div>

      <div className="bg-[#1a1a1a] p-6 rounded-lg">
        <h2 className="text-xl font-medium mb-4 text-white">Current Holdings</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-3 px-4 text-left text-sm font-medium text-white">Mutual Fund</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-white">Units</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-white">Current NAV</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-white">Current Value</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-white">Returns</th>
              </tr>
            </thead>
            <tbody>
              {funds.map((fund) => {
                const units = fund.amount / fund.navAtInvestment
                const currentNAV = fund.navAtInvestment * (1 + fund.returns / 100)
                const currentValue = units * currentNAV

                return (
                  <tr key={fund.isn} className="border-b border-gray-800">
                    <td className="py-3 px-4 text-sm text-white">{fund.name}</td>
                    <td className="py-3 px-4 text-sm text-white">{units.toFixed(2)}</td>
                    <td className="py-3 px-4 text-sm text-white">₹{currentNAV.toFixed(2)}</td>
                    <td className="py-3 px-4 text-sm text-white">
                      <div className="text-xl font-bold text-white">₹{currentValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                    </td>
                    <td className="py-3 px-4 text-sm text-green-500">{fund.returns}%</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
