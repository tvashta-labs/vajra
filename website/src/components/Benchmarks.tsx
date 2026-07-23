import React from 'react';

type BenchBarProps = {
  name: string;
  time: string;
  width: string;
  delay: string;
  win?: boolean;
  marked?: boolean;
  mark?: string;
  fill?: string;
  gpuNote?: string;
};

function BenchBar({
  name,
  time,
  width,
  delay,
  win,
  marked,
  mark,
  fill,
  gpuNote,
}: BenchBarProps) {
  return (
    <div
      className={`bar-block${marked ? ' marked' : ''}`}
      style={
        marked
          ? ({ '--mark': mark, '--fill': fill } as React.CSSProperties)
          : undefined
      }>
      <div className="bar-head mb-[9px] flex items-baseline justify-between">
        <span
          className={`font-mono text-[1.05rem] font-medium tracking-[0.04em] ${
            win ? 'text-accent' : 'text-ink-soft'
          }`}>
          {name}
        </span>
        <span
          className={`bar-time font-mono text-[1.1rem] font-semibold tabular-nums ${
            win ? 'text-accent' : ''
          }`}>
          {time}
        </span>
      </div>
      <div className="h-[22px] overflow-hidden rounded-lg bg-paper-2">
        <div
          className={`bar-fill ${win ? 'win' : 'comp'}`}
          style={{ width, animationDelay: delay }}
        />
      </div>
      {gpuNote ? (
        <span className="relative mt-[15px] inline-flex items-center rounded-lg border border-accent-border bg-accent-soft px-[11px] py-[5px] font-mono text-[0.82rem] font-semibold tracking-[0.04em] text-accent">
          {gpuNote}
        </span>
      ) : null}
    </div>
  );
}

export const Benchmarks: React.FC = () => {
  return (
    <section id="benchmarks" className="scroll-mt-24 px-7 py-16">
      <div className="mx-auto max-w-wrap">
        <div className="mb-8 max-w-[660px]">
          <span className="mb-4 inline-block font-mono text-[1.15rem] font-semibold uppercase tracking-[0.1em] text-accent">
            Benchmarked with Meta Llama 3 8B
          </span>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-ink">
            The numbers
            <br />
            <em className="not-italic text-accent">speak for themselves.</em>
          </h2>
        </div>

        {/* vs Hugging Face */}
        <div className="mt-[30px] rounded-lg border border-line bg-surface p-8 shadow-soft">
          <div className="mb-2 font-mono text-[1.15rem] font-semibold uppercase tracking-[0.1em] text-muted">
            Hugging Face Hub
          </div>
          <h3 className="mb-[22px] font-display text-[1.7rem] font-semibold tracking-[-0.02em] text-ink">
            Vajra vs Hugging Face Model Loader
          </h3>

          <div className="mb-[34px] flex flex-wrap items-center justify-between gap-[22px]">
            <span className="rounded-lg bg-sage-soft px-3 py-1.5 font-mono text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-sage">
              Lower is better
            </span>
            <div className="flex gap-5 font-mono text-[0.88rem] font-medium text-ink-soft">
              <span className="inline-flex items-center">
                <i
                  className="mr-[7px] inline-block h-3 w-3 rounded-[3px]"
                  style={{ background: 'var(--accent)' }}
                />
                Vajra
              </span>
              <span className="inline-flex items-center">
                <i
                  className="mr-[7px] inline-block h-3 w-3 rounded-[3px]"
                  style={{ background: 'var(--taupe)' }}
                />
                HF_Transfer
              </span>
            </div>
          </div>
          <div className="mb-5 font-mono text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-muted">
            Time (seconds)
          </div>
          <div className="flex flex-col gap-[22px]">
            <BenchBar
              name="VAJRA"
              time="8.22s"
              width="22%"
              delay="0.1s"
              win
              marked
              mark="2%"
              fill="22%"
              gpuNote="GPU transfer begins (0.65s)"
            />
            <BenchBar
              name="Hugging Face HF_TRANSFER"
              time="36.88s"
              width="100%"
              delay="0.24s"
            />
          </div>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-7 border-t border-line pt-[26px]">
            <p className="max-w-[560px] text-[1.02rem] font-medium text-ink-soft">
              Both load 14.96 GB of Llama 3 8B{' '}
              <span className="mono text-accent">.safetensors</span> from the
              Hugging Face Hub. Vajra begins GPU transfer at 0.65s, before the
              download finishes, while{' '}
              <a
                href="https://github.com/huggingface/hf_transfer"
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-accent hover:underline">
                hf_transfer
              </a>{' '}
              must complete the full download first.
            </p>
            <div className="whitespace-nowrap font-display text-[1.7rem] font-semibold tracking-[-0.02em] text-sage">
              348.9% <small className="text-[1.05rem]">(4.49× faster)</small>
            </div>
          </div>
        </div>

        {/* vs Run:AI */}
        <div className="mt-[30px] rounded-lg border border-line bg-surface p-8 shadow-soft">
          <div className="mb-2 font-mono text-[1.15rem] font-semibold uppercase tracking-[0.1em] text-muted">
            S3 Source
          </div>
          <h3 className="mb-[22px] font-display text-[1.7rem] font-semibold tracking-[-0.02em] text-ink">
            Vajra vs Run:AI Model Streamer
          </h3>

          <div className="mb-[34px] flex flex-wrap items-center justify-between gap-[22px]">
            <span className="rounded-lg bg-sage-soft px-3 py-1.5 font-mono text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-sage">
              Lower is better
            </span>
            <div className="flex gap-5 font-mono text-[0.88rem] font-medium text-ink-soft">
              <span className="inline-flex items-center">
                <i
                  className="mr-[7px] inline-block h-3 w-3 rounded-[3px]"
                  style={{ background: 'var(--accent)' }}
                />
                Vajra
              </span>
              <span className="inline-flex items-center">
                <i
                  className="mr-[7px] inline-block h-3 w-3 rounded-[3px]"
                  style={{ background: 'var(--taupe)' }}
                />
                Run:AI Model Streamer
              </span>
            </div>
          </div>
          <div className="mb-5 font-mono text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-muted">
            Time (seconds)
          </div>
          <div className="flex flex-col gap-[22px]">
            <BenchBar
              name="VAJRA"
              time="12.97s"
              width="82%"
              delay="0.1s"
              win
              marked
              mark="17%"
              fill="82%"
              gpuNote="GPU transfer begins (2.65s)"
            />
            <BenchBar
              name="NVIDIA RUN:AI MODEL STREAMER"
              time="15.85s"
              width="100%"
              delay="0.24s"
            />
          </div>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-7 border-t border-line pt-[26px]">
            <p className="max-w-[560px] text-[1.02rem] font-medium text-ink-soft">
              Both Vajra and Run:AI Model Streamer use S3 as the source. Vajra
              begins GPU transfer at 2.65s, while Run:AI must complete the full
              download first.
            </p>
            <div className="whitespace-nowrap font-display text-[1.7rem] font-semibold tracking-[-0.02em] text-sage">
              22.2% <small className="text-[1.05rem]">(1.22× faster)</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
