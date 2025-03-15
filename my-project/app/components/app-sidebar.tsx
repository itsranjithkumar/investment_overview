"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Home, PieChart, Settings, Wallet } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Portfolio",
    icon: PieChart,
    href: "/portfolio",
  },
  {
    title: "Mutual Funds",
    icon: BarChart3,
    href: "/mutual-funds",
  },
  {
    title: "Tools",
    icon: Settings,
    href: "/tools",
  },
  {
    title: "Transactions",
    icon: Wallet,
    href: "/transactions",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <SidebarProvider defaultOpen>
      <Sidebar>
        <SidebarHeader className="border-b p-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-500">d</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={pathname === item.href} className="gap-4">
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

