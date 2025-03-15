"use client"

import { useEffect, useRef } from "react"
import { Info } from "lucide-react"

// This is a simplified version of the flow chart
// For a production app, you would use a library like d3.js for more complex visualizations
export function OverlapAnalysis() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = 300

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Define funds and their positions
    const funds = [
      { name: "Nippon Large Cap Fund", color: "#c9a227" },
      { name: "Motilal Large Cap Fund", color: "#1e5aa8" },
      { name: "HDFC Large Cap Fund", color: "#8b5d2e" },
      { name: "ICICI Prudential Midcap Fund", color: "#7d9a48" },
    ]

    // Define stocks
    const stocks = [
      { name: "HDFC LTD", color: "#754f7d" },
      { name: "RL", color: "#7a9e9f" },
      { name: "REL", color: "#8a3c3c" },
      { name: "TCS", color: "#3ca3a3" },
      { name: "HDFC BANK", color: "#c43e3e" },
      { name: "BHARTIARTL", color: "#e67e22" },
    ]

    // Draw funds (left side)
    const fundX = 50
    const fundSpacing = canvas.height / (funds.length + 1)

    funds.forEach((fund, i) => {
      const y = (i + 1) * fundSpacing

      // Draw fund box
      ctx.fillStyle = fund.color
      ctx.fillRect(fundX, y - 15, 120, 30)

      // Draw fund name
      ctx.fillStyle = "#fff"
      ctx.font = "10px Arial"
      ctx.fillText(fund.name, fundX + 10, y + 5)
    })

    // Draw stocks (right side)
    const stockX = canvas.width - 100
    const stockSpacing = canvas.height / (stocks.length + 1)

    stocks.forEach((stock, i) => {
      const y = (i + 1) * stockSpacing

      // Draw stock box
      ctx.fillStyle = stock.color
      ctx.fillRect(stockX, y - 10, 80, 20)

      // Draw stock name
      ctx.fillStyle = "#fff"
      ctx.font = "10px Arial"
      ctx.fillText(stock.name, stockX + 10, y + 5)
    })

    // Draw connections between funds and stocks
    ctx.globalAlpha = 0.2

    // Draw random connections for demonstration
    funds.forEach((fund, i) => {
      const fundY = (i + 1) * fundSpacing

      stocks.forEach((stock, j) => {
        // Only draw some connections to avoid clutter
        if (Math.random() > 0.3) {
          const stockY = (j + 1) * stockSpacing

          // Draw bezier curve
          ctx.beginPath()
          ctx.moveTo(fundX + 120, fundY)
          ctx.bezierCurveTo(fundX + 200, fundY, stockX - 100, stockY, stockX, stockY)

          // Use a gradient color
          const gradient = ctx.createLinearGradient(fundX + 120, fundY, stockX, stockY)
          gradient.addColorStop(0, fund.color)
          gradient.addColorStop(1, stock.color)

          ctx.strokeStyle = gradient
          ctx.lineWidth = 1 + Math.random() * 3 // Vary line width
          ctx.stroke()
        }
      })
    })

    ctx.globalAlpha = 1
  }, [])

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-medium text-white">Overlap Analysis</h3>
        <Info className="h-4 w-4 text-gray-400" />
      </div>

      <div className="text-sm text-gray-400 mb-2">Comparing: Motilal Large Cap Fund and Nippon Large Cap Fund</div>
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
          <span>9 Stocks Overlap across these funds.</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
          <span>71% Average Overlap in holdings.</span>
        </div>
      </div>

      <div className="relative h-[300px] w-full">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
    </div>
  )
}
