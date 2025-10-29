"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/layout/site-header"
import { DocsSidebar } from "@/components/layout/docs-sidebar"
import { Button } from "@/components/ui/button"
import { ComponentPreview, CodeBlock } from "@/components/ui/code-block"
import { Mail, Loader2, ChevronRight } from "lucide-react"

const installCode = `npm install @radix-ui/react-slot`

const usageCode = `import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button>Click me</Button>
}`

const componentCode = `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`

const variantsCode = `<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`

const sizesCode = `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <ChevronRight className="h-4 w-4" />
</Button>`

const withIconCode = `<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>`

const loadingCode = `<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`

export default function ButtonPage() {
  const [isLoading, setIsLoading] = useState(false)

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
              <div className="font-medium text-foreground">Button</div>
            </div>
            
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Button</h1>
              <p className="text-lg text-muted-foreground">
                Displays a button or a component that looks like a button.
              </p>
            </div>

            <div className="pb-12 pt-8 space-y-10">
              {/* Preview */}
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
                  Preview
                </h2>
                <ComponentPreview
                  preview={<Button>Button</Button>}
                  code={usageCode}
                  fileName="button-demo.tsx"
                />
              </div>

              {/* Installation */}
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
                  Installation
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Install the required dependency:
                </p>
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

                {/* Variants */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    Variants
                  </h3>
                  <ComponentPreview
                    preview={
                      <div className="flex flex-wrap gap-4">
                        <Button variant="default">Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                      </div>
                    }
                    code={variantsCode}
                    fileName="button-variants.tsx"
                  />
                </div>

                {/* Sizes */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    Sizes
                  </h3>
                  <ComponentPreview
                    preview={
                      <div className="flex items-center flex-wrap gap-4">
                        <Button size="sm">Small</Button>
                        <Button size="default">Default</Button>
                        <Button size="lg">Large</Button>
                        <Button size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    }
                    code={sizesCode}
                    fileName="button-sizes.tsx"
                  />
                </div>

                {/* With Icon */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    With Icon
                  </h3>
                  <ComponentPreview
                    preview={
                      <Button>
                        <Mail className="mr-2 h-4 w-4" />
                        Login with Email
                      </Button>
                    }
                    code={withIconCode}
                    fileName="button-with-icon.tsx"
                  />
                </div>

                {/* Loading */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    Loading
                  </h3>
                  <ComponentPreview
                    preview={
                      <Button disabled>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </Button>
                    }
                    code={loadingCode}
                    fileName="button-loading.tsx"
                  />
                </div>

                {/* Interactive Example */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    Interactive Example
                  </h3>
                  <ComponentPreview
                    preview={
                      <Button
                        onClick={() => {
                          setIsLoading(true)
                          setTimeout(() => setIsLoading(false), 2000)
                        }}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          "Click to Submit"
                        )}
                      </Button>
                    }
                    code={`const [isLoading, setIsLoading] = useState(false)

<Button
  onClick={() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }}
  disabled={isLoading}
>
  {isLoading ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Processing...
    </>
  ) : (
    "Click to Submit"
  )}
</Button>`}
                    fileName="button-interactive.tsx"
                  />
                </div>
              </div>

              {/* Component Source */}
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
                  Component Source
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Copy and paste the following code into your project:
                </p>
                <CodeBlock code={componentCode} fileName="components/ui/button.tsx" />
              </div>

              {/* Props */}
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
                  Props
                </h2>
                <div className="rounded-lg border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="px-4 py-3 text-left font-medium">Prop</th>
                        <th className="px-4 py-3 text-left font-medium">Type</th>
                        <th className="px-4 py-3 text-left font-medium">Default</th>
                        <th className="px-4 py-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 font-mono text-sm">variant</td>
                        <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                          "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
                        </td>
                        <td className="px-4 py-3 font-mono text-sm">"default"</td>
                        <td className="px-4 py-3 text-sm">The visual style of the button</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 font-mono text-sm">size</td>
                        <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                          "default" | "sm" | "lg" | "icon"
                        </td>
                        <td className="px-4 py-3 font-mono text-sm">"default"</td>
                        <td className="px-4 py-3 text-sm">The size of the button</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono text-sm">asChild</td>
                        <td className="px-4 py-3 font-mono text-sm text-muted-foreground">boolean</td>
                        <td className="px-4 py-3 font-mono text-sm">false</td>
                        <td className="px-4 py-3 text-sm">
                          When true, the button will render as a Slot component, merging its props and behavior with its immediate child
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
