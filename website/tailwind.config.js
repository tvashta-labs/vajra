const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // Disable Tailwind's CSS reset to avoid breaking Docusaurus
  },
  content: [
    path.join(__dirname, "./src/**/*.{js,jsx,ts,tsx}"),
    path.join(__dirname, "./docs/**/*.mdx"),
    path.join(__dirname, "./blog/**/*.mdx"),
  ],
  darkMode: ['class', '[data-theme="dark"]'], // Integrate with Docusaurus dark mode
  theme: {
    extend: {
      colors: {
        "tertiary-container": "#00fbbf",
        "inverse-on-surface": "#2d3137",
        "secondary-container": "#32ff00",
        "surface-bright": "#353940",
        "surface-container-highest": "#31353c",
        "surface": "#10141a",
        "on-tertiary-fixed": "#002116",
        "primary-fixed-dim": "#00dce5",
        "outline": "#a3b3b4",
        "on-tertiary-fixed-variant": "#00513c",
        "on-secondary-container": "#127100",
        "surface-container-low": "#181c22",
        "surface-container-high": "#262a31",
        "on-primary-fixed-variant": "#004f53",
        "background": "#0a0e14",
        "on-surface-variant": "#d1e0e0",
        "surface-variant": "#31353c",
        "secondary": "#edffe1",
        "on-primary-fixed": "#002021",
        "secondary-fixed": "#79ff5a",
        "primary-fixed": "#63f7ff",
        "on-error-container": "#ffdad6",
        "error-container": "#93000a",
        "tertiary": "#ebfff4",
        "on-secondary-fixed-variant": "#0a5300",
        "inverse-surface": "#dfe2eb",
        "secondary-fixed-dim": "#2ce500",
        "primary-container": "#00f5ff",
        "surface-tint": "#00dce5",
        "surface-container-lowest": "#05070a",
        "tertiary-fixed-dim": "#00e1ab",
        "primary": "#ffffff",
        "on-surface": "#f1f3f7",
        "error": "#ffb4ab",
        "on-error": "#690005",
        "surface-dim": "#10141a",
        "on-primary": "#000000",
        "on-secondary": "#053900",
        "inverse-primary": "#00696e",
        "tertiary-fixed": "#36ffc4",
        "on-background": "#f1f3f7",
        "on-tertiary": "#003828",
        "outline-variant": "#4a5a5b",
        "surface-container": "#1c2026",
        "on-primary-container": "#003739",
        "on-tertiary-container": "#003828",
        "on-secondary-fixed": "#022100"
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px"
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"]
      }
    }
  },
  plugins: [],
}