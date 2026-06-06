# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Start dev server at http://localhost:8080
npm run build     # Production build (outputs to dist/)
npm run build:dev # Dev-mode build
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

No test runner is configured.

## Architecture

This is a **React + TypeScript SPA** for DK Group's service website, built with Vite and deployed to Netlify. It is a marketing/portfolio site showcasing AI, web, mobile, data, and design services.

### Routing

All routes are defined in `src/App.tsx` using React Router v6. Every page is wrapped in `<Layout>` (`src/components/layout/Layout.tsx`), which composes `<Navbar>` + `<main>` + `<Footer>`. `<ScrollToTop>` resets scroll position on route change.

Pages map 1-to-1 to routes:
- `/` → `Index` (home, composed from `src/components/home/` sections)
- `/ai-solutions`, `/web-development`, `/mobile-development`, `/data-solutions`, `/design-solutions`, `/pricing`, `/dk-agents`, `/about`, `/contact`

### Component Structure

- `src/components/layout/` — `Navbar`, `Footer`, `Layout` (shell for every page)
- `src/components/home/` — sections used only on the home page (`HeroSection`, `ServicesSection`, `AIAgentsSection`, etc.)
- `src/components/ui/` — shadcn/ui primitives (generated, don't hand-edit)

### Styling

Tailwind CSS with a custom design token layer. Brand colors are defined as CSS variables and aliased in `tailwind.config.ts`:
- `indigo` / `ink` / `ghost` / `periwinkle` are the brand palette
- Standard shadcn tokens (`primary`, `secondary`, `muted`, etc.) are also CSS-variable-backed

Custom animations (`fade-up`, `fade-in`, `scale-in`, `pulse-glow`, `float`) are defined in `tailwind.config.ts` and used throughout. Framer Motion is available for more complex transitions (used in `Navbar` mobile menu).

### i18n

The site is bilingual (English/French). All user-visible strings live in:
- `src/locales/en/common.json`
- `src/locales/fr/common.json`

Both files share an identical key structure under the `common` namespace. Language preference is persisted to `localStorage` under the key `dkgroup_lang`. The `<html lang>` attribute updates on language change.

Use `useTranslation()` from `react-i18next` to access strings. Never hardcode user-facing text — always add keys to both locale files.

### Path Aliases

`@/` resolves to `src/`. Use it for all non-relative imports.

### Deployment

Netlify, configured in `netlify.toml`. SPA routing is handled via a catch-all redirect to `index.html`. Build command: `npm run build`, publish dir: `dist/`.
