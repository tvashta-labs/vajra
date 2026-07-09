import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const Footer: React.FC = () => {
  const light = useBaseUrl('/img/logo-light.jpeg');
  const dark = useBaseUrl('/img/logo-dark.jpeg');

  return (
    <footer className="px-7 pb-11 pt-14">
      <div className="mx-auto max-w-wrap">
        <div className="flex flex-wrap items-start justify-between gap-[30px]">
          <div>
            <div className="flex items-center gap-[11px] font-display text-[1.28rem] font-semibold tracking-[-0.01em] text-ink">
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
            </div>
            <p className="mt-3.5 text-[0.95rem] font-medium text-muted">
              © 2026 Tvashta Labs.
            </p>
          </div>
          <div className="flex gap-[30px] font-mono text-[0.88rem] font-semibold uppercase tracking-[0.08em]">
            <a
              href="https://github.com/tvashta-labs/vajra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft transition-colors hover:text-accent hover:no-underline">
              GitHub
            </a>
            <Link
              to="/docs/quick-start"
              className="text-ink-soft transition-colors hover:text-accent hover:no-underline">
              Documentation
            </Link>
            {/* Temporarily disabled — re-enable when blog is ready
            <Link
              to="/blog"
              className="text-ink-soft transition-colors hover:text-accent hover:no-underline">
              Blog
            </Link>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
};
