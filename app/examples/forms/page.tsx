"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/layout/site-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2 } from "lucide-react"

export default function FormsExample() {
  const [isLoading, setIsLoading] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [marketing, setMarketing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Form submitted successfully!")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <div className="container py-8">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Form Examples</h1>
            <p className="text-muted-foreground">
              Various form patterns and examples for different use cases.
            </p>
          </div>

          <Tabs defaultValue="contact" className="space-y-4">
            <TabsList>
              <TabsTrigger value="contact">Contact Form</TabsTrigger>
              <TabsTrigger value="profile">Profile Settings</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            {/* Contact Form */}
            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Last Name <span className="text-red-500">*</span>
                        </Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="sales">Sales Question</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what's on your mind..."
                        className="min-h-[120px]"
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Your message will be sent to our support team.
                      </p>
                    </div>

                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Settings */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>
                    Update your profile information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" placeholder="johndoe" />
                      <p className="text-sm text-muted-foreground">
                        This is your public display name.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself..."
                        className="min-h-[100px]"
                      />
                      <p className="text-sm text-muted-foreground">
                        Brief description for your profile. Max 160 characters.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="url">Website</Label>
                      <Input
                        id="url"
                        type="url"
                        placeholder="https://example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="San Francisco, CA" />
                    </div>

                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <Label htmlFor="public-profile">Public Profile</Label>
                        <p className="text-sm text-muted-foreground">
                          Make your profile visible to everyone
                        </p>
                      </div>
                      <Switch id="public-profile" />
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          "Save Changes"
                        )}
                      </Button>
                      <Button type="button" variant="outline">
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences */}
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>
                    Manage your notification and privacy preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-notif">Communication emails</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive emails about your account activity
                            </p>
                          </div>
                          <Switch
                            id="email-notif"
                            checked={emailNotifications}
                            onCheckedChange={setEmailNotifications}
                          />
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <Label htmlFor="marketing">Marketing emails</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive emails about new products and features
                            </p>
                          </div>
                          <Switch
                            id="marketing"
                            checked={marketing}
                            onCheckedChange={setMarketing}
                          />
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <Label htmlFor="security">Security emails</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive emails about your account security
                            </p>
                            <Badge variant="outline" className="mt-1">
                              Always enabled
                            </Badge>
                          </div>
                          <Switch id="security" checked disabled />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-4 text-lg font-medium">Language & Region</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <Select defaultValue="en">
                            <SelectTrigger id="language">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Spanish</SelectItem>
                              <SelectItem value="fr">French</SelectItem>
                              <SelectItem value="de">German</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="timezone">Timezone</Label>
                          <Select defaultValue="pst">
                            <SelectTrigger id="timezone">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                              <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                              <SelectItem value="cst">Central Time (CT)</SelectItem>
                              <SelectItem value="est">Eastern Time (ET)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          "Save Preferences"
                        )}
                      </Button>
                      <Button type="button" variant="outline">
                        Reset to Defaults
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
