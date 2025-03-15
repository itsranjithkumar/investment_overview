"use client"

import { useState } from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import { investmentData } from "../lib/data"

export function PerformanceChart() {
  const [activeTimeframe, setActiveTimeframe] = useState("1M")
  const timeframes = ["1M", "3M", "6M", "1Y", "3Y", "MAX"]

  return (
    <div className="mt-8">
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={investmentData.performanceData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0070f3" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0070f3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "#666" }} dy={10} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#333] p-2 rounded border border-gray-700 text-sm">
                      <p className="text-gray-300">{payload[0].payload.date}</p>
                      <p className="font-bold" style={{ color: 'white' }}>₹{payload[0].value?.toLocaleString()}</p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#0070f3"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {timeframes.map((timeframe) => (
          <button
            key={timeframe}
            className={`px-4 py-1 rounded-md text-sm ${
              activeTimeframe === timeframe ? "bg-blue-600 text-white" : "bg-[#252525] text-gray-400"
            }`}
            onClick={() => setActiveTimeframe(timeframe)}
          >
            {timeframe}
          </button>
        ))}
      </div>
    </div>
  )
}
