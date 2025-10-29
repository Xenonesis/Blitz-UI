# Contributing to Blitz UI

Thank you for your interest in contributing to Blitz UI! We welcome contributions from the community.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/blitz-ui.git
   cd blitz-ui
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

### Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components
│   ├── layout/      # Layout components
│   └── theme/       # Theme-related components
└── lib/
    └── utils.ts     # Utility functions
```

## Component Guidelines

### Creating a New Component

1. **File Location**: Place new components in `src/components/ui/`
2. **Naming**: Use PascalCase for component files (e.g., `MyComponent.tsx`)
3. **Structure**: Follow this template:

```tsx
"use client" // Only if using React hooks

import * as React from "react"
import { cn } from "@/lib/utils"

export interface MyComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // Add custom props here
}

const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("base-styles", className)}
        {...props}
      />
    )
  }
)
MyComponent.displayName = "MyComponent"

export { MyComponent }
```

### Component Best Practices

1. **Accessibility First**
   - Use semantic HTML
   - Add ARIA labels where needed
   - Support keyboard navigation
   - Test with screen readers

2. **TypeScript**
   - Always type component props
   - Use React.forwardRef for ref forwarding
   - Export prop types for reusability

3. **Styling**
   - Use Tailwind CSS classes
   - Use the `cn()` utility for conditional classes
   - Support className prop for customization

4. **Documentation**
   - Add JSDoc comments for complex components
   - Include usage examples in component file

### Using Radix UI Primitives

When wrapping Radix UI components:

```tsx
import * as RadixComponent from "@radix-ui/react-component"

const Component = React.forwardRef<
  React.ElementRef<typeof RadixComponent.Root>,
  React.ComponentPropsWithoutRef<typeof RadixComponent.Root>
>(({ className, ...props }, ref) => (
  <RadixComponent.Root
    ref={ref}
    className={cn("styles", className)}
    {...props}
  />
))
```

## Code Style

### General Guidelines

- Use 2 spaces for indentation
- Use double quotes for strings
- Add trailing commas
- Use template literals for string interpolation
- Prefer const over let

### Naming Conventions

- **Components**: PascalCase (`Button`, `Card`)
- **Files**: kebab-case for utilities, PascalCase for components
- **Functions**: camelCase (`calculateTotal`)
- **Constants**: UPPER_SNAKE_CASE for true constants

## Testing

Before submitting a PR:

1. Test your changes in development mode
2. Build the project to check for errors
3. Test on different screen sizes (mobile, tablet, desktop)
4. Test with keyboard navigation
5. Test in both light and dark modes

## Commit Messages

Use conventional commit messages:

```
feat: add new Table component
fix: correct Button hover state
docs: update README with new examples
style: format code with prettier
refactor: simplify Card component logic
test: add tests for Dialog component
chore: update dependencies
```

## Pull Request Process

1. **Update documentation** if needed
2. **Test thoroughly** across browsers
3. **Update the changelog** (if applicable)
4. **Submit the PR** with a clear description:
   - What changes were made
   - Why they were necessary
   - Any breaking changes
   - Screenshots (for UI changes)

### PR Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile devices
- [ ] Tested with keyboard navigation
- [ ] Tested in dark mode

## Screenshots (if applicable)
Add screenshots here

## Additional Notes
Any other information that reviewers should know
```

## Adding Dependencies

Before adding a new dependency:

1. Check if it's absolutely necessary
2. Consider bundle size impact
3. Ensure it's actively maintained
4. Check license compatibility
5. Discuss in an issue first for major dependencies

## Documentation

When adding or modifying components:

1. Update `DOCUMENTATION.md` with usage examples
2. Add inline JSDoc comments for complex logic
3. Update the README if adding major features

## Questions?

- Open an issue for questions about contributing
- Tag maintainers for urgent matters
- Join our community discussions

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

## Recognition

All contributors will be recognized in the project README and release notes.

Thank you for contributing to Blitz UI! 🚀
