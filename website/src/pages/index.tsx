import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { Terminal, Code, CheckCircle, Cloud, Cpu, Zap } from 'lucide-react';

export default function Home() {
  return (
    <Layout
      title="Vajra"
      description="Model streaming beyond the disk tax"
      noFooter
    >
      <Head>
        <style>{`
          .navbar { display: none !important; }
        `}</style>
      </Head>
      <style>{`
        .navbar { display: none !important; }
      `}</style>
      <div className="vajra-landing">
        <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-outline-variant/30 bg-background/90 px-8 py-4 backdrop-blur-xl">
          <div className="font-['Space_Grotesk_Variable'] text-xl font-bold uppercase tracking-tighter text-primary-container">
            Vajra
          </div>
          <div className="hidden items-center gap-8 font-['Space_Grotesk_Variable'] tracking-tight md:flex">
            <a
              className="border-b-2 border-primary-container pb-1 text-primary-container"
              href="#"
            >
              Benchmarks
            </a>
            <a
              className="font-medium text-on-surface-variant transition-colors hover:text-primary-container"
              href="/docs/intro"
            >
              Docs
            </a>
            <a
              className="font-medium text-on-surface-variant transition-colors hover:text-primary-container"
              href="#"
            >
              API
            </a>
            <a
              className="font-medium text-on-surface-variant transition-colors hover:text-primary-container"
              href="#"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                Changelog
              </span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-primary-container">
            <button className="flex cursor-pointer items-center justify-center rounded-none border-none bg-transparent p-2 text-primary-container transition-all duration-75 hover:bg-surface-container-high active:scale-95">
              <Terminal size={24} strokeWidth={1.5} />
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-none border-none bg-transparent p-2 text-primary-container transition-all duration-75 hover:bg-surface-container-high active:scale-95">
              <Code size={24} strokeWidth={1.5} />
            </button>
          </div>
        </nav>

        <main className="grid-bg min-h-screen bg-background pt-16 text-on-surface selection:bg-primary-container selection:text-on-primary-container">
          {/* Section 1: Hero */}
          <section className="relative overflow-hidden px-8 py-8 md:px-24 md:py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">
              <div className="z-10 flex-1">
                <div className="mb-4 inline-block border-l-2 border-primary-container bg-primary-container/10 px-3 py-1">
                  <span className="font-label text-[9px] font-bold uppercase tracking-[0.2em] text-primary-container">
                    Bypassing the CPU. Saturating the Metal.
                  </span>
                </div>
                <h1 className="mb-4 text-4xl font-black leading-[1] tracking-tighter text-white md:text-6xl">
                  High-Performance
                  <br />
                  Zero-Copy
                  <br />
                  Model Streamer
                </h1>
                <p className="mb-8 max-w-lg text-base font-normal leading-relaxed text-on-surface-variant md:text-lg">
                  Outpace existing C++ based model loaders. Stream massive 15GB+
                  LLMs directly to PyTorch VRAM at blistering speeds.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="cursor-pointer rounded-none border-none bg-primary-container px-6 py-3 text-xs font-black uppercase tracking-widest text-black transition-all hover:brightness-110 active:scale-95">
                    View Benchmarks
                  </button>
                  <button className="cursor-pointer rounded-none border border-outline bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/5 active:scale-95">
                    View on GitHub
                  </button>
                </div>
              </div>
              {/* Hero Stat Widget */}
              <div className="group relative flex aspect-square w-full flex-col justify-between border-2 border-outline-variant/30 bg-surface-container-low p-8 shadow-2xl md:aspect-auto md:h-80 md:w-[380px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 to-transparent opacity-50"></div>
                <div className="relative">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">
                    Latency Metric (TTFC)
                  </span>
                  <div className="glow-cyan mt-2 flex items-baseline text-7xl font-black text-primary-container">
                    3.51
                    <span className="ml-2 text-xl text-on-surface-variant">
                      s
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-[11px] text-on-surface-variant">
                    Time to First Chunk
                  </p>
                </div>
                <div className="relative space-y-3">
                  <div className="h-[1px] w-full bg-outline-variant/40"></div>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">
                        Industry Standard
                      </span>
                      <span className="text-xl font-bold text-on-surface">
                        20.3s
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-black text-secondary-fixed">
                        82.7% Faster
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Installation & Usage (Moved here) */}
          <section className="border-b border-outline-variant/30 bg-[#05070a]/80 px-8 py-16 md:px-24 md:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col items-center gap-16 md:flex-row">
                <div className="md:w-1/3">
                  <h2 className="mb-6 text-4xl font-black uppercase tracking-tight text-white">
                    Installation &amp;
                    <br />
                    Usage
                  </h2>
                  <p className="mb-8 font-normal leading-relaxed text-on-surface-variant">
                    Integrate Vajra into your existing PyTorch workflow with a
                    single line of code. Designed for production-grade low
                    latency applications.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 font-mono text-sm text-on-surface">
                      <CheckCircle className="h-5 w-5 text-primary-container" />
                      <span>Python 3.10+ Support</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-sm text-on-surface">
                      <CheckCircle className="h-5 w-5 text-primary-container" />
                      <span>PyTorch 2.0+ Native</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-sm text-on-surface">
                      <CheckCircle className="h-5 w-5 text-primary-container" />
                      <span>NVIDIA/AMD GPU Support</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-1">
                  <div className="overflow-hidden rounded-sm border-2 border-outline-variant/40 bg-surface-container-lowest shadow-2xl">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between border-b-2 border-outline-variant/40 bg-surface-container-high px-4 py-2">
                      <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-error"></div>
                        <div className="h-3 w-3 rounded-full bg-secondary-container"></div>
                        <div className="h-3 w-3 rounded-full bg-primary-container"></div>
                      </div>
                      <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                        vajra-shell — 80x24
                      </div>
                      <div className="w-12"></div>
                    </div>
                    {/* Terminal Body */}
                    <div className="bg-[#05070a] p-8 font-mono text-sm leading-relaxed text-on-surface">
                      <div className="mb-2">
                        <span className="font-bold text-secondary-container">
                          $
                        </span>{' '}
                        <span className="font-bold text-white">
                          pip install vajra
                        </span>
                      </div>
                      <div className="mb-4">
                        <span className="font-bold text-secondary-container">
                          $
                        </span>{' '}
                        <span className="font-bold text-white">python</span>
                      </div>
                      <div className="space-y-1">
                        <div>
                          <span className="font-bold text-primary-container">
                            &gt;&gt;&gt;
                          </span>{' '}
                          <span className="font-bold text-tertiary-fixed">
                            from
                          </span>{' '}
                          vajra{' '}
                          <span className="font-bold text-tertiary-fixed">
                            import
                          </span>{' '}
                          Streamer
                        </div>
                        <div className="font-medium italic text-on-surface-variant/60">
                          <span className="text-primary-container">
                            &gt;&gt;&gt;
                          </span>{' '}
                          # Stream 15GB Llama-3 directly to GPU bypass CPU
                        </div>
                        <div>
                          <span className="font-bold text-primary-container">
                            &gt;&gt;&gt;
                          </span>{' '}
                          model = Streamer.load(
                          <span className="text-secondary-container">
                            "meta-llama/Meta-Llama-3-8B"
                          </span>
                          , device=
                          <span className="text-secondary-container">
                            "cuda:0"
                          </span>
                          )
                        </div>
                      </div>
                      <div className="mt-6 space-y-1">
                        <div className="font-medium text-on-surface-variant">
                          [Vajra] Starting zero-copy transfer...
                        </div>
                        <div className="font-medium text-on-surface-variant">
                          [Vajra] Time to First Chunk:{' '}
                          <span className="font-black text-primary-container">
                            3.51s
                          </span>
                        </div>
                        <div className="font-medium text-on-surface-variant">
                          [Vajra] Inference Ready.
                        </div>
                      </div>
                      <div className="mt-4 flex animate-pulse">
                        <div className="h-5 w-2 bg-primary-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Benchmark Visualization */}
          <section className="border-b border-outline-variant/30 bg-[#05070a] px-8 py-24 md:px-24">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16">
                <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                  Benchmark Visualization
                </h2>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-primary-container">
                  Vajra vs. Legacy Loaders — 15GB Llama 3 Performance Delta
                </p>
              </div>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                {/* Graph Container */}
                <div className="relative overflow-hidden border border-outline-variant/30 bg-surface-container-low p-8 lg:col-span-2">
                  <div className="grid-bg pointer-events-none absolute inset-0 opacity-20"></div>
                  <div className="relative z-10">
                    <div className="mb-12 flex items-start justify-between">
                      <div>
                        <h3 className="mb-1 font-mono text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                          Inference Latency (Seconds)
                        </h3>
                        <p className="text-2xl font-bold text-on-surface">
                          Time to First Chunk
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-primary-container"></div>
                          <span className="font-mono text-[10px] font-bold uppercase text-on-surface">
                            Vajra
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-outline-variant"></div>
                          <span className="font-mono text-[10px] font-bold uppercase text-on-surface">
                            Standard
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Cyberpunk Graph */}
                    <div className="relative flex h-64 items-end gap-6 border-b-2 border-l-2 border-outline-variant pb-8 md:gap-12">
                      {/* Y-axis labels */}
                      <div className="absolute -left-12 bottom-8 top-0 w-10 font-mono text-[10px] font-bold text-on-surface-variant">
                        <span className="absolute right-0 top-0 -translate-y-1/2">
                          25s
                        </span>
                        <span className="absolute right-0 top-[40%] -translate-y-1/2">
                          15s
                        </span>
                        <span className="absolute right-0 top-[80%] -translate-y-1/2">
                          5s
                        </span>
                        <span className="absolute bottom-0 right-0 translate-y-1/2">
                          0s
                        </span>
                      </div>
                      {/* Standard Loader Bar */}
                      <div className="group relative flex h-full flex-1 flex-col justify-end">
                        <div className="relative h-[81.2%] w-full bg-outline-variant transition-all group-hover:brightness-125">
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-sm font-bold text-on-surface">
                            20.3s
                          </div>
                        </div>
                        <div className="absolute -bottom-6 w-full text-center font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                          Standard
                        </div>
                      </div>
                      {/* Competitor B Bar */}
                      <div className="group relative flex h-full flex-1 flex-col justify-end">
                        <div className="relative h-[58%] w-full bg-outline-variant/60 transition-all group-hover:brightness-125">
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-sm font-bold text-on-surface">
                            14.5s
                          </div>
                        </div>
                        <div className="absolute -bottom-6 w-full text-center font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                          vLLM Load
                        </div>
                      </div>
                      {/* Vajra Bar */}
                      <div className="group relative flex h-full flex-1 flex-col justify-end">
                        <div className="relative h-[14%] w-full bg-primary-container shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all">
                          <div className="glow-cyan absolute -top-10 left-1/2 -translate-x-1/2 text-lg font-black text-primary-container">
                            3.51s
                          </div>
                          <div className="absolute inset-0 animate-pulse bg-white/20"></div>
                        </div>
                        <div className="absolute -bottom-6 w-full text-center font-mono text-[10px] font-black uppercase tracking-widest text-primary-container">
                          Vajra (Core)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Live Stream Progress Component */}
                <div className="relative border-r-4 border-primary-container bg-surface-container p-8">
                  <h3 className="mb-8 font-label text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                    Zero-Copy Stream Visualizer
                  </h3>
                  <div className="space-y-10">
                    <div>
                      <div className="mb-2 flex justify-between">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface">
                          Network Input (10Gbps)
                        </span>
                        <span className="font-mono text-[10px] font-bold text-primary-container">
                          Streaming...
                        </span>
                      </div>
                      <div className="relative h-2 overflow-hidden bg-surface-container-lowest">
                        <div className="animate-flow absolute inset-0"></div>
                        <div className="h-full w-[72%] bg-primary-container"></div>
                      </div>
                    </div>
                    {/* Logic Flow */}
                    <div className="flex flex-col items-center gap-4 py-2">
                      <div className="h-8 w-[2px] bg-gradient-to-b from-primary-container to-transparent"></div>
                      <div className="border-2 border-primary-container bg-primary-container/10 px-4 py-2 font-mono text-[10px] font-black uppercase text-primary-container">
                        Bypass System RAM
                      </div>
                      <div className="h-8 w-[2px] bg-gradient-to-t from-secondary-container to-transparent"></div>
                    </div>
                    {/* VRAM Output */}
                    <div>
                      <div className="mb-2 flex justify-between">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface">
                          Direct GPU VRAM Write
                        </span>
                        <span className="font-mono text-[10px] font-bold text-secondary-container">
                          98.2% Efficiency
                        </span>
                      </div>
                      <div className="flex h-6 gap-1 border-2 border-secondary-container/40 p-1">
                        <div className="h-full w-4 bg-secondary-container"></div>
                        <div className="h-full w-4 bg-secondary-container"></div>
                        <div className="h-full w-4 bg-secondary-container"></div>
                        <div className="h-full w-4 bg-secondary-container"></div>
                        <div className="h-full w-4 bg-secondary-container/60"></div>
                        <div className="h-full w-4 bg-secondary-container/30"></div>
                        <div className="flex-1 bg-surface-container-lowest"></div>
                      </div>
                    </div>
                    <p className="text-xs font-normal leading-relaxed text-on-surface-variant">
                      Unlike standard loaders that buffer through CPU RAM,{' '}
                      <span className="font-bold text-on-surface">Vajra</span>{' '}
                      maps network byte-ranges directly to the PCIe bus,
                      enabling immediate inference capability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 2: Performance Metrics */}
          <section className="bg-surface-container-low px-8 py-24 md:px-24">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16">
                <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-white">
                  Performance Metrics
                </h2>
                <div className="h-1.5 w-24 bg-primary-container"></div>
              </div>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                {/* Metrics Chart */}
                <div className="space-y-12 md:col-span-2">
                  <div className="border-l-4 border-primary-container bg-surface-container p-8 shadow-lg">
                    <h3 className="mb-8 font-label text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                      Inference Start Delay (Meta-Llama-3-8B)
                    </h3>
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <div className="mb-1 flex justify-between font-mono text-xs">
                          <span className="font-black uppercase text-primary-container">
                            Vajra
                          </span>
                          <span className="font-black text-white">3.51s</span>
                        </div>
                        <div className="relative h-4 w-full bg-surface-container-lowest">
                          <div
                            className="h-full bg-gradient-to-r from-primary-container to-tertiary-container shadow-[0_0_10px_rgba(0,245,255,0.3)]"
                            style={{ width: '17%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="mb-1 flex justify-between font-mono text-xs">
                          <span className="font-bold uppercase text-on-surface-variant">
                            Standard Python Loader
                          </span>
                          <span className="font-bold text-on-surface-variant">
                            20.38s
                          </span>
                        </div>
                        <div className="h-4 w-full bg-surface-container-lowest">
                          <div
                            className="h-full bg-outline-variant"
                            style={{ width: '100%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="border-2 border-outline-variant/30 bg-surface-container p-8">
                      <Cloud className="mb-4 h-6 w-6 text-tertiary-container" />
                      <h4 className="mb-2 text-lg font-black uppercase text-white">
                        Hardware A: Modest
                      </h4>
                      <p className="mb-4 text-sm font-medium text-on-surface-variant">
                        2-vCPU Azure VM
                      </p>
                      <div className="text-4xl font-black text-primary-container">
                        3.73{' '}
                        <span className="text-sm font-bold text-on-surface-variant">
                          Gbps
                        </span>
                      </div>
                      <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-tertiary-container">
                        Exceeding Hypervisor Limits
                      </p>
                    </div>
                    <div className="border-2 border-outline-variant/30 bg-surface-container p-8">
                      <Cpu className="mb-4 h-6 w-6 text-secondary-container" />
                      <h4 className="mb-2 text-lg font-black uppercase text-white">
                        Hardware B: Heavy Metal
                      </h4>
                      <p className="mb-4 text-sm font-medium text-on-surface-variant">
                        Vultr NVIDIA A16-16Q
                      </p>
                      <div className="text-4xl font-black text-primary-container">
                        5.82{' '}
                        <span className="text-sm font-bold text-on-surface-variant">
                          Gbps
                        </span>
                      </div>
                      <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-secondary-container">
                        Global Throughput Maxed
                      </p>
                    </div>
                  </div>
                </div>
                {/* Tech Info Card */}
                <div className="relative flex flex-col justify-center overflow-hidden border border-outline-variant/30 bg-surface-container-highest p-8">
                  <img
                    className="absolute right-0 top-0 h-full w-full object-cover opacity-30 mix-blend-overlay"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxBN-_3GGDlP_1hnUf8fPOi7RlHXMzYhNGzeZMUE0w_tjvpFvfy7QbJGqKoL1wtzjJSvOcPibUG6to_a157clv2TcAummSNbP_DPWba2Z9LxBU-a3xmPiFUJFHnqy7mvByWWTUvhTyCDaCbAVOJFdNeyHMqk73h4KKeSmT-YgeLyT8jEefs3DOsl_meOBz9MVBN1AafftTnlai2CrxrgeoREUGEe2VdXjhG2zoIW-33a0JQVFw7hr7or5L5r6mtcOebDnnfB6J0LA"
                  />
                  <div className="relative z-10">
                    <h3 className="mb-6 text-2xl font-black uppercase tracking-tight text-white">
                      Test Subject: Meta-Llama-3-8B
                    </h3>
                    <ul className="space-y-4 font-mono text-sm text-on-surface">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-primary-container"></span>
                        <span className="font-bold">Total Size:</span> ~15GB
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-primary-container"></span>
                        <span className="font-bold">Format:</span> Safetensors
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-primary-container"></span>
                        <span className="font-bold">Protocol:</span>{' '}
                        NVMe-over-Fabric
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-primary-container"></span>
                        <span className="font-bold">Concurrency:</span> 128
                        Threads
                      </li>
                    </ul>
                    <div className="mt-8 border-t-2 border-outline-variant/40 pt-8">
                      <p className="text-xs font-medium leading-relaxed text-on-surface">
                        Our engine achieves near-theoretical maximum speeds by
                        utilizing specialized Linux kernel bypass techniques and
                        direct memory access controllers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 3: The Problem */}
          <section className="border-y border-outline-variant/40 bg-background px-8 py-24 md:px-24">
            <div className="mx-auto flex max-w-7xl flex-col gap-16 md:flex-row">
              <div className="md:w-1/3">
                <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-white">
                  The Cold-Start
                  <br />
                  <span className="text-error">Enemy</span>
                </h2>
                <p className="text-lg font-medium italic text-on-surface-variant">
                  Conventional loading is a bottleneck to real-time AI.
                </p>
              </div>
              <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-3">
                <div className="space-y-4">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-error">
                    Fault 01: RAM Reality
                  </span>
                  <h4 className="text-xl font-black uppercase text-white">
                    OOM Crashes
                  </h4>
                  <p className="text-sm font-medium text-on-surface-variant">
                    Memory-constrained VMs often die before the model is even
                    loaded due to excessive buffering in system RAM.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-error">
                    Fault 02: Disk Bottleneck
                  </span>
                  <h4 className="text-xl font-black uppercase text-white">
                    I/O Throttling
                  </h4>
                  <p className="text-sm font-medium text-on-surface-variant">
                    Standard cloud VM disk performance is heavily capped,
                    creating a multi-minute delay for massive model files.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-error">
                    Fault 03: Sequential Delay
                  </span>
                  <h4 className="text-xl font-black uppercase text-white">
                    Linear Pipeline
                  </h4>
                  <p className="text-sm font-medium text-on-surface-variant">
                    Waiting for full downloads before beginning GPU transfer
                    wastes 90% of the possible performance window.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Section 4: The Solution */}
          <section className="bg-surface-container-lowest px-8 py-24 md:px-24">
            <div className="mx-auto max-w-7xl">
              <div className="mb-20 text-center">
                <h2 className="mb-4 text-5xl font-black uppercase tracking-tighter text-white">
                  Zero-Copy Architecture
                </h2>
                <p className="font-mono text-xs font-black uppercase tracking-widest text-primary-container">
                  Direct-to-VRAM Orchestration
                </p>
              </div>
              <div className="grid grid-cols-1 gap-0 border-2 border-outline-variant/40 md:grid-cols-3">
                <div className="group border border-outline-variant/20 bg-surface-container-low p-12 transition-all hover:bg-surface-container-high">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center border border-primary-container/30 bg-primary-container/20 text-primary-container">
                    <Zap className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white">
                    Insane Concurrency
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-on-surface-variant">
                    Our optimized network tier pulls thousands of byte-ranges
                    simultaneously, saturating even the fattest fiber pipes.
                  </p>
                </div>
                <div className="group relative border border-outline-variant/20 bg-surface-container-low p-12 transition-all hover:bg-surface-container-high">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center border border-secondary-container/30 bg-secondary-container/20 text-secondary-container">
                    <Terminal className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white">
                    True Zero-Copy
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-on-surface-variant">
                    Streaming directly into PyTorch VRAM via the PCIe bus during
                    the download process. No OS context switching.
                  </p>
                </div>
                <div className="group border border-outline-variant/20 bg-surface-container-low p-12 transition-all hover:bg-surface-container-high">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center border border-tertiary-container/30 bg-tertiary-container/20 text-tertiary-container">
                    <Cpu className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white">
                    Decoupled Disk
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-on-surface-variant">
                    Bypassing standard OS bottlenecks by writing directly to
                    mapped memory spaces, avoiding the "Dirty Page" trap.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="flex w-full flex-col items-center justify-between border-t border-outline-variant/40 bg-background px-12 py-16 md:flex-row">
          <div className="mb-8 md:mb-0">
            <div className="mb-2 text-sm font-black uppercase text-primary-container">
              VAJRA
            </div>
            <div className="font-['Inter_Variable'] text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              © 2026 VAJRA.
            </div>
          </div>
          <div className="flex flex-wrap gap-8">
            <a
              className="font-['Inter_Variable'] text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant transition-all hover:text-white"
              href="#"
            >
              Github
            </a>
            <a
              className="font-['Inter_Variable'] text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant transition-all hover:text-white"
              href="/docs/intro"
            >
              Documentation
            </a>
            <a
              className="font-['Inter_Variable'] text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant transition-all hover:text-white"
              href="#"
            >
              Benchmark Suite
            </a>
            <a
              className="font-['Inter_Variable'] text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant transition-all hover:text-white"
              href="#"
            >
              Status
            </a>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
