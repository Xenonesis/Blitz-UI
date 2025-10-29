"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/layout/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Mail, Code, Eye, RotateCcw } from "lucide-react"
import Link from "next/link"

export default function ComponentsPage() {
  const [buttonVariant, setButtonVariant] = useState<"default" | "secondary" | "outline" | "ghost" | "destructive">("default")
  const [buttonSize, setButtonSize] = useState<"default" | "sm" | "lg">("default")
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState("")
  
  // Animation controls
  const [duration, setDuration] = useState(100)
  const [distance, setDistance] = useState(100)
  const [animateOpacity, setAnimateOpacity] = useState(true)
  const [animationKey, setAnimationKey] = useState(0)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <div className="container py-8 max-w-[1400px]">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Components</h1>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Beautiful, accessible components with live previews and customization controls. Built with Radix UI and Tailwind CSS.
          </p>
        </div>

        <div className="space-y-16">
          {/* Button Component */}
          <section id="button" className="scroll-mt-20">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Button</h2>
              <p className="text-muted-foreground">Trigger actions and navigate with accessible buttons</p>
            </div>

            <div className="grid lg:grid-cols-[1fr,400px] gap-6">
              {/* Preview */}
              <Card className="bg-gradient-to-br from-background to-muted/20 border-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Preview</CardTitle>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => setAnimationKey(prev => prev + 1)}
                      >
                        <RotateCcw className="h-3 w-3 mr-1" />
                        Replay
                      </Button>
                      <Link href="/docs/components/button">
                        <Badge variant="secondary" className="cursor-pointer">
                          <Code className="h-3 w-3 mr-1" />
                          Code
                        </Badge>
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center min-h-[300px] rounded-xl border-2 border-dashed border-border/50 bg-background/50 backdrop-blur-sm p-8">
                    <motion.div
                      key={animationKey}
                      initial={{ 
                        opacity: animateOpacity ? 0 : 1, 
                        y: distance 
                      }}
                      animate={{ 
                        opacity: 1, 
                        y: 0 
                      }}
                      transition={{ 
                        duration: duration / 100,
                        ease: "easeOut"
                      }}
                    >
                      <Button 
                        variant={buttonVariant} 
                        size={buttonSize}
                        disabled={isLoading}
                        onClick={() => {
                          setIsLoading(true)
                          setTimeout(() => setIsLoading(false), 2000)
                        }}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Loading...
                          </>
                        ) : (
                          "Animate Me"
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              {/* Customize */}
              <Card className="h-fit sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Customize</CardTitle>
                  <CardDescription>Adjust properties in real-time</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Variant */}
                  <div className="space-y-3">
                    <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Variant</Label>
                    <Select value={buttonVariant} onValueChange={(v) => setButtonVariant(v as typeof buttonVariant)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="secondary">Secondary</SelectItem>
                        <SelectItem value="outline">Outline</SelectItem>
                        <SelectItem value="ghost">Ghost</SelectItem>
                        <SelectItem value="destructive">Destructive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Size */}
                  <div className="space-y-3">
                    <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Size</Label>
                    <Select value={buttonSize} onValueChange={(v) => setButtonSize(v as typeof buttonSize)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sm">Small</SelectItem>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="lg">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="border-t pt-6">
                    <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">Animation</Label>
                    
                    {/* Duration Slider */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">Duration</Label>
                        <span className="text-sm text-muted-foreground">{duration}ms</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="200"
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>

                    {/* Distance Slider */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">Distance</Label>
                        <span className="text-sm text-muted-foreground">{distance}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={distance}
                        onChange={(e) => setDistance(parseInt(e.target.value))}
                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>

                    {/* Animate Opacity */}
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <Label htmlFor="animate-opacity" className="cursor-pointer text-sm">Animate Opacity</Label>
                      <Switch id="animate-opacity" checked={animateOpacity} onCheckedChange={setAnimateOpacity} />
                    </div>
                  </div>

                  {/* Loading State */}
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <Label htmlFor="loading-state" className="cursor-pointer text-sm">Loading State</Label>
                    <Switch id="loading-state" checked={isLoading} onCheckedChange={setIsLoading} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Input Component */}
          <section id="input" className="scroll-mt-20">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Input</h2>
              <p className="text-muted-foreground">Capture user input with various styles and states</p>
            </div>

            <div className="grid lg:grid-cols-[1fr,400px] gap-6">
              <Card className="bg-gradient-to-br from-background to-muted/20 border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 rounded-xl border-2 border-dashed border-border/50 bg-background/50 backdrop-blur-sm p-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="name@example.com"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                        />
                        {inputValue && (
                          <p className="text-xs text-muted-foreground">Value: {inputValue}</p>
                        )}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="email-icon">With Icon</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input id="email-icon" placeholder="Email" className="pl-9" />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="disabled">Disabled</Label>
                        <Input id="disabled" placeholder="Disabled input" disabled />
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-fit sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Properties</CardTitle>
                  <CardDescription>Input component specifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-muted/50 p-4 border">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Type</p>
                    <p className="text-sm font-mono">text | email | password | number</p>
                  </div>

                  <div className="rounded-lg bg-muted/50 p-4 border">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">States</p>
                    <div className="space-y-1">
                      <p className="text-sm">• Default</p>
                      <p className="text-sm">• Focused</p>
                      <p className="text-sm">• Disabled</p>
                      <p className="text-sm">• Error</p>
                    </div>
                  </div>

                  <Link href="/docs/components/input">
                    <Button variant="outline" className="w-full">
                      <Code className="mr-2 h-4 w-4" />
                      View Documentation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Card Component */}
          <section id="card" className="scroll-mt-20">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Card</h2>
              <p className="text-muted-foreground">Flexible container with header, content and footer</p>
            </div>

            <div className="grid lg:grid-cols-[1fr,400px] gap-6">
              <Card className="bg-gradient-to-br from-background to-muted/20 border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-border/50 bg-background/50 backdrop-blur-sm p-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full max-w-md"
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>Card Title</CardTitle>
                          <CardDescription>Card description goes here</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">This is the card content area where you can place any elements.</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-fit sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-muted/50 p-4 border font-mono text-xs overflow-x-auto">
                    <pre>{`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>
      Description
    </CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>`}</pre>
                  </div>
                  <Link href="/docs/components/card" className="mt-4 block">
                    <Button variant="outline" className="w-full">
                      <Code className="mr-2 h-4 w-4" />
                      View Documentation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* More Components Grid */}
          <section className="scroll-mt-20">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">More Components</h2>
              <p className="text-muted-foreground">Explore our full collection of UI components</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  name: "Switch", 
                  id: "switch", 
                  component: <Switch />,
                  description: "Toggle between two states"
                },
                { 
                  name: "Badge", 
                  id: "badge", 
                  component: <Badge>New</Badge>,
                  description: "Display status or category"
                },
                { 
                  name: "Avatar", 
                  id: "avatar", 
                  component: <Avatar className="h-10 w-10"><div className="flex h-full w-full items-center justify-center rounded-full bg-primary/10 text-sm font-medium">JD</div></Avatar>,
                  description: "User profile image"
                },
                { 
                  name: "Select", 
                  id: "select", 
                  component: <Select><SelectTrigger className="w-[180px]"><SelectValue placeholder="Select" /></SelectTrigger></Select>,
                  description: "Choose from dropdown list"
                },
                { 
                  name: "Tabs", 
                  id: "tabs", 
                  component: <Tabs defaultValue="tab1" className="w-full"><TabsList><TabsTrigger value="tab1">Tab 1</TabsTrigger><TabsTrigger value="tab2">Tab 2</TabsTrigger></TabsList></Tabs>,
                  description: "Navigate between sections"
                },
                { 
                  name: "Textarea", 
                  id: "textarea", 
                  component: <Textarea placeholder="Type here..." rows={3} />,
                  description: "Multi-line text input"
                },
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        {item.name}
                        <Badge variant="outline" className="ml-2">Preview</Badge>
                      </CardTitle>
                      <CardDescription className="text-xs">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center min-h-[120px] rounded-lg border-2 border-dashed border-border/50 bg-muted/30 p-6 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                        {item.component}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Link href={`#${item.id}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            <Eye className="h-3 w-3 mr-1" />
                            Preview
                          </Button>
                        </Link>
                        <Link href={`/docs/components/${item.id}`} className="flex-1">
                          <Button size="sm" className="w-full">
                            <Code className="h-3 w-3 mr-1" />
                            Docs
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
