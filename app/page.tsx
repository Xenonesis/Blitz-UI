"use client"

import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Shield, Code2, Sparkles, Github, BookOpen } from "lucide-react"
import { ComponentPreview } from "@/components/ui/code-block"

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Built with performance in mind. Optimized for the best developer experience.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Type Safe",
    description: "Full TypeScript support with detailed type definitions for all components.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Accessible",
    description: "Components follow WAI-ARIA guidelines and support keyboard navigation.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Customizable",
    description: "Easily customize colors, spacing, and behavior through Tailwind CSS.",
  },
]

const sampleCode = `import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <Button variant="default">
      Click me
    </Button>
  )
`

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="container py-24 md:py-32 lg:py-40">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="mr-1 h-3 w-3" />
            New components added
          </Badge>
          
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
            Build beautiful interfaces
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}faster than ever
            </span>
          </h1>
          
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Beautifully designed components built with Radix UI and Tailwind CSS.
            Accessible. Customizable. Open Source.
          </p>
          
          <div className="flex gap-4 mt-6">
            <Button size="lg" asChild>
              <Link href="/docs">
                <BookOpen className="mr-2 h-4 w-4" />
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 w-full max-w-md">
            <div>
              <div className="text-3xl font-bold">30+</div>
              <div className="text-sm text-muted-foreground">Components</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Type Safe</div>
            </div>
            <div>
              <div className="text-3xl font-bold">A11y</div>
              <div className="text-sm text-muted-foreground">Accessible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="container py-16 border-t">
        <div className="mx-auto max-w-[980px]">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">See it in action</h2>
            <p className="text-lg text-muted-foreground">
              Preview components with live code examples
            </p>
          </div>

          <ComponentPreview
            preview={
              <div className="flex gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            }
            code={sampleCode}
            fileName="example.tsx"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 border-t">
        <div className="mx-auto max-w-[980px]">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Why Blitz UI?</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to build modern web applications
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 border-t">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to build something amazing?
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground mb-8">
            Get started with Blitz UI today and ship your next project faster.
          </p>
          <Button size="lg" asChild>
            <Link href="/docs">
              Browse Components
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by developers, for developers. The source code is available on{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
