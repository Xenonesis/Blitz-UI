"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Label,
} from "@/components/ui"

const navItems = [
  { title: "Home", href: "/" },
  { title: "Components", href: "/components" },
]

const components = [
  { name: "Button", category: "Atoms", status: "Stable", accessibility: "100%" },
  { name: "Input", category: "Atoms", status: "Stable", accessibility: "100%" },
  { name: "Textarea", category: "Atoms", status: "Stable", accessibility: "100%" },
  { name: "Badge", category: "Atoms", status: "Stable", accessibility: "100%" },
  { name: "Avatar", category: "Atoms", status: "Stable", accessibility: "100%" },
  { name: "Card", category: "Molecules", status: "Stable", accessibility: "100%" },
  { name: "Dialog", category: "Molecules", status: "Stable", accessibility: "100%" },
  { name: "DropdownMenu", category: "Molecules", status: "Stable", accessibility: "100%" },
  { name: "Switch", category: "Molecules", status: "Stable", accessibility: "100%" },
  { name: "Tooltip", category: "Molecules", status: "Stable", accessibility: "100%" },
  { name: "Select", category: "Molecules", status: "Stable", accessibility: "100%" },
  { name: "Tabs", category: "Organisms", status: "Stable", accessibility: "100%" },
  { name: "Accordion", category: "Organisms", status: "Stable", accessibility: "100%" },
  { name: "Navbar", category: "Organisms", status: "Stable", accessibility: "100%" },
  { name: "Sidebar", category: "Organisms", status: "Stable", accessibility: "100%" },
  { name: "Table", category: "Organisms", status: "Stable", accessibility: "100%" },
]

export default function ComponentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Blitz UI" items={navItems} />
      
      <main className="flex-1 container py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Component Library</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive collection of accessible, customizable UI components
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Components</CardTitle>
                <CardDescription>Available in the library</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{components.length}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility</CardTitle>
                <CardDescription>WAI-ARIA compliant</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">100%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Framework</CardTitle>
                <CardDescription>Built with</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Next.js 16</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Component Registry</CardTitle>
              <CardDescription>
                All available components organized by category
              </CardDescription>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex-1">
                  <Label htmlFor="category-filter">Filter by Category</Label>
                  <Select>
                    <SelectTrigger id="category-filter">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="atoms">Atoms</SelectItem>
                      <SelectItem value="molecules">Molecules</SelectItem>
                      <SelectItem value="organisms">Organisms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>Complete list of UI components</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Accessibility</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {components.map((component) => (
                    <TableRow key={component.name}>
                      <TableCell className="font-medium">{component.name}</TableCell>
                      <TableCell>{component.category}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                          {component.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">{component.accessibility}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                How to use components in your project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Import Components</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`import { Button, Card } from "@/components/ui"`}</code>
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Use in Your Code</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`<Card>
  <CardHeader>
    <CardTitle>Hello World</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Click me</Button>
  </CardContent>
</Card>`}</code>
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Customize</h3>
                <p className="text-sm text-muted-foreground">
                  All components accept a className prop for custom styling with Tailwind CSS.
                  You can also modify the theme variables in globals.css for global changes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
