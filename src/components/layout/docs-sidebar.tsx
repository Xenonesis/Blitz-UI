"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Boxes,
  Layout,
  Type,
  MousePointer,
  Database,
  Zap,
  Layers,
  Globe,
  Code,
} from "lucide-react"

interface SidebarNavItem {
  title: string
  href?: string
  items?: SidebarNavItem[]
  icon?: React.ReactNode
}

const sidebarNav: SidebarNavItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
      { title: "CLI", href: "/docs/cli" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button", icon: <MousePointer className="h-4 w-4" /> },
      { title: "Card", href: "/docs/components/card", icon: <Layout className="h-4 w-4" /> },
      { title: "Input", href: "/docs/components/input", icon: <Type className="h-4 w-4" /> },
      { title: "Dialog", href: "/docs/components/dialog", icon: <Boxes className="h-4 w-4" /> },
      { title: "Select", href: "/docs/components/select", icon: <Database className="h-4 w-4" /> },
      { title: "Tabs", href: "/docs/components/tabs", icon: <Layers className="h-4 w-4" /> },
      { title: "Tooltip", href: "/docs/components/tooltip", icon: <Zap className="h-4 w-4" /> },
      { title: "Accordion", href: "/docs/components/accordion", icon: <Code className="h-4 w-4" /> },
    ],
  },
  {
    title: "Examples",
    items: [
      { title: "Dashboard", href: "/examples/dashboard" },
      { title: "Forms", href: "/examples/forms" },
      { title: "Authentication", href: "/examples/auth" },
      { title: "Cards", href: "/examples/cards" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea className="h-full py-6 pr-6 lg:py-8">
        <div className="w-full">
          {sidebarNav.map((section, i) => (
            <div key={i} className="pb-8">
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                {section.title}
              </h4>
              {section.items && (
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {section.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href || "#"}
                      className={cn(
                        "group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:bg-muted",
                        pathname === item.href
                          ? "font-medium text-foreground bg-muted"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.icon && (
                        <span className="mr-2 opacity-60">{item.icon}</span>
                      )}
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}
