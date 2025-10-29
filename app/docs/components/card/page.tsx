"use client"

import { SiteHeader } from "@/components/layout/site-header"
import { DocsSidebar } from "@/components/layout/docs-sidebar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentPreview, CodeBlock } from "@/components/ui/code-block"
import { ChevronRight, Settings, BellRing } from "lucide-react"

const installCode = `npm install @radix-ui/react-slot`

const usageCode = `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}`

const componentCode = `import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`

export default function CardPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <DocsSidebar />
        
        <main className="relative py-6 lg:gap-10 lg:py-8">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
              <ChevronRight className="h-4 w-4" />
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">Components</div>
              <ChevronRight className="h-4 w-4" />
              <div className="font-medium text-foreground">Card</div>
            </div>
            
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Card</h1>
              <p className="text-lg text-muted-foreground">
                Displays a card with header, content, and footer.
              </p>
            </div>

            <div className="pb-12 pt-8 space-y-10">
              {/* Preview */}
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
                  Preview
                </h2>
                <ComponentPreview
                  preview={
                    <Card className="w-[350px]">
                      <CardHeader>
                        <CardTitle>Create project</CardTitle>
                        <CardDescription>Deploy your new project in one-click.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form>
                          <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Name</Label>
                              <Input id="name" placeholder="Name of your project" />
                            </div>
                          </div>
                        </form>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Deploy</Button>
                      </CardFooter>
                    </Card>
                  }
                  code={usageCode}
                  fileName="card-demo.tsx"
                />
              </div>

              {/* Installation */}
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
                  Installation
                </h2>
                <CodeBlock code={installCode} fileName="terminal" />
              </div>

              {/* Usage */}
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
                  Usage
                </h2>
                <CodeBlock code={usageCode} fileName="example.tsx" />
              </div>

              {/* Examples */}
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
                  Examples
                </h2>

                {/* Simple Card */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    Simple Card
                  </h3>
                  <ComponentPreview
                    preview={
                      <Card className="w-[350px]">
                        <CardHeader>
                          <CardTitle>Notifications</CardTitle>
                          <CardDescription>You have 3 unread messages.</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">Check your inbox for new messages.</p>
                        </CardContent>
                      </Card>
                    }
                    code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm">Check your inbox for new messages.</p>
  </CardContent>
</Card>`}
                    fileName="card-simple.tsx"
                  />
                </div>

                {/* Card with Icon */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    Card with Icon
                  </h3>
                  <ComponentPreview
                    preview={
                      <Card className="w-[350px]">
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <BellRing className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <CardTitle>Push Notifications</CardTitle>
                              <CardDescription>Send notifications to device.</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm">
                            You can enable or disable push notifications in settings.
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">
                            <Settings className="mr-2 h-4 w-4" />
                            Configure
                          </Button>
                        </CardFooter>
                      </Card>
                    }
                    code={`<Card className="w-[350px]">
  <CardHeader>
    <div className="flex items-center space-x-4">
      <div className="rounded-full bg-primary/10 p-2">
        <BellRing className="h-6 w-6 text-primary" />
      </div>
      <div className="flex-1 space-y-1">
        <CardTitle>Push Notifications</CardTitle>
        <CardDescription>Send notifications to device.</CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <div className="text-sm">
      You can enable or disable push notifications in settings.
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">
      <Settings className="mr-2 h-4 w-4" />
      Configure
    </Button>
  </CardFooter>
</Card>`}
                    fileName="card-with-icon.tsx"
                  />
                </div>
              </div>

              {/* Component Source */}
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
                  Component Source
                </h2>
                <CodeBlock code={componentCode} fileName="components/ui/card.tsx" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
