# 🚀 Quick Start Guide - Blitz UI

## ⚡ Get Started in 3 Steps

### Step 1: Dependencies Already Installed ✅
All dependencies are already installed. If you need to reinstall:
```bash
cd c:\Users\addy\Downloads\blitz
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.180.1:3000

### Step 3: Start Building! 🎨

## 📱 What You'll See

### Homepage (/)
- Hero section with call-to-action
- Features showcase
- Complete component demonstrations
- Interactive tabs with examples:
  - **Buttons**: All button variants and sizes
  - **Forms**: Input fields, textarea, switches
  - **Overlays**: Dialogs, dropdowns, tooltips
  - **Layout**: Accordions, avatars

### Components Page (/components)
- Component registry table
- Statistics cards
- Getting started guide
- Filter functionality

## 🎨 Quick Component Examples

### 1. Using a Button
```tsx
import { Button } from "@/components/ui"

<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Delete</Button>
```

### 2. Creating a Card
```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description here</CardDescription>
  </CardHeader>
  <CardContent>
    Your content goes here
  </CardContent>
</Card>
```

### 3. Building a Form
```tsx
import { Input, Label, Button } from "@/components/ui"

<form>
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="Enter email" />
  </div>
  <Button type="submit">Submit</Button>
</form>
```

### 4. Adding a Dialog
```tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@/components/ui"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <p>Dialog content here</p>
  </DialogContent>
</Dialog>
```

## 🌓 Theme Toggle

The theme toggle is already in the navbar. You can also use it programmatically:

```tsx
"use client"

import { useTheme } from "@/components/theme/theme-provider"

function MyComponent() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Current theme: {theme}
    </button>
  )
}
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server (Turbopack)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint

# CLI Tool
npm run ui list      # List all components
npm run ui add button   # Show component info
npm run ui docs card    # Show documentation
```

## 📁 Project Structure Overview

```
src/components/ui/
├── button.tsx       # Button component
├── input.tsx        # Input field
├── card.tsx         # Card container
├── dialog.tsx       # Modal dialogs
├── dropdown-menu.tsx # Dropdown menus
├── select.tsx       # Select dropdown
├── switch.tsx       # Toggle switch
├── tabs.tsx         # Tabbed interface
├── accordion.tsx    # Collapsible sections
├── tooltip.tsx      # Tooltips
├── badge.tsx        # Status badges
├── avatar.tsx       # User avatars
├── textarea.tsx     # Multiline input
├── label.tsx        # Form labels
├── table.tsx        # Data tables
├── scroll-area.tsx  # Scrollable areas
└── index.ts         # Barrel exports
```

## 🎯 Common Tasks

### Add a New Page
Create a new file in `app/`:
```tsx
// app/my-page/page.tsx
export default function MyPage() {
  return <div>My new page</div>
}
```
Access at: http://localhost:3000/my-page

### Customize Theme Colors
Edit `app/globals.css`:
```css
:root {
  --primary: 200 100% 50%; /* Blue primary color */
  --radius: 0.75rem;       /* Larger border radius */
}
```

### Import Multiple Components
```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  Label,
} from "@/components/ui"
```

## 🎨 Styling Tips

### Using className Prop
All components accept a `className` prop:
```tsx
<Button className="w-full mt-4">Full Width Button</Button>
```

### Combining with Tailwind
```tsx
<Card className="max-w-md mx-auto shadow-lg">
  <CardContent className="p-8">
    Content with custom padding
  </CardContent>
</Card>
```

## 📚 Learn More

- **Full Documentation**: See `DOCUMENTATION.md`
- **Contributing**: See `CONTRIBUTING.md`
- **Component Details**: Check each component file for JSDoc comments
- **Live Examples**: Visit http://localhost:3000

## 🆘 Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Clear Cache
```bash
# Remove .next directory
Remove-Item -Recurse -Force .next
npm run dev
```

### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

## ✨ What's Next?

1. **Explore Components**: Visit http://localhost:3000 to see all components in action
2. **Customize Theme**: Edit `app/globals.css` to match your brand
3. **Build Your App**: Start creating your own pages and components
4. **Read Docs**: Check `DOCUMENTATION.md` for advanced usage

## 🎉 You're All Set!

The Blitz UI component library is running and ready for development. Open http://localhost:3000 in your browser to get started!

**Happy coding! 🚀**
