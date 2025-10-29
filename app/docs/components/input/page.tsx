"use client"

import { SiteHeader } from "@/components/layout/site-header"
import { DocsSidebar } from "@/components/layout/docs-sidebar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentPreview, CodeBlock } from "@/components/ui/code-block"
import { ChevronRight, Mail, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const installCode = `npm install @radix-ui/react-label`

const usageCode = `import { Input } from "@/components/ui/input"

export default function Example() {
  return <Input type="email" placeholder="Email" />
}`

const componentCode = `import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }`

export default function InputPage() {
  const [showPassword, setShowPassword] = useState(false)

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
              <div className="font-medium text-foreground">Input</div>
            </div>
            
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Input</h1>
              <p className="text-lg text-muted-foreground">
                Displays a form input field.
              </p>
            </div>

            <div className="pb-12 pt-8 space-y-10">
              {/* Preview */}
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
                  Preview
                </h2>
                <ComponentPreview
                  preview={<Input type="email" placeholder="Email" />}
                  code={usageCode}
                  fileName="input-demo.tsx"
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

                {/* Default */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    Default
                  </h3>
                  <ComponentPreview
                    preview={<Input placeholder="Type something..." />}
                    code={`<Input placeholder="Type something..." />`}
                    fileName="input-default.tsx"
                  />
                </div>

                {/* With Label */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    With Label
                  </h3>
                  <ComponentPreview
                    preview={
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                      </div>
                    }
                    code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
                    fileName="input-with-label.tsx"
                  />
                </div>

                {/* With Text */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    With Help Text
                  </h3>
                  <ComponentPreview
                    preview={
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email-2">Email</Label>
                        <Input type="email" id="email-2" placeholder="Email" />
                        <p className="text-sm text-muted-foreground">
                          We&apos;ll never share your email with anyone else.
                        </p>
                      </div>
                    }
                    code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email-2">Email</Label>
  <Input type="email" id="email-2" placeholder="Email" />
  <p className="text-sm text-muted-foreground">
    We'll never share your email with anyone else.
  </p>
</div>`}
                    fileName="input-with-text.tsx"
                  />
                </div>

                {/* With Icon */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    With Icon
                  </h3>
                  <ComponentPreview
                    preview={
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email-3">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="email"
                            id="email-3"
                            placeholder="Email"
                            className="pl-8"
                          />
                        </div>
                      </div>
                    }
                    code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email-3">Email</Label>
  <div className="relative">
    <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input
      type="email"
      id="email-3"
      placeholder="Email"
      className="pl-8"
    />
  </div>
</div>`}
                    fileName="input-with-icon.tsx"
                  />
                </div>

                {/* Password Toggle */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    Password with Toggle
                  </h3>
                  <ComponentPreview
                    preview={
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                            className="pr-10"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    }
                    code={`const [showPassword, setShowPassword] = useState(false)

<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="password">Password</Label>
  <div className="relative">
    <Input
      type={showPassword ? "text" : "password"}
      id="password"
      placeholder="Password"
      className="pr-10"
    />
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="absolute right-0 top-0 h-full"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? (
        <EyeOff className="h-4 w-4" />
      ) : (
        <Eye className="h-4 w-4" />
      )}
    </Button>
  </div>
</div>`}
                    fileName="input-password-toggle.tsx"
                  />
                </div>

                {/* Disabled */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    Disabled
                  </h3>
                  <ComponentPreview
                    preview={<Input disabled placeholder="Disabled input" />}
                    code={`<Input disabled placeholder="Disabled input" />`}
                    fileName="input-disabled.tsx"
                  />
                </div>

                {/* File */}
                <div className="mb-8">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    File Input
                  </h3>
                  <ComponentPreview
                    preview={
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">Picture</Label>
                        <Input id="picture" type="file" />
                      </div>
                    }
                    code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>`}
                    fileName="input-file.tsx"
                  />
                </div>
              </div>

              {/* Component Source */}
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
                  Component Source
                </h2>
                <CodeBlock code={componentCode} fileName="components/ui/input.tsx" />
              </div>

              {/* Props */}
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
                  Props
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  The Input component extends all standard HTML input attributes.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
