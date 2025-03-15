import type React from "react"
import { Inter } from "next/font/google"
import { BellIcon, LogOutIcon, SearchIcon, UserIcon } from "lucide-react"

import { ThemeProvider } from "./components/theme-provider"
import { Sidebar } from "./components/sidebar"
import { Button } from "@/components/ui/button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen bg-[#121212]">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-14 flex items-center justify-between px-6 bg-[#121212]">
                <nav className="flex space-x-4">
                  <a href="/portfolio" className="text-white">Portfolio</a>
                  <a href="/home" className="text-white">Home</a>
                  <a href="/tools" className="text-white">Tools</a>
                  <a href="/transactions" className="text-white">Transactions</a>
                </nav>
                <input type="text" placeholder="Search..." className="p-2 rounded" />
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <SearchIcon className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <BellIcon className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <UserIcon className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <LogOutIcon className="h-5 w-5" />
                  </Button>
                </div>
              </header>
              <main className="flex-1 p-6">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
