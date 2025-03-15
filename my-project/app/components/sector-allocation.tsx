import { investmentData } from "../lib/data"

export function SectorAllocation() {
  const { sectorAllocation } = investmentData

  return (
    <div>
      <h3 className="text-lg font-medium mb-4 text-white">Sector Allocation</h3>

      <div className="grid grid-cols-2 gap-4">
        {/* Financial */}
        <div className="bg-[#d4e0f3] bg-opacity-20 rounded-lg p-4">
          <div className="text-sm text-black">Financial</div>
          <div className="text-xs text-black">₹{sectorAllocation.Financial.amount.toLocaleString()}</div>
          <div className="text-3xl font-bold mt-6">{sectorAllocation.Financial.percentage}%</div>
        </div>

        {/* Healthcare */}
        <div className="bg-[#d4e0f3] bg-opacity-20 rounded-lg p-4">
          <div className="text-sm text-black">Healthcare</div>
          <div className="text-xs text-black">₹{sectorAllocation.Healthcare.amount.toLocaleString()}</div>
          <div className="text-3xl font-bold mt-6">{sectorAllocation.Healthcare.percentage}%</div>
        </div>

        {/* Technology */}
        <div className="bg-[#d4e0f3] bg-opacity-10 rounded-lg p-4">
          <div className="text-sm text-black">Technology</div>
          <div className="text-xs text-black">₹{sectorAllocation.Technology.amount.toLocaleString()}</div>
          <div className="text-3xl font-bold mt-6">{sectorAllocation.Technology.percentage}%</div>
        </div>

        {/* Consumer Goods */}
        <div className="bg-[#d4e0f3] bg-opacity-10 rounded-lg p-4">
          <div className="text-sm text-black">Consumer Goods</div>
          <div className="text-xs text-black">₹{sectorAllocation["Consumer Goods"].amount.toLocaleString()}</div>
          <div className="text-3xl font-bold mt-6">{sectorAllocation["Consumer Goods"].percentage}%</div>
        </div>

        {/* Energy */}
        <div className="bg-[#d4e0f3] bg-opacity-10 rounded-lg p-4">
          <div className="text-sm text-black">Energy</div>
          <div className="text-xs text-black">₹{sectorAllocation.Energy.amount.toLocaleString()}</div>
          <div className="text-3xl font-bold mt-6">{sectorAllocation.Energy.percentage}%</div>
        </div>

        {/* Other Sectors */}
        <div className="bg-[#d4e0f3] bg-opacity-10 rounded-lg p-4">
          <div className="text-sm text-black">Other Sectors</div>
          <div className="text-xs text-black">₹{sectorAllocation["Other Sectors"].amount.toLocaleString()}</div>
          <div className="text-3xl font-bold mt-6">{sectorAllocation["Other Sectors"].percentage}%</div>
        </div>
      </div>
    </div>
  )
}
