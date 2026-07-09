import React from 'react';
import Link from '@docusaurus/Link';

export const CTA: React.FC = () => {
  return (
    <section className="px-7 py-16">
      <div className="mx-auto max-w-wrap">
        <div className="cta-band relative overflow-hidden rounded-xl bg-ink px-10 py-[76px] text-center text-[#edf0f6] shadow-soft-lg">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(50% 90% at 50% 130%, rgba(37,99,235,0.55), transparent 60%)',
            }}
          />
          <div className="relative z-[1]">
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#f5f7fb]">
              Ready to optimize your{' '}
              <em className="not-italic text-accent-2">model loading?</em>
            </h2>
            <Link
              to="/docs/quick-start"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-transparent bg-accent px-[30px] py-[15px] text-[1.02rem] font-medium text-white no-underline transition-all duration-250 hover:-translate-y-0.5 hover:bg-white hover:text-[#111827] hover:no-underline">
              Get started now
            </Link>
            <p className="mt-6 flex items-center justify-center gap-2 text-[0.95rem] font-medium text-[#c4cbd8]">
              <span className="mono text-accent-2">
                Python SDK available on GitHub
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
