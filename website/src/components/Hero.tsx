import React from 'react';
import Link from '@docusaurus/Link';

export const Hero: React.FC = () => {
  return (
    <section className="px-7 pb-[46px] pt-[70px]">
      <div className="mx-auto grid max-w-wrap items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <span
            className="reveal mb-[26px] inline-flex items-center rounded-[10px] border border-line bg-surface px-4 py-[7px] text-[0.92rem] font-medium text-ink-soft shadow-soft"
            style={{ animationDelay: '0.1s' }}>
            Open source Python SDK
          </span>
          <h1
            className="reveal font-display text-[clamp(2.6rem,5.4vw,4.3rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
            style={{ animationDelay: '0.18s' }}>
            <span className="text-accent">World&apos;s Fastest</span>
            <br />
            Model Streamer
          </h1>
          <p
            className="reveal mt-6 max-w-[520px] text-[1.16rem] font-medium leading-[1.55] text-ink-soft"
            style={{ animationDelay: '0.28s' }}>
            Load models faster by overlapping download, RAM staging, and CUDA
            transfer.
          </p>
          <div
            className="reveal mt-[34px] flex flex-wrap gap-3.5"
            style={{ animationDelay: '0.38s' }}>
            <Link
              to="/docs/quick-start"
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-ink px-[30px] py-[15px] text-[1.02rem] font-medium text-paper no-underline transition-all duration-250 hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:no-underline hover:shadow-[0_14px_30px_-12px_rgba(37,99,235,0.7)]">
              Get started
            </Link>
            <a
              href="#benchmarks"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-[30px] py-[15px] text-[1.02rem] font-medium text-ink no-underline transition-all duration-250 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:no-underline">
              View benchmarks →
            </a>
          </div>
        </div>

        <div
          className="reveal rounded-lg border border-line bg-surface p-8 shadow-soft"
          style={{ animationDelay: '0.56s' }}>
          <div className="mb-[26px] flex items-center justify-between gap-4">
            <div className="font-mono text-[1.05rem] font-semibold uppercase leading-none tracking-[0.14em] text-muted">
              Model Load Time
            </div>
            <span className="rounded-lg bg-sage-soft px-3 py-1.5 font-mono text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-sage">
              Lower is better
            </span>
          </div>

          <div className="flex flex-col gap-[22px]">
            <div>
              <div className="mb-[9px] flex items-baseline justify-between">
                <span className="font-mono text-[1.05rem] font-medium tracking-[0.04em] text-accent">
                  VAJRA
                </span>
                <span className="font-mono text-[1.1rem] font-semibold tabular-nums text-accent">
                  8.22s
                </span>
              </div>
              <div className="h-[22px] overflow-hidden rounded-lg bg-paper-2">
                <div
                  className="bar-fill win"
                  style={{ width: '22%', animationDelay: '0.1s' }}
                />
              </div>
            </div>
            <div>
              <div className="mb-[9px] flex items-baseline justify-between">
                <span className="font-mono text-[1.05rem] font-medium tracking-[0.04em] text-ink-soft">
                  HF_TRANSFER
                </span>
                <span className="font-mono text-[1.1rem] font-semibold tabular-nums">
                  36.88s
                </span>
              </div>
              <div className="h-[22px] overflow-hidden rounded-lg bg-paper-2">
                <div
                  className="bar-fill comp"
                  style={{ width: '100%', animationDelay: '0.22s' }}
                />
              </div>
            </div>
            <div>
              <div className="mb-[9px] flex items-baseline justify-between">
                <span className="font-mono text-[1.05rem] font-medium tracking-[0.04em] text-ink-soft">
                  RUN:AI
                </span>
                <span className="font-mono text-[1.1rem] font-semibold tabular-nums">
                  15.85s
                </span>
              </div>
              <div className="h-[22px] overflow-hidden rounded-lg bg-paper-2">
                <div
                  className="bar-fill comp"
                  style={{ width: '43%', animationDelay: '0.34s' }}
                />
              </div>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between gap-4 border-t border-line pt-[26px]">
            <div className="font-mono text-[1.05rem] font-semibold uppercase leading-[1.4] tracking-[0.1em] text-muted">
              Performance
              <br />
              Delta
            </div>
            <div className="text-right font-display text-[2.3rem] font-semibold leading-none tracking-[-0.02em] text-sage">
              350%
              <span className="mt-1 block text-[1.25rem]">(4.5× faster)</span>
            </div>
          </div>
          <p className="mt-5 text-[1.05rem] font-medium leading-[1.55] text-muted">
            Measured from request start to model weights staged in memory on the
            same model, machine, and network.
            <span className="mono mt-3 block text-base font-semibold tracking-[0.03em] text-accent">
              GPU loading began at 0.65s
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
