"use client"

import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { DocsSidebar } from "@/components/layout/docs-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Package, Code2, Terminal } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <DocsSidebar />
        
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
            </div>
            
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Getting Started</h1>
              <p className="text-lg text-muted-foreground">
                Welcome to Blitz UI - A modern component library built with React, TypeScript, and Tailwind CSS.
              </p>
            </div>

            <div className="pb-12 pt-8">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  Overview
                </h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Blitz UI is a collection of re-usable components built using Radix UI and Tailwind CSS.
                  It provides a solid foundation for building modern web applications with React.
                </p>

                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
                  Features
                </h2>
                
                <div className="grid gap-4 md:grid-cols-2 not-prose mt-6">
                  <Card>
                    <CardHeader>
                      <Zap className="h-8 w-8 mb-2 text-primary" />
                      <CardTitle>Fast Development</CardTitle>
                      <CardDescription>
                        Pre-built components that you can copy and paste into your apps. Save hours of development time.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Package className="h-8 w-8 mb-2 text-primary" />
                      <CardTitle>Accessible</CardTitle>
                      <CardDescription>
                        Built on Radix UI primitives with full keyboard navigation and screen reader support.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Code2 className="h-8 w-8 mb-2 text-primary" />
                      <CardTitle>Customizable</CardTitle>
                      <CardDescription>
                        Fully customizable with Tailwind CSS. Change colors, spacing, and styling to match your brand.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Terminal className="h-8 w-8 mb-2 text-primary" />
                      <CardTitle>Type Safe</CardTitle>
                      <CardDescription>
                        Written in TypeScript with full type definitions for better developer experience and fewer bugs.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
                  Installation
                </h2>
                
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Follow these steps to get started with Blitz UI in your project:
                </p>

                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
                  1. Install Dependencies
                </h3>
                
                <div className="not-prose">
                  <div className="relative rounded-lg border bg-muted p-4 font-mono text-sm mt-4">
                    <code>npm install tailwindcss class-variance-authority clsx tailwind-merge</code>
                  </div>
                </div>

                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
                  2. Install Radix UI Primitives
                </h3>
                
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Install the Radix UI primitives you need:
                </p>

                <div className="not-prose">
                  <div className="relative rounded-lg border bg-muted p-4 font-mono text-sm mt-4">
                    <code>npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-select</code>
                  </div>
                </div>

                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
                  3. Configure Tailwind CSS
                </h3>
                
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Add the following to your <code>tailwind.config.js</code>:
                </p>

                <div className="not-prose">
                  <div className="relative rounded-lg border bg-muted p-4 font-mono text-sm mt-4 overflow-x-auto">
                    <pre><code>{`module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code></pre>
                  </div>
                </div>

                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
                  4. Add CSS Variables
                </h3>
                
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Copy the CSS variables from our globals.css to enable theming.
                </p>

                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
                  Using Components
                </h2>
                
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Browse the components in the sidebar and copy the code you need. Each component page includes:
                </p>

                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>Live preview of the component</li>
                  <li>Complete source code</li>
                  <li>Installation instructions</li>
                  <li>Usage examples</li>
                  <li>API reference</li>
                </ul>

                <div className="not-prose mt-8">
                  <Button asChild>
                    <Link href="/docs/components/button">
                      Browse Components
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
