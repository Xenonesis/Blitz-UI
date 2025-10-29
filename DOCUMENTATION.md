# Blitz UI Component Library

Welcome to the Blitz UI documentation! This is a comprehensive UI component library built with:

- **ShadCN UI** - Component primitives
- **Tailwind CSS** - Styling framework
- **Radix UI** - Accessible component foundation
- **Next.js** - React framework
- **TypeScript** - Type safety

## Quick Start

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blitz-ui.git
cd blitz-ui
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Usage

### Importing Components

```tsx
import { Button, Card, Input } from "@/components/ui"
```

### Using Components

```tsx
<Button variant="default">Click me</Button>
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

## Component Categories

### Atoms
Basic building blocks:
- Button
- Input
- Textarea
- Badge
- Avatar

### Molecules
Composite components:
- Card
- Dialog (Modal)
- Dropdown Menu
- Switch
- Tooltip

### Organisms
Complex components:
- Navbar
- Sidebar
- Footer
- Tabs
- Accordion

## Theming

Blitz UI supports light and dark modes out of the box. Use the `ThemeToggle` component or programmatically control themes:

```tsx
import { useTheme } from "@/components/theme/theme-provider"

function MyComponent() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  )
}
```

## Customization

### Tailwind Configuration

Customize colors, spacing, and more in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
    },
  },
}
```

### CSS Variables

Override theme variables in `app/globals.css`:

```css
:root {
  --primary: 200 100% 50%;
  --radius: 0.75rem;
}
```

## Best Practices

1. **Accessibility First** - All components follow WAI-ARIA guidelines
2. **Type Safety** - Use TypeScript for better developer experience
3. **Composition** - Build complex UIs by composing smaller components
4. **Customization** - Use className prop for custom styling
5. **Performance** - Components are optimized and tree-shakeable

## Examples

Check out the homepage for live examples of all components in action!

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting PRs.

## License

MIT License - feel free to use in personal and commercial projects.
