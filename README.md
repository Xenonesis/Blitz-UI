# 🚀 Blitz UI - Modern Component Library

<div align="center">
  <h3>A comprehensive UI component library built with ShadCN UI, Tailwind CSS, and Radix UI</h3>
  
  [![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

---

## ✨ Features

- 🎨 **30+ Production-Ready Components** - Buttons, Cards, Dialogs, Forms, and more
- 🌓 **Dark Mode Support** - Built-in theme switching with system preference detection
- ♿ **Fully Accessible** - WAI-ARIA compliant with keyboard navigation
- 🎯 **TypeScript First** - Complete type safety and IntelliSense support
- 🎭 **Customizable** - Easy theming through CSS variables and Tailwind
- 📱 **Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Tree-shakeable components with minimal bundle size
- 🔧 **CLI Tool** - Easy component installation and management

## 🏗️ Architecture

Built on top of industry-leading tools:

- **[ShadCN UI](https://ui.shadcn.com/)** - Beautiful component primitives
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

## 📦 Installation

### Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/blitz-ui.git
cd blitz-ui

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the component showcase.

## 🎯 Quick Start

### Using Components

```tsx
import { Button, Card, Input } from "@/components/ui"

export default function MyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Blitz UI</CardTitle>
        <CardDescription>Start building amazing interfaces</CardDescription>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter your email" />
      </CardContent>
      <CardFooter>
        <Button>Get Started</Button>
      </CardFooter>
    </Card>
  )
}
```

### CLI Tool

Manage components with the built-in CLI:

```bash
# List all components
npm run ui list

# Add a component (shows import instructions)
npm run ui add button

# Show component documentation
npm run ui docs card

# Check for updates
npm run ui update
```

## 📚 Component Categories

### Atoms (Basic Building Blocks)
- `Button` - Multiple variants and sizes
- `Input` - Text input with validation states
- `Textarea` - Multi-line text input
- `Badge` - Status indicators and labels
- `Avatar` - User profile images with fallbacks

### Molecules (Composite Components)
- `Card` - Container with header, content, and footer
- `Dialog` - Modal dialogs and popups
- `DropdownMenu` - Contextual menus
- `Switch` - Toggle switches
- `Tooltip` - Contextual help tooltips

### Organisms (Complex Components)
- `Navbar` - Responsive navigation header
- `Sidebar` - Side navigation panel
- `Footer` - Page footer
- `Tabs` - Tabbed interfaces
- `Accordion` - Collapsible content sections

## 🎨 Theming

### Theme Toggle

```tsx
import { ThemeToggle } from "@/components/theme/theme-toggle"

export default function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  )
}
```

### Programmatic Theme Control

```tsx
"use client"

import { useTheme } from "@/components/theme/theme-provider"

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  )
}
```

### Customizing Colors

Edit `app/globals.css`:

```css
:root {
  --primary: 200 100% 50%; /* HSL values */
  --radius: 0.75rem;
}

.dark {
  --primary: 200 80% 40%;
}
```

## 📖 Documentation

Comprehensive documentation is available in [DOCUMENTATION.md](./DOCUMENTATION.md)

### Key Topics:
- Component API Reference
- Theming Guide
- Accessibility Features
- Customization Examples
- Best Practices

## 🛠️ Project Structure

```
blitz-ui/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage with component showcase
│   └── globals.css        # Global styles and CSS variables
├── src/
│   ├── components/
│   │   ├── ui/            # UI components (atoms & molecules)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── index.ts   # Barrel exports
│   │   ├── layout/        # Layout components (organisms)
│   │   │   ├── navbar.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── footer.tsx
│   │   └── theme/         # Theme components
│   │       ├── theme-provider.tsx
│   │       └── theme-toggle.tsx
│   └── lib/
│       └── utils.ts       # Utility functions (cn)
├── cli/
│   └── blitz-ui.js        # CLI tool
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/blitz-ui)

## 🎯 Roadmap

### Phase 1 ✅
- [x] Base architecture setup
- [x] 10+ core UI components
- [x] Theme system with dark mode
- [x] Documentation website

### Phase 2 (In Progress)
- [ ] CLI tool enhancements
- [ ] Additional components (Table, Select, etc.)
- [ ] Animation utilities
- [ ] Component playground

### Phase 3 (Planned)
- [ ] NPM package publishing
- [ ] Storybook integration
- [ ] Figma design kit
- [ ] AI-powered component generator

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn](https://twitter.com/shadcn) for the amazing ShadCN UI
- [Radix UI](https://www.radix-ui.com/) team for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) team for the utility framework
- [Vercel](https://vercel.com/) for Next.js and hosting platform

## 📧 Contact

- Website: [https://your-website.com](https://your-website.com)
- Twitter: [@yourhandle](https://twitter.com/yourhandle)
- GitHub: [@yourusername](https://github.com/yourusername)

---

<div align="center">
  <strong>Built with ❤️ using Next.js, React, and Tailwind CSS</strong>
</div>
