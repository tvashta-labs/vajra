import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';

function BrandMark() {
  const light = useBaseUrl('/img/logo-light.jpeg');
  const dark = useBaseUrl('/img/logo-dark.jpeg');
  return (
    <Link
      to="/"
      className="flex items-center gap-[11px] font-display font-semibold text-[1.28rem] tracking-[-0.01em] text-ink no-underline hover:no-underline hover:text-ink">
      <img
        src={light}
        alt="Vajra logo"
        className="brand-logo logo-light block h-[30px] w-[30px] rounded-[9px] object-cover"
      />
      <img
        src={dark}
        alt="Vajra logo"
        className="brand-logo logo-dark h-[30px] w-[30px] rounded-[9px] object-cover"
      />
      Vajra
    </Link>
  );
}

function ThemeToggle() {
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <button
      type="button"
      className="ml-1.5 inline-flex cursor-pointer items-center border-0 bg-transparent p-0"
      title="Toggle dark mode"
      aria-label="Toggle dark mode"
      onClick={() => setColorMode(isDark ? 'light' : 'dark')}>
      <span
        className={`relative flex h-7 w-[52px] items-center rounded-full border border-line px-1 transition-colors ${
          isDark ? 'border-accent bg-accent-soft' : 'bg-paper-2'
        }`}>
        <span
          className={`grid h-5 w-5 place-items-center rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.25)] transition-transform duration-300 ${
            isDark
              ? 'translate-x-6 bg-accent text-white'
              : 'translate-x-0 bg-surface text-muted'
          }`}>
          {isDark ? (
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            </svg>
          ) : (
            <svg
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          )}
        </span>
      </span>
    </button>
  );
}

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-[18px] z-50 px-7">
      <nav
        className="landing-nav reveal mx-auto flex max-w-wrap items-center justify-between rounded-full border border-line px-4 py-3 pl-[22px] shadow-soft"
        style={{ animationDelay: '0.05s' }}>
        <BrandMark />
        <div className="flex items-center gap-5 font-medium text-ink-soft md:gap-[30px] md:text-base">
          <Link
            to="/docs/quick-start"
            className="hidden transition-colors hover:text-accent hover:no-underline sm:inline-flex">
            Docs
          </Link>
          {/* Temporarily disabled — re-enable when blog is ready
          <Link
            to="/blog"
            className="hidden transition-colors hover:text-accent hover:no-underline sm:inline-flex">
            Blog
          </Link>
          */}
          <a
            href="https://github.com/tvashta-labs/vajra"
            className="inline-flex items-center gap-[7px] transition-colors hover:text-accent hover:no-underline"
            target="_blank"
            rel="noopener noreferrer">
            <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export { BrandMark };
