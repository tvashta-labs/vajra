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
              <div className="mb-12">
                <h3 className="text-sm font-mono uppercase tracking-widest text-on-surface-variant mb-1 font-bold">
                  Transfer Metric
                </h3>
                <p className="text-2xl font-bold text-on-surface">Total Weight Transfer Time</p>
              </div>
              {/* Horizontal Bar Chart */}
              <div className="space-y-8 mb-8">
                {/* Hugging Face baseline */}
                <div>
                  <div className="flex justify-between text-base font-mono mb-2">
                    <span className="text-on-surface-variant font-bold uppercase">Hugging Face (rust) baseline</span>
                    <span className="text-on-surface-variant font-bold">32.04s</span>
                  </div>
                  <div className="h-8 bg-surface-container-lowest w-full border border-outline-variant/30 relative">
                    <div className="h-full bg-outline-variant transition-all" style={{ width: '100%' }}></div>
                  </div>
                </div>
                {/* Vibe Streamer */}
                <div>
                  <div className="flex justify-between text-base font-mono mb-2">
                    <span className="text-primary-container font-black uppercase">Vajra</span>
                    <span className="text-white font-black">20.14s</span>
                  </div>
                  <div className="h-8 bg-surface-container-lowest w-full border border-primary-container/30 relative">
                    <div
                      className="h-full bg-primary-container shadow-[0_0_12px_rgba(0,245,255,0.4)] transition-all relative overflow-hidden"
                      style={{ width: '62.86%' }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-8 pt-6 border-t border-outline-variant/40 text-sm font-mono text-on-surface-variant leading-relaxed">
                Vajra moved 14.96GB of Llama 3 8B .safetensors weights through the streaming pipeline 1.59x faster in this run.<br /><br />
                Baseline used Hugging Face hf_transfer; Vajra ran with cache disabled.
              </p>
            </div>
          </div>
          {/* Additional Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 text-center shadow-lg">
              <div className="text-3xl font-black text-primary-container mb-2 font-mono">3.20s</div>
              <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant font-bold">Time to First GPU Transfer</div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 text-center shadow-lg">
              <div className="text-3xl font-black text-primary-container mb-2 font-mono">14.96GB</div>
              <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant font-bold">Streamed Model Size</div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 text-center shadow-lg">
              <div className="text-3xl font-black text-primary-container mb-2 font-mono">6.38Gbps</div>
              <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant font-bold">Global Throughput</div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 text-center shadow-lg">
              <div className="text-3xl font-black text-primary-container mb-2 font-mono">4</div>
              <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant font-bold">Safetensors Shards</div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 text-center shadow-lg">
              <div className="text-3xl font-black text-primary-container mb-2 font-mono">32</div>
              <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant font-bold">Chunk Workers</div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 text-center shadow-lg">
              <div className="text-3xl font-black text-primary-container mb-2 font-mono">5</div>
              <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant font-bold">GPU Workers</div>
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
                <p className="text-on-surface-variant text-sm font-medium leading-relaxed max-w-3xl">
                  Vajra begins moving chunks toward GPU memory after the first completed chunk, while the rest of the model is still downloading.
                </p>
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
                      <div className="flex justify-between text-base font-mono mb-2">
                        <div className="flex flex-col">
                          <span className="text-white font-bold uppercase tracking-widest">Parallel Download &amp; Transfer</span>
                          <span className="text-on-surface-variant text-sm">Continuous Streaming Pipeline</span>
                        </div>
                        <span className="text-white font-black">20.14s</span>
                      </div>
                      {/* The Master Bar */}
                      <div className="h-12 bg-surface-container-lowest w-full border border-outline-variant/30 relative flex">
                        {/* Phase 1: Download Only (0s - 3.20s) */}
                        <div className="h-full bg-surface-container-high border-r border-primary-container/30 relative overflow-hidden" style={{ width: '15.89%' }}>
                          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,245,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:12px_12px]"></div>
                        </div>
                        {/* Phase 2: Concurrent Work (3.20s - 20.14s) */}
                        <div className="h-full flex-1 bg-primary-container shadow-[0_0_12px_rgba(0,245,255,0.4)] relative">
                          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                        </div>
                        {/* Vertical Milestone Marker */}
                        <div
                          className="absolute flex flex-col items-center pointer-events-none"
                          style={{ top: 0, bottom: '-32px', left: '15.89%', transform: 'translateX(-50%)', zIndex: 20 }}
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