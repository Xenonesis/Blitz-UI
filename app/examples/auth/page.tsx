"use client"

import { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Github, Mail } from "lucide-react"

export default function AuthExample() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert("Success! This is a demo.")
    }, 2000)
  }

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert(`Logged in with ${provider}. This is a demo.`)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <div className="container py-8">
        <div className="mx-auto max-w-[450px]">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Authentication</h1>
            <p className="text-muted-foreground mt-2">
              Example login and signup forms
            </p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome back</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">Password</Label>
                        <Link
                          href="#"
                          className="text-sm text-primary hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Signing in...
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </Button>

                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialLogin("GitHub")}
                        disabled={isLoading}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialLogin("Google")}
                        disabled={isLoading}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Google
                      </Button>
                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                      Don&apos;t have an account?{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Sign up
                      </Link>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Signup Tab */}
            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription>
                    Enter your information to get started
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-firstname">First name</Label>
                        <Input
                          id="signup-firstname"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-lastname">Last name</Label>
                        <Input
                          id="signup-lastname"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="name@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Must be at least 8 characters long
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm">Confirm password</Label>
                      <Input
                        id="signup-confirm"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating account...
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </Button>

                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or sign up with
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialLogin("GitHub")}
                        disabled={isLoading}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialLogin("Google")}
                        disabled={isLoading}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Google
                      </Button>
                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Sign in
                      </Link>
                    </p>

                    <p className="text-xs text-center text-muted-foreground">
                      By clicking continue, you agree to our{" "}
                      <Link href="#" className="underline hover:text-primary">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="underline hover:text-primary">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Additional Auth Options */}
          <div className="mt-8 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Password Reset</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reset-email">Email</Label>
                    <Input
                      id="reset-email"
                      type="email"
                      placeholder="name@example.com"
                    />
                    <p className="text-sm text-muted-foreground">
                      We&apos;ll send you a link to reset your password
                    </p>
                  </div>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Reset Link"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
