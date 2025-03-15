"use client"

import { useState } from "react"
import { investmentData } from "../lib/data"

// Sample company data for hover states - in a real app, this would come from your data source
const sectorCompanies = {
  Financial: [
    { name: "HDFC Bank", amount: "₹78,000", percentage: 40 },
    { name: "Bajaj Finance", amount: "₹19,500", percentage: 10 },
    { name: "ICICI Bank", amount: "₹58,500", percentage: 30 },
    { name: "Kotak Mahindra Bank", amount: "₹39,000", percentage: 20 },
  ],
  Technology: [
    { name: "Infosys", amount: "₹44,400", percentage: 40 },
    { name: "TCS", amount: "₹27,750", percentage: 25 },
    { name: "HCL Tech", amount: "₹22,200", percentage: 20 },
    { name: "Wipro", amount: "₹16,650", percentage: 15 },
  ],
  Healthcare: [
    { name: "Apollo Hospitals", amount: "₹36,625", percentage: 50 },
    { name: "Dr. Reddy's", amount: "₹36,625", percentage: 50 },
  ],
  "Consumer Goods": [
    { name: "ITC", amount: "₹27,750", percentage: 50 },
    { name: "Hindustan Unilever", amount: "₹27,750", percentage: 50 },
  ],
  Energy: [
    { name: "Reliance", amount: "₹27,750", percentage: 50 },
    { name: "ONGC", amount: "₹27,750", percentage: 50 },
  ],
  "Other Sectors": [{ name: "Various", amount: "₹55,500", percentage: 100 }],
}

export function SectorAllocation() {
  const { sectorAllocation } = investmentData
  const [hoveredSector, setHoveredSector] = useState<string | null>(null)

  return (
    <div className="p-6 rounded-xl bg-gray-950">
      <h3 className="text-lg font-medium mb-4 text-white">Sector Allocation</h3>

      <div className="grid grid-cols-12 gap-1">
        {/* Financial Sector - Takes up 6 columns when not hovered */}
        <div
          className={`col-span-6 row-span-2 bg-blue-800/40 rounded-lg p-4 cursor-pointer transition-all duration-200`}
          onMouseEnter={() => setHoveredSector("Financial")}
          onMouseLeave={() => setHoveredSector(null)}
        >
          {hoveredSector === "Financial" ? (
            <div className="h-full flex flex-col">
              <div className="grid grid-cols-2 gap-1 h-full">
                {sectorCompanies.Financial.map((company, index) => (
                  <div
                    key={company.name}
                    className={`bg-blue-700/60 rounded-lg p-3 flex flex-col justify-between
                      ${index === 0 ? "col-span-2" : ""}
                      ${index === 1 ? "col-span-2" : ""}
                    `}
                    style={{
                      gridRow: index < 2 ? "span 1" : "span 1",
                      gridColumn: index < 2 ? "span 2" : "span 1",
                    }}
                  >
                    <div>
                      <div className="text-sm text-white">{company.name}</div>
                      <div className="text-xs text-gray-300">{company.amount}</div>
                    </div>
                    <div className="text-xl font-bold text-white self-end">{company.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="text-sm text-white">Financial</div>
              <div className="text-xs text-gray-300">₹{sectorAllocation.Financial.amount.toLocaleString()}</div>
              <div className="text-3xl font-bold mt-6 text-white">{sectorAllocation.Financial.percentage}%</div>
            </>
          )}
        </div>

        {/* Technology Sector - Takes up 6 columns when not hovered */}
        <div
          className={`col-span-6 row-span-2 bg-blue-800/40 rounded-lg p-4 cursor-pointer transition-all duration-200`}
          onMouseEnter={() => setHoveredSector("Technology")}
          onMouseLeave={() => setHoveredSector(null)}
        >
          {hoveredSector === "Technology" ? (
            <div className="h-full flex flex-col">
              <div className="grid grid-cols-4 grid-rows-2 gap-1 h-full">
                <div className="col-span-2 row-span-2 bg-blue-700/60 rounded-lg p-3 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-white">Infosys</div>
                    <div className="text-xs text-gray-300">₹44,400</div>
                  </div>
                  <div className="text-xl font-bold text-white self-end">40%</div>
                </div>
                <div className="col-span-2 bg-blue-700/60 rounded-lg p-3 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-white">TCS</div>
                    <div className="text-xs text-gray-300">₹27,750</div>
                  </div>
                  <div className="text-xl font-bold text-white self-end">25%</div>
                </div>
                <div className="bg-blue-700/60 rounded-lg p-3 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-white">HCL Tech</div>
                    <div className="text-xs text-gray-300">₹22,200</div>
                  </div>
                  <div className="text-xl font-bold text-white self-end">20%</div>
                </div>
                <div className="bg-blue-700/60 rounded-lg p-3 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-white">Wipro</div>
                    <div className="text-xs text-gray-300">₹16,650</div>
                  </div>
                  <div className="text-xl font-bold text-white self-end">15%</div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="text-sm text-white">Technology</div>
              <div className="text-xs text-gray-300">₹{sectorAllocation.Technology.amount.toLocaleString()}</div>
              <div className="text-3xl font-bold mt-6 text-white">{sectorAllocation.Technology.percentage}%</div>
            </>
          )}
        </div>

        {/* Healthcare Sector */}
        <div
          className={`col-span-4 bg-blue-800/40 rounded-lg p-4 cursor-pointer transition-all duration-200`}
          onMouseEnter={() => setHoveredSector("Healthcare")}
          onMouseLeave={() => setHoveredSector(null)}
        >
          {hoveredSector === "Healthcare" ? (
            <div className="h-full flex flex-col">
              <div className="grid grid-cols-1 gap-1 h-full">
                {sectorCompanies.Healthcare.map((company) => (
                  <div key={company.name} className="bg-blue-700/60 rounded-lg p-3 flex flex-col justify-between">
                    <div>
                      <div className="text-sm text-white">{company.name}</div>
                      <div className="text-xs text-gray-300">{company.amount}</div>
                    </div>
                    <div className="text-xl font-bold text-white self-end">{company.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="text-sm text-white">Healthcare</div>
              <div className="text-xs text-gray-300">₹{sectorAllocation.Healthcare.amount.toLocaleString()}</div>
              <div className="text-3xl font-bold mt-6 text-white">{sectorAllocation.Healthcare.percentage}%</div>
            </>
          )}
        </div>

        {/* Consumer Goods Sector */}
        <div
          className={`col-span-4 bg-blue-800/40 rounded-lg p-4 cursor-pointer transition-all duration-200`}
          onMouseEnter={() => setHoveredSector("Consumer Goods")}
          onMouseLeave={() => setHoveredSector(null)}
        >
          {hoveredSector === "Consumer Goods" ? (
            <div className="h-full flex flex-col">
              <div className="grid grid-cols-1 gap-1 h-full">
                {sectorCompanies["Consumer Goods"].map((company) => (
                  <div key={company.name} className="bg-blue-700/60 rounded-lg p-3 flex flex-col justify-between">
                    <div>
                      <div className="text-sm text-white">{company.name}</div>
                      <div className="text-xs text-gray-300">{company.amount}</div>
                    </div>
                    <div className="text-xl font-bold text-white self-end">{company.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="text-sm text-white">Consumer Goods</div>
              <div className="text-xs text-gray-300">₹{sectorAllocation["Consumer Goods"].amount.toLocaleString()}</div>
              <div className="text-3xl font-bold mt-6 text-white">{sectorAllocation["Consumer Goods"].percentage}%</div>
            </>
          )}
        </div>

        {/* Energy Sector */}
        <div
          className={`col-span-4 bg-blue-800/40 rounded-lg p-4 cursor-pointer transition-all duration-200`}
          onMouseEnter={() => setHoveredSector("Energy")}
          onMouseLeave={() => setHoveredSector(null)}
        >
          {hoveredSector === "Energy" ? (
            <div className="h-full flex flex-col">
              <div className="grid grid-cols-1 gap-1 h-full">
                {sectorCompanies.Energy.map((company) => (
                  <div key={company.name} className="bg-blue-700/60 rounded-lg p-3 flex flex-col justify-between">
                    <div>
                      <div className="text-sm text-white">{company.name}</div>
                      <div className="text-xs text-gray-300">{company.amount}</div>
                    </div>
                    <div className="text-xl font-bold text-white self-end">{company.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="text-sm text-white">Energy</div>
              <div className="text-xs text-gray-300">₹{sectorAllocation.Energy.amount.toLocaleString()}</div>
              <div className="text-3xl font-bold mt-6 text-white">{sectorAllocation.Energy.percentage}%</div>
            </>
          )}
        </div>

        {/* Other Sectors */}
        <div
          className={`col-span-4 bg-blue-800/40 rounded-lg p-4 cursor-pointer transition-all duration-200`}
          onMouseEnter={() => setHoveredSector("Other Sectors")}
          onMouseLeave={() => setHoveredSector(null)}
        >
          {hoveredSector === "Other Sectors" ? (
            <div className="h-full flex flex-col">
              <div className="grid grid-cols-1 gap-1 h-full">
                {sectorCompanies["Other Sectors"].map((company) => (
                  <div key={company.name} className="bg-blue-700/60 rounded-lg p-3 flex flex-col justify-between">
                    <div>
                      <div className="text-sm text-white">{company.name}</div>
                      <div className="text-xs text-gray-300">{company.amount}</div>
                    </div>
                    <div className="text-xl font-bold text-white self-end">{company.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="text-sm text-white">Other Sectors</div>
              <div className="text-xs text-gray-300">₹{sectorAllocation["Other Sectors"].amount.toLocaleString()}</div>
              <div className="text-3xl font-bold mt-6 text-white">{sectorAllocation["Other Sectors"].percentage}%</div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

