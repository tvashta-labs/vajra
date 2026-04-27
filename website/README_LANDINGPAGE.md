# Vajra Landing Page Documentation

This document explains how the custom Tailwind-styled landing page is integrated into the Docusaurus (`vajra`) environment. It serves as a reference for future edits to the homepage and global styling.

## Architecture & Configuration

We use a custom React landing page alongside Docusaurus's default documentation shell. This allows the root URL `/` to serve the heavily customized Vajra landing page, while `/docs/` and `/blog/` continue to use Docusaurus's default Infima theme.

### 1. Tailwind CSS Configuration
Tailwind is generated as a separate CSS artifact and then imported into Docusaurus global CSS.
*   **Build Pipeline:** `pnpm start` and `pnpm build` run Tailwind CLI against `src/css/tailwind-input.css` and generate `src/css/tailwind-output.css` before/while Docusaurus runs.
*   **Tailwind Config:** `tailwind.config.js` uses `module.exports` (CommonJS), scans `src/docs/blog` content, and explicitly disables Tailwind preflight (`corePlugins.preflight = false`) so docs/blog keep default Docusaurus styling.

### 2. Global Styles & Scoping
*   **Global Import Point:** `src/css/custom.css` imports `./tailwind-output.css`, then defines Docusaurus Infima variables and landing-page-specific custom CSS.
*   **Scoped Landing Styles:** Landing typography/helpers (`.grid-bg`, `.glow-cyan`, `.animate-flow`, etc.) are scoped under `.vajra-landing` so docs/blog are unaffected.
*   **Landing-only Resets:** `src/css/tailwind-input.css` adds narrowly scoped base reset rules under `:where(.vajra-landing)` for elements like buttons and anchors.

### 3. The Homepage (`src/pages/index.tsx`)
The root landing page uses a custom layout that intentionally bypasses some of Docusaurus's defaults.
*   **File-based Routing:** Docusaurus uses file-based routing. `src/pages/index.tsx` automatically maps to the root URL `/`.
*   **The Navbar/Footer Override:** Docusaurus's `<Layout>` component automatically injects its own Navbar and Footer. Because we want custom ones *only* on the homepage:
    *   We pass the `noFooter` prop to `<Layout>` to remove the default footer.
    *   We inject a `<style>` tag in `index.tsx` to hide `.navbar` on this specific page, because Docusaurus lacks a `noNavbar` prop.
    *   We then render the custom `<Navbar />` and `<Footer />` components (from `src/components/`) directly inside the `index.tsx` markup.

---

## How to Edit

### Editing the Landing Page (UI & Content)
*   **Homepage Layout:** Edit `src/pages/index.tsx`.
*   **Components:** Edit the specific sections in `src/components/` (e.g., `Hero.tsx`, `Benchmarks.tsx`). They are standard React components styled with Tailwind utility classes.
*   **Global Tailwind Configuration:** Edit `tailwind.config.js`. If you add new colors, fonts, or plugins, do it here.

**What could go wrong:** If you create a new React component file outside of `./src/` or `./docs/` and use Tailwind classes, they will not be styled. You must update the `content` array in `tailwind.config.js` to include the new directory path so the compiler doesn't purge your classes.

### Editing the Documentation
*   **Markdown Files:** Edit or add `.md` or `.mdx` files in the `docs/` or `blog/` directories.
*   **Sidebar Navigation:** Edit `sidebars.ts`.
*   **Docusaurus Theme/Config:** Edit `docusaurus.config.ts`.

### Modifying Styles
*   **Global Customizations:** Edit `src/css/custom.css`. This file contains both your Tailwind setup and Docusaurus's Infima theme variables (like `--ifm-color-primary`).

**What could go wrong:** If a font, color, or margin on a documentation page looks slightly off, it's usually a CSS specificity war between Docusaurus's Infima theme and Tailwind's base reset. Ensure any new global Tailwind styles are strictly scoped to the `.vajra-landing` class if they are only meant for the homepage.

---

## How to Run & Build

To start the local development server with hot-module replacement (HMR):

```bash
# Ensure you are in the website directory
cd website

# Start the development server
pnpm start
```
*This works — but what does `pnpm start` actually do here?* If you look at `package.json`, `start` is configured to run Tailwind's watcher (`tailwindcss -i ... -o ... --watch`) in parallel with the `docusaurus start` command. This ensures your Tailwind CSS compiles on-the-fly alongside your React components.

To build the static site for production deployment:

```bash
pnpm build
```

---

## Known Edge Cases / Fragility

1.  **Docusaurus Navbar Class Change:** We hide the default Docusaurus navbar on the homepage using `.navbar { display: none !important; }`. If a future Docusaurus update renames this class (e.g., to `.docusaurus-navbar`), the homepage will suddenly display two stacked navbars. You will need to inspect the page and update the class name in `src/pages/index.tsx`.
2.  **Tailwind Content Purging:** Always ensure new directories containing React components are added to the `tailwind.config.js` `content` array.
3.  **Asset References:** Static assets like images or SVGs (e.g., `icons.svg`) should reside in the `static/` directory and be referenced with absolute paths (e.g., `/img/hero.png` or `/icons.svg`) rather than relative imports.

---

## ⚠️ Important: After Editing Component Files

`pnpm start` runs the Tailwind watcher automatically, so you won't need to think about this during active development. However, if you **edit a component outside of a running dev server** (e.g., you make changes and then start the server fresh), the `tailwind-output.css` file on disk may be stale and missing any new utility classes you added.

**Symptom:** Styles are missing or elements appear unsized/invisible even though the JSX looks correct.

**Fix:** Manually recompile Tailwind once before starting the server:

```bash
# Ensure you are in the website directory
cd website

# Recompile Tailwind CSS
pnpm tailwindcss -i ./src/css/tailwind-input.css -o ./src/css/tailwind-output.css

# Then start the dev server as normal
pnpm start
```

**Why this happens:** Tailwind uses a compile-time content scan to generate only the CSS classes that appear in your source files. If a component is edited while the watcher is not running, the new classes are never added to `tailwind-output.css`. The JSX renders, but the browser finds no matching CSS rule — so the element appears unstyled.