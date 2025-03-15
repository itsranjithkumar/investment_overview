export default function TransactionsPage() {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-white">Transactions</h1>
          <p className="text-white">View your transaction history</p>
        </div>
  
        <div className="bg-[#1a1a1a] p-6 rounded-lg">
          <h2 className="text-xl font-medium text-white mb-4">Recent Transactions</h2>
  
          <div className="text-center py-8 text-white">No transactions to display</div>
        </div>
      </div>
    )
  }