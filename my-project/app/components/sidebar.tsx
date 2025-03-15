"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Home, PieChart, Settings, Wallet } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-blue-500 border-l-2 border-blue-500" : "text-gray-400"
  }

  return (
    <div className="w-[180px] bg-[#1a1a1a] flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold text-blue-500">d</span>
        </Link>
      </div>

      <div className="p-4 border-b border-gray-800">
        <div className="bg-[#2a2a2a] rounded p-2 text-gray-300 mb-4">PHA</div>

        <nav className="space-y-4">
          <Link href="/fund-analysis" className={`block py-1 ${isActive("/fund-analysis")}`}>
            Fund Analysis
          </Link>
          <Link href="/holdings" className={`block py-1 ${isActive("/holdings")}`}>
            Holdings
          </Link>
          <Link href="/transactions" className={`block py-1 ${isActive("/transactions")}`}>
            Transactions
          </Link>
        </nav>
      </div>

      <div className="p-4 mt-auto">
        <nav className="flex justify-between">
          <Link href="/" className={`${pathname === "/" ? "text-blue-500" : "text-gray-400"}`}>
            <Home className="h-5 w-5" />
          </Link>
          <Link href="/portfolio" className={`${pathname === "/portfolio" ? "text-blue-500" : "text-gray-400"}`}>
            <PieChart className="h-5 w-5" />
          </Link>
          <Link href="/mutual-funds" className={`${pathname === "/mutual-funds" ? "text-blue-500" : "text-gray-400"}`}>
            <BarChart3 className="h-5 w-5" />
          </Link>
          <Link href="/tools" className={`${pathname === "/tools" ? "text-blue-500" : "text-gray-400"}`}>
            <Settings className="h-5 w-5" />
          </Link>
          <Link href="/transactions" className={`${pathname === "/transactions" ? "text-blue-500" : "text-gray-400"}`}>
            <Wallet className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </div>
  )
}

