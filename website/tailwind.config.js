/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-2': 'var(--paper-2)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        'accent-soft': 'var(--accent-soft)',
        'accent-border': 'var(--accent-border)',
        sage: 'var(--sage)',
        'sage-soft': 'var(--sage-soft)',
        taupe: 'var(--taupe)',
        'taupe-2': 'var(--taupe-2)',
      },
      borderRadius: {
        DEFAULT: '16px',
        sm: '10px',
        md: '16px',
        lg: '26px',
        xl: '34px',
        full: '9999px',
      },
      fontFamily: {
        display: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: 'var(--shadow)',
        'soft-lg': 'var(--shadow-lg)',
      },
      maxWidth: {
        wrap: '1180px',
      },
    },
  },
  plugins: [],
};
