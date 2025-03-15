import { investmentData } from "../lib/data"

export default function MutualFundsPage() {
  const { funds } = investmentData

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-white">Mutual Funds</h1>
        <p className="text-white">View and manage your mutual fund investments</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-medium text-white">Investment Overview</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Mutual Fund</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Investment Date</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Amount Invested (INR)</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">ISN</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">NAV at time of investment</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Returns Since Investment</th>
              </tr>
            </thead>
            <tbody>
              {funds.map((fund) => (
                <tr key={fund.isn} className="border-b border-gray-800">
                  <td className="py-3 px-4 text-sm text-white">{fund.name}</td>
                  <td className="py-3 px-4 text-sm text-white">{fund.investmentDate}</td>
                  <td className="py-3 px-4 text-sm text-white">₹{fund.amount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-sm text-white">{fund.isn}</td>
                  <td className="py-3 px-4 text-sm text-white">{fund.navAtInvestment}</td>
                  <td className="py-3 px-4 text-sm text-green-500">{fund.returns}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
