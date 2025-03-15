export default function ToolsPage() {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-white">Tools</h1>
          <p className="text-white">Investment tools and calculators</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-xl font-medium mb-4 text-white">SIP Calculator</h2>
            <p className="text-white mb-4">Calculate returns on your SIP investments</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Open Calculator</button>
          </div>
  
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-xl font-medium mb-4 text-white">Tax Calculator</h2>
            <p className="text-white mb-4">Calculate tax on your investment returns</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Open Calculator</button>
          </div>
        </div>
      </div>
    )
  }