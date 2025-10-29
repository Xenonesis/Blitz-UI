"use client"

import { SiteHeader } from "@/components/layout/site-header"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { LayoutDashboard, FileText, LogIn, Settings, ShoppingCart, Calendar } from "lucide-react"

const examples = [
  {
    name: "Dashboard",
    description: "A complete dashboard layout with sidebar navigation, stats cards, and charts.",
    href: "/examples/dashboard",
    icon: LayoutDashboard,
    status: "Ready",
  },
  {
    name: "Forms",
    description: "Various form examples including validation, multi-step forms, and file uploads.",
    href: "/examples/forms",
    icon: FileText,
    status: "Ready",
  },
  {
    name: "Authentication",
    description: "Login, signup, and password reset pages with modern design.",
    href: "/examples/auth",
    icon: LogIn,
    status: "Ready",
  },
  {
    name: "Settings",
    description: "User settings page with tabs for profile, account, and preferences.",
    href: "/examples/settings",
    icon: Settings,
    status: "Ready",
  },
  {
    name: "E-commerce",
    description: "Product listing, product detail, and checkout flow examples.",
    href: "/examples/ecommerce",
    icon: ShoppingCart,
    status: "Coming Soon",
  },
  {
    name: "Calendar",
    description: "Interactive calendar with event management capabilities.",
    href: "/examples/calendar",
    icon: Calendar,
    status: "Coming Soon",
  },
]

export default function ExamplesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <div className="container py-8">
        <div className="mx-auto max-w-[980px]">
          <div className="space-y-2 mb-8">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Examples</h1>
            <p className="text-lg text-muted-foreground">
              Real-world examples and templates built with Blitz UI components. Use these as starting points for your projects.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {examples.map((example) => {
              const Icon = example.icon
              const isReady = example.status === "Ready"
              
              return (
                <Link 
                  key={example.name} 
                  href={isReady ? example.href : "#"}
                  className={!isReady ? "pointer-events-none" : ""}
                >
                  <Card className={`h-full transition-colors ${isReady ? "hover:border-primary" : "opacity-60"}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Icon className="h-6 w-6 text-primary" />
                        <Badge variant={isReady ? "default" : "outline"}>
                          {example.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{example.name}</CardTitle>
                      <CardDescription>{example.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="mt-12 rounded-lg border bg-muted/50 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">More Examples Coming Soon</h2>
            <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
              We&apos;re continuously adding new examples to help you build amazing applications faster. 
              Check back soon for more templates and patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
