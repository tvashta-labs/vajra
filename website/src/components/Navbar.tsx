import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';

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

function MobileSidebarToggle() {
  const mobileSidebar = useNavbarMobileSidebar();

  if (mobileSidebar.disabled) {
    return null;
  }

  return (
    <button
      type="button"
      className="mr-3 inline-flex cursor-pointer items-center border-0 bg-transparent p-0 text-ink min-[997px]:hidden"
      aria-label="Toggle navigation bar"
      aria-expanded={mobileSidebar.shown}
      onClick={mobileSidebar.toggle}>
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>
  );
}

export const Navbar: React.FC = () => {
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <header
      className={clsx(
        // `navbar` is required: Docusaurus theme code measures the header via
        // document.querySelector('.navbar') (e.g. TOC highlight offset).
        // `vajra-landing` scopes the Tailwind base resets + pill-nav styles,
        // which is what lets this navbar render identically outside the
        // landing page (docs/blog).
        'navbar vajra-landing sticky top-[18px] z-[200] px-7',
        mobileSidebar.shown && 'navbar-sidebar--show',
      )}>
      <nav
        className="landing-nav reveal mx-auto flex max-w-wrap items-center justify-between rounded-full border border-line px-4 py-3 pl-[22px] shadow-soft"
        style={{ animationDelay: '0.05s' }}>
        <div className="flex items-center">
          <MobileSidebarToggle />
          <BrandMark />
        </div>
        <div className="flex items-center gap-2 font-medium text-ink-soft sm:gap-5 md:gap-[30px] md:text-base">
          <Link
            to="/docs/quick-start"
            className="hidden transition-colors hover:text-accent hover:no-underline sm:inline-flex">
            Docs
          </Link>
          <Link
            to="/blog"
            className="hidden transition-colors hover:text-accent hover:no-underline sm:inline-flex">
            Blog
          </Link>
          <a
            href="https://github.com/tvashta-labs/vajra"
            className="inline-flex items-center gap-[7px] transition-colors hover:text-accent hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
            <svg
              className="h-[17px] w-[17px]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </svg>
            <span className="hidden md:inline">GitHub</span>
          </a>
          <a
            href="https://discord.gg/dsqVmnsYZe"
            className="inline-flex items-center gap-[7px] transition-colors hover:text-accent hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord">
            <svg
              className="h-[17px] w-[17px]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true">
              <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.618-1.25.077.077 0 0 0-.078-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.028C.533 9.046-.319 13.58.1 18.058a.082.082 0 0 0 .031.056c2.053 1.508 4.041 2.423 5.993 3.03a.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 12.3 12.3 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.011c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.01c.12.099.246.198.373.292a.077.077 0 0 1-.007.128c-.598.343-1.22.644-1.873.891a.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029c1.961-.607 3.95-1.522 6.002-3.03a.077.077 0 0 0 .032-.055c.5-5.177-.839-9.674-3.549-13.66a.061.061 0 0 0-.031-.029ZM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419Z" />
            </svg>
            <span className="hidden md:inline">Discord</span>
          </a>
          <a
            href="https://www.linkedin.com/company/tvashta-labs"
            className="inline-flex items-center gap-[7px] transition-colors hover:text-accent hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <svg
              className="h-[17px] w-[17px]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.777 13.019H3.56V9h3.554v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
            </svg>
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <ThemeToggle />
        </div>
      </nav>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={mobileSidebar.toggle}
      />
      <NavbarMobileSidebar />
    </header>
  );
};

export { BrandMark };
