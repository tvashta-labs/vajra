# Vajra Landing Page Documentation

This document explains how the custom Tailwind-styled landing page is integrated into the Docusaurus (`vajra`) environment.

## Architecture

We use a custom React landing page alongside Docusaurus's documentation shell. The root URL `/` serves the Vajra landing page; `/docs/` and `/blog/` use Docusaurus with the same design tokens (IBM Plex, paper/blue palette, light+dark).

### Tailwind
* **Build Pipeline:** `pnpm start` / `pnpm build` compile `src/css/tailwind-input.css` → `src/css/tailwind-output.css` before/while Docusaurus runs.
* **Config:** `tailwind.config.js` maps colors to CSS variables (`--paper`, `--accent`, etc.) defined in `src/css/custom.css`. Preflight is disabled so Infima keeps working on docs.

### Homepage (`src/pages/index.tsx`)
* Hides the default Docusaurus navbar via an injected style, then renders custom `Navbar`, `Hero`, `Installation`, `Benchmarks`, `CTA`, and `Footer`.
* Passes `noFooter` to `<Layout>` so the custom footer is used.

### Design tokens
Global tokens live in `src/css/custom.css` under `:root` / `[data-theme='light']` and `[data-theme='dark']`. Docs and landing share them. Color mode switch is enabled site-wide.

## How to run

```bash
cd website
pnpm start   # Tailwind watch + Docusaurus
pnpm build   # production build
```

## Editing
* Landing sections: `src/components/{Hero,Installation,Benchmarks,Navbar,CTA,Footer,CopyButton}.tsx`
* Global look / Infima overrides: `src/css/custom.css`
* Docs: `docs/` + `sidebars.ts`
* Logos: `static/img/logo-light.jpeg`, `static/img/logo-dark.jpeg`
