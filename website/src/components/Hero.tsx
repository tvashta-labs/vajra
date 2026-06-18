import Link from '@docusaurus/Link';

export const Hero: React.FC = () => {
  return (
    <section className="relative px-8 md:px-24 overflow-hidden py-8 md:py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 z-10">
          <h1 className="text-4xl md:text-6xl font-black leading-[1] tracking-tighter mb-4 text-white">
            High-Performance<br />Model Streamer
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-headline font-medium tracking-tight mb-8 max-w-2xl">
            Load models faster by overlapping download, RAM staging,&nbsp;<br />and CUDA transfer.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/docs/quick-start" className="px-6 py-3 bg-primary-container text-black font-black uppercase tracking-widest text-sm hover:brightness-110 transition-all active:scale-95 no-underline hover:no-underline">
              Get Started
            </Link>
            <Link to="/blog" className="px-6 py-3 border border-outline text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all active:scale-95 flex items-center justify-center no-underline hover:no-underline">
              View Benchmarks
            </Link>
          </div>
        </div>
        {/* Hero Stat Widget */}
        <div className="w-full md:w-[380px] bg-surface-container-low border-2 border-outline-variant/30 p-8 flex flex-col justify-between relative shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 to-transparent opacity-50"></div>
          <div className="relative z-10 w-full">
            <h3 className="text-[15px] uppercase tracking-[0.4em] text-on-surface-variant font-bold mb-6">Model Load Time</h3>
            <div className="space-y-6">
              {/* Vajra Bar */}
              <div>
                <div className="flex justify-between text-s font-mono mb-2">
                  <span className="text-primary-container font-black uppercase">Vajra</span>
                  <span className="text-white font-black">8.22s</span>
                </div>
                <div className="h-6 bg-surface-container-lowest w-full border border-primary-container/30">
                  <div className="h-full bg-primary-container shadow-[0_0_6px_rgba(0,245,255,0.2)]" style={{ width: '22.29%' }}></div>
                </div>
              </div>
              {/* hf_transfer Bar */}
              <div>
                <div className="flex justify-between text-s font-mono mb-2">
                  <span className="text-on-surface-variant font-bold uppercase">hf_transfer</span>
                  <span className="text-on-surface-variant font-bold">36.88s</span>
                </div>
                <div className="h-6 bg-surface-container-lowest w-full border border-amber/30">
                  <div className="h-full bg-amber shadow-[0_0_6px_rgba(255,183,77,0.2)]" style={{ width: '100%' }}></div>
                </div>
              </div>
              {/* Run:ai Bar */}
              <div>
                <div className="flex justify-between text-s font-mono mb-2">
                  <span className="text-on-surface-variant font-bold uppercase tracking-widest">Run:ai</span>
                  <span className="text-on-surface-variant font-bold">15.85s</span>
                </div>
                <div className="h-6 bg-surface-container-lowest w-full border border-white/20">
                  <div className="h-full shadow-[0_0_8px_rgba(255,255,255,0.4)]" style={{ width: '42.98%', backgroundColor: '#ffffff' }}></div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-outline-variant/40 flex justify-between items-center">
              <span className="text-lg font-mono text-on-surface-variant uppercase tracking-widest font-bold">Performance Delta</span>
              <span className="text-green-400 font-black text-lg">4.5x Faster</span>
            </div>
            <p className="mt-4 text-[10.1px] font-mono text-on-surface-variant/60 uppercase tracking-wider leading-relaxed">
              Measured from request start to model weights staged in memory on the same model, machine, and network.
            </p>
            <p className="mt-2 text-l font-mono text-primary-container uppercase tracking-wider leading-relaxed font-bold">
              GPU loading began at 0.65s
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};
