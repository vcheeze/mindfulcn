# mindfulcn - Mindful shadcn/ui Themes

Curated color palettes meet shadcn's design system. Preview, compare, and copy themes built with [Alex Cristache's mindful palettes](https://x.com/AlexCristache/) — ready for [tweakcn](https://tweakcn.com/).

## Purpose

Stop spending hours tweaking colors. This app lets you:

- **Browse** — Start with themes designed for clarity, accessibility, and beauty. Every theme uses mindful palettes: color systems built for harmony and readability.
- **Preview** — Toggle light and dark modes. See your theme on real UI components before you commit.
- **Copy & customize** — One-click copy in tweakcn format. Paste into your CSS or import in tweakcn to fine-tune.

Themes are mindful, curated, and tweakcn-ready.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | [TanStack Start](https://tanstack.com/start) (React 19 + Vite + Nitro) |
| **Routing** | [TanStack Router](https://tanstack.com/router) with file-based routes |
| **UI primitives** | [Base UI](https://base-ui.com/) (used by shadcn) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Variants** | [class-variance-authority](https://cva.style/) (CVA) |
| **Icons** | [Phosphor Icons](https://phosphoricons.com/) |
| **Validation** | [Zod](https://zod.dev/) |

Theme selection is driven by URL search params (`?theme=223`), so you can share or bookmark a specific theme.

## Getting Started

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use the header to open the theme sidebar, pick a theme, and use the copy button to grab CSS for tweakcn.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start dev server (port 3000) |
| `pnpm run build` | Production build |
| `pnpm run preview` | Preview production build |
| `pnpm run lint` | Run ESLint |
| `pnpm run format` | Check Prettier |
| `pnpm run check` | Fix formatting + ESLint |
| `pnpm run test` | Run Vitest |

## Project Structure

```
src/
├── components/     # UI and feature components
│   └── ui/         # Base UI (button, card, dialog, sidebar, etc.)
├── lib/            # Utilities and theme data (themes.ts)
├── routes/         # File-based routes
│   └── (demo)/     # Demo pages (e.g. gradients)
├── themes/         # Per-theme CSS (e.g. 223.css for indigo atelier)
└── styles.css      # Global styles and Tailwind
```

See [AGENTS.md](./AGENTS.md) for code style and conventions.
