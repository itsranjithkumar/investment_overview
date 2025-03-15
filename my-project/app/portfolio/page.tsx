"use client"

import { useState } from "react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { investmentData } from "../lib/data"
import { PerformanceChart } from "../components/performance-chart"
import { SectorAllocation } from "../components/sector-allocation"
import { OverlapAnalysis } from "../components/overlap-analysis"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<"performance" | "composition">("performance")
  const { user } = investmentData

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-white">Good morning, {user.name}!</h1>
        <p className="text-[#cccccc]">Evaluate Your Investment Performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Current Investment Value */}
        <div className="bg-[#1a2030] rounded-lg p-4">
          <div className="text-sm text-gray-400 flex items-center gap-2">
            Current
            <br />
            Investment Value
            <div className="ml-auto flex items-center text-green-500">
              <ArrowUpRight className="h-3 w-3" />
              +0.6%
            </div>
          </div>
          <div className="text-2xl font-bold mt-2 text-white">₹{user.currentValue.toLocaleString()}</div>
        </div>

        {/* Initial Investment Value */}
        <div className="bg-[#1a2030] rounded-lg p-4">
          <div className="text-sm text-white flex items-center gap-2">
            Initial
            <br />
            Investment Value
            <div className="ml-auto flex items-center text-green-500">
              <ArrowUpRight className="h-3 w-3" />
              +15%
            </div>
          </div>
          <div className="text-2xl font-bold mt-2 text-white">₹{user.initialValue.toLocaleString()}</div>
        </div>

        {/* Best Performing Scheme */}
        <div className="bg-[#1a2030] rounded-lg p-4">
          <div className="text-sm text-white flex items-center gap-2">
            Best
            <br />
            Performing Scheme
            <div className="ml-auto flex items-center text-green-500">
              <ArrowUpRight className="h-3 w-3" />+{user.bestPerforming.returns}%
            </div>
          </div>
          <div className="text-lg font-bold mt-2 text-white">{user.bestPerforming.name}</div>
        </div>

        {/* Worst Performing Scheme */}
        <div className="bg-[#1a2030] rounded-lg p-4">
          <div className="text-sm text-white flex items-center gap-2">
            Worst
            <br />
            Performing Scheme
            <div className="ml-auto flex items-center text-red-500">
              <ArrowDownRight className="h-3 w-3" />
              {user.worstPerforming.returns}%
            </div>
          </div>
          <div className="text-lg font-bold mt-2 text-white">{user.worstPerforming.name}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("performance")}
            className={`pb-2 ${activeTab === "performance" ? "tab-underline text-white" : "text-gray-400"}`}
          >
            Performance Metrics
          </button>
          <button
            onClick={() => setActiveTab("composition")}
            className={`pb-2 ${activeTab === "composition" ? "tab-underline text-white" : "text-gray-400"}`}
          >
            Portfolio Composition
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "performance" ? (
          <div className="space-y-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4 text-white">Performance Summary</h3>
              <div className="bg-[#252525] p-4 rounded-lg inline-block">
                <div className="text-xl font-bold text-white">₹5,50,000</div>
                <div className="text-xs text-green-500 flex items-center gap-1">
                  <span className="text-gray-400">+</span> ₹50,000 | 10%
                </div>
              </div>

              <PerformanceChart />
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <SectorAllocation />
            <OverlapAnalysis />
          </div>
        )}
      </div>
    </div>
  )
}
