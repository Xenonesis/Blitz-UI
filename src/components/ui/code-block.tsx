"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  fileName?: string
  showLineNumbers?: boolean
}

export function CodeBlock({
  code,
  language = "tsx",
  fileName,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative w-full rounded-lg border bg-muted/50">
      {fileName && (
        <div className="flex items-center justify-between border-b px-4 py-2">
          <span className="text-sm font-mono text-muted-foreground">
            {fileName}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={copyToClipboard}
          >
            {copied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      )}
      <div className="relative">
        {!fileName && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-6 w-6"
            onClick={copyToClipboard}
          >
            {copied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        )}
        <pre className="overflow-x-auto p-4">
          <code className={cn("text-sm", `language-${language}`)}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}

interface ComponentPreviewProps {
  preview: React.ReactNode
  code: string
  fileName?: string
}

export function ComponentPreview({
  preview,
  code,
  fileName,
}: ComponentPreviewProps) {
  return (
    <Tabs defaultValue="preview" className="relative w-full">
      <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
        <TabsTrigger
          value="preview"
          className="relative rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          value="code"
          className="relative rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="relative rounded-md border mt-2">
        <div className="flex min-h-[350px] items-center justify-center p-10">
          {preview}
        </div>
      </TabsContent>
      <TabsContent value="code" className="mt-2">
        <CodeBlock code={code} fileName={fileName} />
      </TabsContent>
    </Tabs>
  )
}
