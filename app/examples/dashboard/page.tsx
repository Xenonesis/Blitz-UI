"use client"

import { SiteHeader } from "@/components/layout/site-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Download,
} from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "+2,350",
    change: "+180.1%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Total Sales",
    value: "+12,234",
    change: "+19%",
    trend: "up",
    icon: CreditCard,
  },
  {
    title: "Active Now",
    value: "+573",
    change: "+201",
    trend: "up",
    icon: Activity,
  },
]

const recentSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    avatar: "OM",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    avatar: "JL",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    avatar: "IN",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    avatar: "WK",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    avatar: "SD",
  },
]

const recentOrders = [
  {
    id: "ORD001",
    customer: "Liam Johnson",
    status: "Fulfilled",
    amount: "$250.00",
    date: "2024-10-28",
  },
  {
    id: "ORD002",
    customer: "Emma Brown",
    status: "Pending",
    amount: "$150.00",
    date: "2024-10-28",
  },
  {
    id: "ORD003",
    customer: "Noah Williams",
    status: "Fulfilled",
    amount: "$350.00",
    date: "2024-10-27",
  },
  {
    id: "ORD004",
    customer: "Olivia Davis",
    status: "Cancelled",
    amount: "$450.00",
    date: "2024-10-27",
  },
  {
    id: "ORD005",
    customer: "Ava Miller",
    status: "Fulfilled",
    amount: "$550.00",
    date: "2024-10-26",
  },
]

export default function DashboardExample() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here&apos;s what&apos;s happening with your business today.
            </p>
          </div>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.title}
                      </CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground flex items-center mt-1">
                        {stat.trend === "up" ? (
                          <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                        ) : (
                          <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                        )}
                        <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                          {stat.change}
                        </span>
                        <span className="ml-1">from last month</span>
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Main Content */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {/* Chart Placeholder */}
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>
                    Your revenue performance for the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                    <div className="text-center">
                      <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">Chart component would go here</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Integrate with Chart.js, Recharts, or your preferred charting library
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Sales */}
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {recentSales.map((sale) => (
                      <div key={sale.email} className="flex items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                          {sale.avatar}
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {sale.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {sale.email}
                          </p>
                        </div>
                        <div className="ml-auto font-medium">
                          {sale.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  A list of your recent orders and their status.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "Fulfilled"
                                ? "default"
                                : order.status === "Pending"
                                ? "outline"
                                : "destructive"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell className="text-right">{order.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Detailed analytics and insights about your business.
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Analytics content would be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>
                  Generate and view detailed reports.
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Reports content would be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
