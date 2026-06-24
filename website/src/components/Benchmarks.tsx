export const Benchmarks: React.FC = () => {
  return (
    <section id="benchmarks" className="scroll-mt-16 py-24 px-8 md:px-24 bg-[#05070a] border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase text-white">
            Benchmarks
          </h2>
          <p className="text-primary-container font-mono tracking-[0.3em] uppercase text-xl font-bold">
            Benchmarked On Meta Llama 3 8B
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12">
          {/* Hugging Face Hub Comparison Sub-section */}
          <div className="bg-surface-container-low border border-outline-variant/30 p-8 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
            <div className="relative z-10">
              {/* Header & Legend */}
              <div className="mb-12 flex flex-col gap-6">
                <div>
                  <h3 className="mb-2 font-mono text-lg font-bold uppercase tracking-widest text-on-surface-variant">
                    Hugging Face Hub
                  </h3>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase">
                    Vajra vs Hugging Face Model Loader
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="inline-flex shrink-0 items-center px-3 py-2 bg-surface-container-high border border-outline-variant/30 w-fit">
                    <span className="text-base font-mono font-bold uppercase tracking-widest text-[#79ff5a] whitespace-nowrap">
                      Lower is better
                    </span>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-primary-container shadow-[0_0_1px_rgba(0,245,255,0.1)]"></div>
                      <span className="font-mono text-base font-bold uppercase tracking-widest text-white">
                        Vajra
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-amber shadow-[0_0_1px_rgba(255,183,77,0.1)]"></div>
                      <span className="font-mono text-base font-bold uppercase tracking-widest text-white">
                        hf_transfer
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Y-axis label */}
              <div className="mb-6 font-mono text-lg font-bold uppercase tracking-widest text-on-surface-variant">
                Time (Seconds)
              </div>

              {/* Horizontal Bars */}
              <div className="space-y-8">
                {/* Vajra Bar */}
                <div className="relative pb-12">
                  <div className="relative text-base font-mono mb-2">
                    <span className="text-primary-container font-black uppercase tracking-widest">
                      Vajra
                    </span>
                    <span className="absolute top-0 text-white font-black whitespace-nowrap" style={{ right: '77.71%' }}>
                      8.22s
                    </span>
                  </div>
                  <div className="relative h-10 bg-surface-container-lowest w-full border border-primary-container/30">
                    <div className="h-full bg-primary-container shadow-[0_0_6px_rgba(0,245,255,0.2)] relative" style={{ width: '22.29%' }}>
                      <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                    </div>
                    {/* GPU transfer begins marker: glowing callout below the bar */}
                    <div className="absolute top-full z-20 flex flex-col items-start pointer-events-none" style={{ left: '1.76%' }}>
                      <div className="h-3 w-px bg-primary-container shadow-[0_0_6px_rgba(0,245,255,0.6)]"></div>
                      <span className="mt-1.5 bg-background/95 px-2.5 py-1 border border-primary-container/40 text-primary-container text-sm font-mono font-black uppercase tracking-widest whitespace-nowrap shadow-[0_0_8px_rgba(0,245,255,0.08)]">
                        GPU transfer begins (0.65s)
                      </span>
                    </div>
                  </div>
                </div>
                {/* hf_transfer Bar */}
                <div>
                  <div className="relative text-base font-mono mb-2">
                    <span className="text-on-surface-variant font-bold uppercase tracking-widest">
                      hf_transfer
                    </span>
                    <span className="absolute top-0 right-0 text-on-surface-variant font-bold whitespace-nowrap">
                      36.88s
                    </span>
                  </div>
                  <div className="h-10 bg-surface-container-lowest w-full border border-amber/30">
                    <div className="h-full bg-amber shadow-[0_0_6px_rgba(255,183,77,0.2)]" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              {/* Footer: source note + performance delta */}
              <div className="mt-10 pt-6 border-t border-outline-variant/40 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <p className="text-lg font-mono text-on-surface-variant leading-relaxed">
                  Both load 14.96 GB of Llama 3 8B .safetensors from the Hugging Face Hub. Vajra begins GPU transfer at 0.65s, before the download finishes, while <a href="https://github.com/huggingface/hf_transfer" target="_blank" rel="noopener noreferrer" className="text-primary-container hover:underline">hf_transfer</a> must complete the full download first.
                </p>
                <span className="text-secondary-fixed font-black text-2xl whitespace-nowrap">
                  4.49x (348.9% faster)
                </span>
              </div>
            </div>
          </div>

          {/* S3 Source Comparison Sub-section */}
          <div className="mt-16 bg-surface-container-low border border-outline-variant/30 p-8 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
            <div className="relative z-10">
              {/* Header & Legend */}
              <div className="mb-12 flex flex-col gap-6">
                <div>
                  <h3 className="mb-2 font-mono text-lg font-bold uppercase tracking-widest text-on-surface-variant">
                    S3 Source
                  </h3>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase">
                    Vajra vs Run:ai Model Streamer
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="inline-flex shrink-0 items-center px-3 py-2 bg-surface-container-high border border-outline-variant/30 w-fit">
                    <span className="text-base font-mono font-bold uppercase tracking-widest text-[#79ff5a] whitespace-nowrap">
                      Lower is better
                    </span>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-primary-container shadow-[0_0_1px_rgba(0,245,255,0.1)]"></div>
                      <span className="font-mono text-base font-bold uppercase tracking-widest text-white">
                        Vajra
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-amber shadow-[0_0_1px_rgba(255,183,77,0.1)]"></div>
                      <span className="font-mono text-base font-bold uppercase tracking-widest text-white">
                        Run:ai Model Streamer
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Y-axis label */}
              <div className="mb-6 font-mono text-lg font-bold uppercase tracking-widest text-on-surface-variant">
                Time (Seconds)
              </div>

              {/* Horizontal Bars */}
              <div className="space-y-8">
                {/* Vajra Bar */}
                <div className="relative pb-12">
                  <div className="relative text-base font-mono mb-2">
                    <span className="text-primary-container font-black uppercase tracking-widest">
                      Vajra
                    </span>
                    <span className="absolute top-0 text-white font-black whitespace-nowrap" style={{ right: '18.17%' }}>
                      12.97s
                    </span>
                  </div>
                  <div className="relative h-10 bg-surface-container-lowest w-full border border-primary-container/30">
                    <div className="h-full bg-primary-container shadow-[0_0_6px_rgba(0,245,255,0.2)] relative" style={{ width: '81.83%' }}>
                      <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                    </div>
                    {/* GPU transfer begins marker: glowing callout below the bar */}
                    <div className="absolute top-full z-20 flex flex-col items-start pointer-events-none" style={{ left: '16.72%' }}>
                      <div className="h-3 w-px bg-primary-container shadow-[0_0_6px_rgba(0,245,255,0.6)]"></div>
                      <span className="mt-1.5 bg-background/95 px-2.5 py-1 border border-primary-container/40 text-primary-container text-sm font-mono font-black uppercase tracking-widest whitespace-nowrap shadow-[0_0_8px_rgba(0,245,255,0.08)]">
                        GPU transfer begins (2.65s)
                      </span>
                    </div>
                  </div>
                </div>
                {/* Run:ai Model Streamer Bar */}
                <div>
                  <div className="relative text-base font-mono mb-2">
                    <span className="text-on-surface-variant font-bold uppercase tracking-widest">
                      Run:ai Model Streamer
                    </span>
                    <span className="absolute top-0 right-0 text-on-surface-variant font-bold whitespace-nowrap">
                      15.85s
                    </span>
                  </div>
                  <div className="h-10 bg-surface-container-lowest w-full border border-amber/30">
                    <div className="h-full bg-amber shadow-[0_0_6px_rgba(255,183,77,0.2)]" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              {/* Footer: S3 source note + performance delta */}
              <div className="mt-10 pt-6 border-t border-outline-variant/40 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <p className="text-lg font-mono text-on-surface-variant leading-relaxed">
                  Both Vajra and Run:ai Model Streamer are using S3 as the source. Vajra begins GPU transfer at 2.65s, while Run:ai must complete the full download first.
                </p>
                <span className="text-secondary-fixed font-black text-2xl whitespace-nowrap">
                  1.22x (22.2% faster)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
