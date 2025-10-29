"use client"

import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MousePointerClick, 
  TypeIcon, 
  CreditCard, 
  PanelTop,
  Menu,
  CheckSquare,
  Settings,
  Tag,
  MoreHorizontal,
  User,
  ScrollText,
  Table2,
  Copy,
  SlidersHorizontal
} from "lucide-react"

const components = [
  {
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    href: "#button",
    docsHref: "/docs/components/button",
    icon: MousePointerClick,
    category: "Form",
  },
  {
    name: "Input",
    description: "Displays a form input field or a component that looks like an input field.",
    href: "#input",
    docsHref: "/docs/components/input",
    icon: TypeIcon,
    category: "Form",
  },
  {
    name: "Card",
    description: "Displays a card with header, content, and footer.",
    href: "#card",
    docsHref: "/docs/components/card",
    icon: CreditCard,
    category: "Layout",
  },
  {
    name: "Dialog",
    description: "A window overlaid on either the primary window or another dialog window.",
    href: "#dialog",
    docsHref: "/docs/components/dialog",
    icon: PanelTop,
    category: "Overlay",
  },
  {
    name: "Dropdown Menu",
    description: "Displays a menu to the user triggered by a button.",
    href: "#dropdown-menu",
    docsHref: "/docs/components/dropdown-menu",
    icon: Menu,
    category: "Overlay",
  },
  {
    name: "Select",
    description: "Displays a list of options for the user to pick from.",
    href: "#select",
    docsHref: "/docs/components/select",
    icon: CheckSquare,
    category: "Form",
  },
  {
    name: "Switch",
    description: "A control that allows the user to toggle between checked and not checked.",
    href: "#switch",
    docsHref: "/docs/components/switch",
    icon: Settings,
    category: "Form",
  },
  {
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    href: "#badge",
    docsHref: "/docs/components/badge",
    icon: Tag,
    category: "Display",
  },
  {
    name: "Tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    href: "#tooltip",
    docsHref: "/docs/components/tooltip",
    icon: MoreHorizontal,
    category: "Overlay",
  },
  {
    name: "Avatar",
    description: "An image element with a fallback for representing the user.",
    href: "#avatar",
    docsHref: "/docs/components/avatar",
    icon: User,
    category: "Display",
  },
  {
    name: "Accordion",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    href: "#accordion",
    docsHref: "/docs/components/accordion",
    icon: ScrollText,
    category: "Display",
  },
  {
    name: "Table",
    description: "A responsive table component.",
    href: "#table",
    docsHref: "/docs/components/table",
    icon: Table2,
    category: "Display",
  },
  {
    name: "Tabs",
    description: "A set of layered sections of content known as tab panels that are displayed one at a time.",
    href: "#tabs",
    docsHref: "/docs/components/tabs",
    icon: Copy,
    category: "Layout",
  },
  {
    name: "Scroll Area",
    description: "Augments native scroll functionality for custom, cross-browser styling.",
    href: "#scroll-area",
    docsHref: "/docs/components/scroll-area",
    icon: SlidersHorizontal,
    category: "Layout",
  },
]

const categories = Array.from(new Set(components.map(c => c.category)))

export default function ComponentsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <div className="container py-8">
        <div className="mx-auto max-w-[980px]">
          <div className="space-y-2 mb-8">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Components</h1>
            <p className="text-lg text-muted-foreground">
              Browse our collection of beautiful, accessible components. Click on any component to see it in action, or visit the documentation for detailed usage guides.
            </p>
          </div>

          <div className="flex items-center gap-2 mb-8">
            <Badge variant="outline">{components.length} Components</Badge>
            <Badge variant="outline">{categories.length} Categories</Badge>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-6">
                {category}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {components
                  .filter((component) => component.category === category)
                  .map((component) => {
                    const Icon = component.icon
                    return (
                      <div key={component.name}>
                        <Card className="h-full transition-colors hover:border-primary">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <Icon className="h-6 w-6 mb-2 text-primary" />
                            </div>
                            <CardTitle className="text-lg">{component.name}</CardTitle>
                            <CardDescription>{component.description}</CardDescription>
                            <div className="flex gap-2 pt-4">
                              <Link href={component.href}>
                                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                                  Preview
                                </Badge>
                              </Link>
                              <Link href={component.docsHref}>
                                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                                  Docs
                                </Badge>
                              </Link>
                            </div>
                          </CardHeader>
                        </Card>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
