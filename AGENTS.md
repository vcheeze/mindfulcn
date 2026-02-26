# AGENTS.md - Agentic Coding Guidelines

This document provides guidelines for AI agents working in this codebase.

## Project Overview

- **Framework**: TanStack Start (React 19 + Vite + Nitro)
- **UI Library**: @base-ui/react with custom components (shadcn-like pattern)
- **Routing**: @tanstack/react-router with file-based routing
- **Styling**: Tailwind CSS v4
- **Icons**: @phosphor-icons/react

## Build / Lint / Test Commands

```bash
# Development
npm run dev              # Start dev server on port 3000
npm run build            # Production build
npm run preview          # Preview production build

# Linting & Formatting
npm run lint             # Run ESLint
npm run format           # Check Prettier formatting
npm run check            # Fix formatting + ESLint (prettier --write && eslint --fix)

# Testing
npm run test             # Run all tests (vitest run)
vitest run               # Run all tests
vitest run <file>        # Run single test file
vitest run --testNamePattern=<name>  # Run tests matching pattern
vitest                   # Run tests in watch mode
```

## Code Style Guidelines

### General

- **No comments** in code unless explicitly required
- Use **semicolon: false** (no semicolons), **single quotes**, **trailing commas**
- Use TypeScript with **strict mode** enabled

### Imports

- Use path alias `@/` for imports (configured in tsconfig.json)
- Order imports: external libs → internal components → utils
- Group related imports together, separate groups with blank lines

```tsx
// External
import { useState } from 'react'
import { Button } from '@base-ui/react/button'

// Internal
import { cn } from '@/lib/utils'
import { Card, CardHeader } from '@/components/ui/card'
```

### Components

- Use **function components** only
- Use **CVA (class-variance-authority)** for component variants
- Use **data-slot** pattern for polymorphic components
- Prefix internal components with underscore or place in separate files

```tsx
// Component with variants using CVA
const buttonVariants = cva('base classes', {
  variants: {
    variant: { default: '...', outline: '...' },
    size: { default: '...', sm: '...', lg: '...' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
})

function Button({ className, variant = 'default', ...props }) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  )
}
```

### Styling

- Use **tailwind-merge** + **clsx** via `cn()` utility for className merging
- Use Tailwind CSS v4 features
- Prefer utility classes over custom CSS

```tsx
import { cn } from '@/lib/utils'

;<Card
  className={cn(
    'base-classes',
    variant === 'active' && 'active-classes',
    className,
  )}
/>
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Button`, `CardHeader`)
- **Files**: kebab-case for non-components, PascalCase for components
- **Constants**: PascalCase for exported constants, camelCase for regular
- **Props**: camelCase, use `ComponentProps` type from primitive libs

### Types

- Use **explicit return types** for exported functions
- Use **interface** for object shapes, **type** for unions/intersections
- Prefer `type` over `interface` for component props
- Use `as const` for literal values that shouldn't change

```tsx
interface User {
  id: string
  name: string
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const frameworks = ['Next.js', 'SvelteKit'] as const
```

### Error Handling

- Use Zod for runtime validation (already installed)
- Use try/catch for async operations
- Display user-friendly error messages in UI

### Client/Server Components

- Add `"use client"` directive for client-side only components
- TanStack Start handles SSR automatically

### Routing

- Use file-based routing in `src/routes/`
- Use `createFileRoute` from `@tanstack/react-router`

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/path')({ component: PageComponent })
```

## Project Structure

```
src/
├── components/          # UI components
│   ├── ui/             # Base UI components (button, card, etc.)
│   └── *.tsx           # Feature-specific components
├── lib/                # Utilities (utils.ts, theme.ts)
├── routes/             # File-based routes (TanStack Router)
│   ├── __root.tsx      # Root route
│   └── index.tsx       # Index route
├── router.tsx          # Router configuration
└── styles.css          # Global styles
```

## Key Dependencies

- `@base-ui/react` - Base UI component primitives
- `class-variance-authority` - Component variant styles
- `tailwind-merge` + `clsx` - Class name merging
- `@phosphor-icons/react` - Icons
- `@tanstack/react-router` - Routing
- `zod` - Schema validation

## Running a Single Test

```bash
# By file path
vitest run src/lib/utils.test.ts

# By test name pattern
vitest run --testNamePattern "Button"

# Watch mode for single file
vitest src/lib/utils.test.ts
```

## Notes

- Tests use `vitest` with `@testing-library/react` and `jsdom`
- Uses `@tanstack/eslint-config` - follow their conventions
- Tailwind v4 uses CSS-first configuration (see styles.css)
