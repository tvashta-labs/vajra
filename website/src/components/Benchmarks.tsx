export const Benchmarks: React.FC = () => {
  return (
    <section className="py-24 px-8 md:px-24 bg-[#05070a] border-b border-outline-variant/30">
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
          {/* Graph Container */}
          <div className="bg-surface-container-low border border-outline-variant/30 p-8 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
            <div className="relative z-10">
              {/* Graph Header & Legend */}
              <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                    Transfer Metric
                  </h3>
                  <p className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
                    Total Weight Transfer Time
                  </p>
                </div>
                {/* Right Side: Context & Legend */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  {/* Stylish "Lower is better" Chip */}
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-surface-container-high border border-outline-variant/30 w-fit">
                    <div className="w-2 h-2 bg-[#79ff5a] shadow-[0_0_8px_rgba(121,255,90,0.6)] animate-pulse"></div>
                    <span className="text-base font-mono font-bold uppercase tracking-widest text-[#79ff5a]">
                      Lower is better
                    </span>
                  </div>

                  {/* Legend */}
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-primary-container shadow-[0_0_8px_rgba(0,245,255,0.8)]"></div>
                      <span className="font-mono text-base font-bold uppercase tracking-widest text-white">
                        Vajra
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-outline-variant"></div>
                      <span className="font-mono text-base font-bold uppercase tracking-widest text-white">
                        HF Baseline
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cyberpunk Graph Layout */}
              <div className="relative flex h-80 justify-evenly items-end border-b-2 border-l-2 border-outline-variant/30 mt-12 mb-20 ml-10 md:ml-12">
                
                {/* Y-axis labels */}
                <div className="absolute -left-12 bottom-0 top-0 w-12 font-mono text-sm font-bold text-on-surface-variant">
                  <span className="absolute right-0 top-0 -translate-y-1/2">
                    35s
                  </span>
                  <span className="absolute right-0 top-[28.5%] -translate-y-1/2">
                    25s
                  </span>
                  <span className="absolute right-0 top-[57%] -translate-y-1/2">
                    15s
                  </span>
                  <span className="absolute right-0 top-[85.7%] -translate-y-1/2">
                    5s
                  </span>
                  <span className="absolute bottom-0 right-0 translate-y-1/2">
                    0s
                  </span>
                </div>

                {/* Hugging Face baseline */}
                <div className="group relative flex h-full w-40 md:w-56 flex-col justify-end">
                  <div className="relative w-full bg-outline-variant transition-all group-hover:brightness-125" style={{ height: '91.5%' }}>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-mono text-xl font-bold text-on-surface-variant">
                      32.04s
                    </div>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center font-mono text-sm md:text-base font-bold uppercase tracking-[0.1em] text-on-surface-variant whitespace-nowrap">
                    HF Baseline
                  </div>
                </div>

                {/* Vajra Bar */}
                <div className="group relative flex h-full w-40 md:w-56 flex-col justify-end">
                  <div className="relative w-full bg-primary-container shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all" style={{ height: '57.5%' }}>
                    <div 
                      className="absolute -top-10 left-1/2 -translate-x-1/2 font-mono text-xl font-black text-primary-container"
                      style={{ textShadow: '0 0 6px rgba(0, 245, 255, 0.5)' }}
                    >
                      20.14s
                    </div>
                    <div className="absolute inset-0 animate-pulse bg-white/20"></div>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center font-mono text-sm md:text-base font-black uppercase tracking-[0.1em] text-primary-container whitespace-nowrap">
                    Vajra
                  </div>
                </div>

              </div>
              <p className="mt-8 pt-6 border-t border-outline-variant/40 text-sm font-mono text-on-surface-variant leading-relaxed">
                Vajra moved 14.96GB of Llama 3 8B .safetensors weights through the streaming pipeline 59% faster in this run.<br /><br />
                Baseline used Hugging Face hf_transfer; Vajra ran with cache disabled.
              </p>
            </div>
          </div>

          {/* Streaming Timeline Sub-section */}
          <div className="mt-16 bg-surface-container-low border border-outline-variant/30 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="mb-10">
                <h3 className="text-sm font-mono uppercase tracking-widest text-primary-container mb-2 font-bold">
                  Streaming Timeline
                </h3>
                <h4 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tight">
                  GPU transfer starts before the download finishes
                </h4>
              </div>
              <div className="space-y-12">
                {/* Traditional Loading Path */}
                <div>
                  <div className="mb-4">
                    <span className="text-on-surface-variant font-mono text-base font-bold uppercase tracking-widest">
                      Traditional Loading Path
                    </span>
                  </div>
                  <div className="relative">
                    <div className="flex justify-between text-base font-mono mb-2">
                      <span className="text-on-surface-variant font-medium">Download full model with Hugging Face</span>
                      <span className="text-on-surface-variant font-bold">32.04s</span>
                    </div>
                    <div className="h-8 bg-surface-container-lowest w-full border border-outline-variant/30 relative mb-2">
                      <div className="h-full bg-outline-variant w-full relative">
                        {/* Indicator */}
                        <div className="absolute right-0 top-full mt-2 flex flex-col items-end">
                          <div className="w-px h-6 bg-error"></div>
                          <span className="text-error text-sm font-mono uppercase tracking-widest font-bold whitespace-nowrap mt-2">
                            GPU work starts after this
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Vajra Architecture */}
                <div className="pt-8 border-t border-outline-variant/30">
                  <div className="mb-2">
                    <span className="text-primary-container font-mono text-base font-black uppercase tracking-widest">
                      Vajra Architecture
                    </span>
                  </div>
                  <div className="space-y-2">
                    {/* Consolidated Master Bar Container */}
                    <div className="relative pt-4 pb-8">
                      {/* Labels Row */}
                      <div className="flex items-start text-base font-mono mb-8">
                        <div className="flex flex-col">
                          <span className="text-white font-bold uppercase tracking-widest">Parallel Download &amp; Transfer</span>
                          <span className="text-on-surface-variant text-sm">Continuous Streaming Pipeline</span>
                        </div>
                      </div>
                      {/* The Master Bar */}
                      <div className="h-12 bg-surface-container-lowest w-full border border-outline-variant/30 relative flex">
                        {/* Phase 1: Download Only (0s - 3.20s) */}
                        <div className="h-full bg-surface-container-high border-r border-primary-container/30 relative overflow-hidden" style={{ width: '9.99%' }}>
                          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,245,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:12px_12px]"></div>
                        </div>
                        {/* Phase 2: Concurrent Work (3.20s - 20.14s) */}
                        <div className="h-full bg-primary-container shadow-[0_0_12px_rgba(0,245,255,0.4)] relative" style={{ width: '52.87%' }}>
                          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                        </div>
                        {/* Completion Marker */}
                        <div
                          className="absolute -top-10 flex flex-col items-center pointer-events-none"
                          style={{ left: '62.86%', transform: 'translateX(-50%)', zIndex: 20 }}
                        >
                          <span className="mb-2 bg-background/90 px-2 py-1 border border-primary-container/30 text-primary-container text-sm font-mono font-black uppercase tracking-widest shadow-[0_0_8px_rgba(0,245,255,0.25)]">
                            20.14s
                          </span>
                          <div className="w-px h-8 bg-primary-container shadow-[0_0_8px_rgba(0,245,255,0.45)]"></div>
                        </div>
                        {/* Vertical Milestone Marker */}
                        <div
                          className="absolute flex flex-col items-center pointer-events-none"
                          style={{ top: 0, bottom: '-32px', left: '9.99%', transform: 'translateX(-50%)', zIndex: 20 }}
                        >
                          <div className="w-px h-full bg-primary-container shadow-[0_0_8px_rgba(0,245,255,0.6)]"></div>
                          <span className="text-primary-container text-sm font-black uppercase tracking-widest mt-1 whitespace-nowrap bg-background/90 px-1 border border-primary-container/20">
                            GPU TRANSFER BEGINS (3.20s)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 pt-6 border-t border-outline-variant/30">
                <p className="text-sm font-mono text-on-surface-variant leading-relaxed">
                  In this benchmark, Vajra started GPU transfer at 3.20s, while the 14.96GB download/RAM staging path completed in 20.14s. The Hugging Face baseline download completed in 32.04s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};