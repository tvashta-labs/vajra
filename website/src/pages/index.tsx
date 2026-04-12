import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { Terminal, Code, CheckCircle, Cloud, Cpu, Zap } from 'lucide-react';

export default function Home() {
  return (
    <Layout title="Vajra" description="Model streaming beyond the disk tax" noFooter>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style>{`
          .navbar { display: none !important; }
        `}</style>
      </Head>

      <div className="vajra-landing">
        <nav className="fixed top-0 w-full z-50 border-b border-outline-variant/30 bg-background/90 backdrop-blur-xl flex justify-between items-center px-8 py-4">
          <div className="text-xl font-bold tracking-tighter text-primary-container uppercase font-['Space_Grotesk']">
            Vajra
          </div>
          <div className="hidden md:flex gap-8 items-center font-['Space_Grotesk'] tracking-tight">
            <a className="text-primary-container border-b-2 border-primary-container pb-1" href="#">Benchmarks</a>
            <a className="text-on-surface-variant font-medium hover:text-primary-container transition-colors" href="/docs/intro">Docs</a>
            <a className="text-on-surface-variant font-medium hover:text-primary-container transition-colors" href="#">API</a>
            <a className="text-on-surface-variant font-medium hover:text-primary-container transition-colors" href="#">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                Changelog
              </span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-primary-container">
            <button className="p-2 bg-transparent border-none rounded-none hover:bg-surface-container-high transition-all active:scale-95 duration-75 cursor-pointer flex items-center justify-center text-primary-container"><Terminal size={24} strokeWidth={1.5} /></button>
            <button className="p-2 bg-transparent border-none rounded-none hover:bg-surface-container-high transition-all active:scale-95 duration-75 cursor-pointer flex items-center justify-center text-primary-container"><Code size={24} strokeWidth={1.5} /></button>
          </div>
        </nav>

        <main className="grid-bg min-h-screen pt-16 bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
          {/* Section 1: Hero */}
          <section className="relative px-8 md:px-24 overflow-hidden py-8 md:py-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 z-10">
          <div className="inline-block px-3 py-1 bg-primary-container/10 border-l-2 border-primary-container mb-4">
          <span className="text-primary-container font-label uppercase tracking-[0.2em] text-[9px] font-bold">Bypassing the CPU. Saturating the Metal.</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-[1] tracking-tighter mb-4 text-white">
                                  High-Performance<br/>Zero-Copy<br/>Model Streamer
                              </h1>
          <p className="text-base md:text-lg text-on-surface-variant max-w-lg mb-8 font-normal leading-relaxed">
                                  Outpace existing C++ based model loaders. Stream massive 15GB+ LLMs directly to PyTorch VRAM at blistering speeds.
                              </p>
          <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 bg-primary-container text-black font-black uppercase tracking-widest text-xs hover:brightness-110 transition-all active:scale-95 border-none rounded-none cursor-pointer">
                                      View Benchmarks
                                  </button>
          <button className="px-6 py-3 border border-outline text-white bg-transparent font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all active:scale-95 rounded-none cursor-pointer">
                                      View on GitHub
                                  </button>
          </div>
          </div>
          {/* Hero Stat Widget */}
          <div className="w-full md:w-[380px] aspect-square md:aspect-auto md:h-80 bg-surface-container-low border-2 border-outline-variant/30 p-8 flex flex-col justify-between relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 to-transparent opacity-50"></div>
          <div className="relative">
          <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold">Latency Metric (TTFC)</span>
          <div className="text-7xl font-black text-primary-container mt-2 flex items-baseline glow-cyan">
                                      3.51<span className="text-xl text-on-surface-variant ml-2">s</span>
          </div>
          <p className="text-on-surface-variant text-[11px] mt-2 font-mono">Time to First Chunk</p>
          </div>
          <div className="space-y-3 relative">
          <div className="h-[1px] bg-outline-variant/40 w-full"></div>
          <div className="flex justify-between items-end">
          <div>
          <span className="text-[9px] text-on-surface-variant block uppercase tracking-widest font-bold">Industry Standard</span>
          <span className="text-xl font-bold text-on-surface">20.3s</span>
          </div>
          <div className="text-right">
          <span className="text-secondary-fixed font-black text-base">82.7% Faster</span>
          </div>
          </div>
          </div>
          </div>
          </div>
          </section>
          {/* Section: Installation & Usage (Moved here) */}
          <section className="py-16 md:py-24 px-8 md:px-24 bg-[#05070a]/80 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3">
          <h2 className="text-4xl font-black tracking-tight mb-6 uppercase text-white">Installation &amp;<br/>Usage</h2>
          <p className="text-on-surface-variant font-normal leading-relaxed mb-8">
                                      Integrate Vajra into your existing PyTorch workflow with a single line of code. Designed for production-grade low latency applications.
                                  </p>
          <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm font-mono text-on-surface">
          <CheckCircle className="text-primary-container w-5 h-5" />
          <span>Python 3.10+ Support</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-mono text-on-surface">
          <CheckCircle className="text-primary-container w-5 h-5" />
          <span>PyTorch 2.0+ Native</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-mono text-on-surface">
          <CheckCircle className="text-primary-container w-5 h-5" />
          <span>NVIDIA/AMD GPU Support</span>
          </div>
          </div>
          </div>
          <div className="flex-1 w-full">
          <div className="bg-surface-container-lowest border-2 border-outline-variant/40 rounded-sm overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b-2 border-outline-variant/40">
          <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-error"></div>
          <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
          <div className="w-3 h-3 rounded-full bg-primary-container"></div>
          </div>
          <div className="text-[10px] font-bold font-mono text-on-surface-variant uppercase tracking-widest">vajra-shell — 80x24</div>
          <div className="w-12"></div>
          </div>
          {/* Terminal Body */}
          <div className="p-8 font-mono text-sm leading-relaxed text-on-surface bg-[#05070a]">
          <div className="mb-2">
          <span className="text-secondary-container font-bold">$</span> <span className="text-white font-bold">pip install vajra</span>
          </div>
          <div className="mb-4">
          <span className="text-secondary-container font-bold">$</span> <span className="text-white font-bold">python</span>
          </div>
          <div className="space-y-1">
          <div><span className="text-primary-container font-bold">&gt;&gt;&gt;</span> <span className="text-tertiary-fixed font-bold">from</span> vajra <span className="text-tertiary-fixed font-bold">import</span> Streamer</div>
          <div className="text-on-surface-variant/60 italic font-medium"><span className="text-primary-container">&gt;&gt;&gt;</span> # Stream 15GB Llama-3 directly to GPU bypass CPU</div>
          <div><span className="text-primary-container font-bold">&gt;&gt;&gt;</span> model = Streamer.load(<span className="text-secondary-container">"meta-llama/Meta-Llama-3-8B"</span>, device=<span className="text-secondary-container">"cuda:0"</span>)</div>
          </div>
          <div className="mt-6 space-y-1">
          <div className="text-on-surface-variant font-medium">[Vajra] Starting zero-copy transfer...</div>
          <div className="text-on-surface-variant font-medium">[Vajra] Time to First Chunk: <span className="text-primary-container font-black">3.51s</span></div>
          <div className="text-on-surface-variant font-medium">[Vajra] Inference Ready.</div>
          </div>
          <div className="mt-4 flex animate-pulse">
          <div className="w-2 h-5 bg-primary-container"></div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </section>
          {/* Section: Benchmark Visualization */}
          <section className="py-24 px-8 md:px-24 bg-[#05070a] border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto">
          <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase text-white">Benchmark Visualization</h2>
          <p className="text-primary-container font-mono tracking-[0.3em] uppercase text-xs font-bold">Vajra vs. Legacy Loaders — 15GB Llama 3 Performance Delta</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Graph Container */}
          <div className="lg:col-span-2 bg-surface-container-low border border-outline-variant/30 p-8 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
          <div className="relative z-10">
          <div className="flex justify-between items-start mb-12">
          <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-1 font-bold">Inference Latency (Seconds)</h3>
          <p className="text-2xl font-bold text-on-surface">Time to First Chunk</p>
          </div>
          <div className="flex gap-4">
          <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary-container"></div>
          <span className="text-[10px] font-mono uppercase text-on-surface font-bold">Vajra</span>
          </div>
          <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-outline-variant"></div>
          <span className="text-[10px] font-mono uppercase text-on-surface font-bold">Standard</span>
          </div>
          </div>
          </div>
          {/* Cyberpunk Graph */}
          <div className="h-64 flex items-end gap-6 md:gap-12 pb-8 border-b-2 border-l-2 border-outline-variant relative">
          {/* Y-axis labels */}
          <div className="absolute -left-12 top-0 bottom-8 w-10 text-[10px] font-bold font-mono text-on-surface-variant">
            <span className="absolute right-0 top-0 -translate-y-1/2">25s</span>
            <span className="absolute right-0 top-[40%] -translate-y-1/2">15s</span>
            <span className="absolute right-0 top-[80%] -translate-y-1/2">5s</span>
            <span className="absolute right-0 bottom-0 translate-y-1/2">0s</span>
          </div>
          {/* Standard Loader Bar */}
          <div className="flex-1 relative flex flex-col justify-end group h-full">
          <div className="w-full bg-outline-variant h-[81.2%] relative transition-all group-hover:brightness-125">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold font-mono text-on-surface">20.3s</div>
          </div>
          <div className="absolute -bottom-6 w-full text-center text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold">Standard</div>
          </div>
          {/* Competitor B Bar */}
          <div className="flex-1 relative flex flex-col justify-end group h-full">
          <div className="w-full bg-outline-variant/60 h-[58%] relative transition-all group-hover:brightness-125">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold font-mono text-on-surface">14.5s</div>
          </div>
          <div className="absolute -bottom-6 w-full text-center text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold">vLLM Load</div>
          </div>
          {/* Vajra Bar */}
          <div className="flex-1 relative flex flex-col justify-end group h-full">
          <div className="w-full bg-primary-container h-[14%] relative shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-lg font-black text-primary-container glow-cyan">3.51s</div>
          <div className="absolute inset-0 animate-pulse bg-white/20"></div>
          </div>
          <div className="absolute -bottom-6 w-full text-center text-[10px] font-mono uppercase tracking-widest text-primary-container font-black">Vajra (Core)</div>
          </div>
          </div>
          </div>
          </div>
          {/* Live Stream Progress Component */}
          <div className="bg-surface-container p-8 border-r-4 border-primary-container relative">
          <h3 className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-8 font-bold">Zero-Copy Stream Visualizer</h3>
          <div className="space-y-10">
          <div>
          <div className="flex justify-between mb-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface font-bold">Network Input (10Gbps)</span>
          <span className="text-[10px] font-mono text-primary-container font-bold">Streaming...</span>
          </div>
          <div className="h-2 bg-surface-container-lowest relative overflow-hidden">
          <div className="absolute inset-0 animate-flow"></div>
          <div className="h-full bg-primary-container w-[72%]"></div>
          </div>
          </div>
          {/* Logic Flow */}
          <div className="flex flex-col items-center gap-4 py-2">
          <div className="w-[2px] h-8 bg-gradient-to-b from-primary-container to-transparent"></div>
          <div className="px-4 py-2 border-2 border-primary-container bg-primary-container/10 text-[10px] font-black font-mono uppercase text-primary-container">
                                              Bypass System RAM
                                          </div>
          <div className="w-[2px] h-8 bg-gradient-to-t from-secondary-container to-transparent"></div>
          </div>
          {/* VRAM Output */}
          <div>
          <div className="flex justify-between mb-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface font-bold">Direct GPU VRAM Write</span>
          <span className="text-[10px] font-mono text-secondary-container font-bold">98.2% Efficiency</span>
          </div>
          <div className="h-6 border-2 border-secondary-container/40 p-1 flex gap-1">
          <div className="h-full w-4 bg-secondary-container"></div>
          <div className="h-full w-4 bg-secondary-container"></div>
          <div className="h-full w-4 bg-secondary-container"></div>
          <div className="h-full w-4 bg-secondary-container"></div>
          <div className="h-full w-4 bg-secondary-container/60"></div>
          <div className="h-full w-4 bg-secondary-container/30"></div>
          <div className="flex-1 bg-surface-container-lowest"></div>
          </div>
          </div>
          <p className="text-xs text-on-surface-variant font-normal leading-relaxed">
                                          Unlike standard loaders that buffer through CPU RAM, <span className="text-on-surface font-bold">Vajra</span> maps network byte-ranges directly to the PCIe bus, enabling immediate inference capability.
                                      </p>
          </div>
          </div>
          </div>
          </div>
          </section>
          {/* Section 2: Performance Metrics */}
          <section className="bg-surface-container-low py-24 px-8 md:px-24">
          <div className="max-w-7xl mx-auto">
          <div className="mb-16">
          <h2 className="text-4xl font-black tracking-tight mb-4 uppercase text-white">Performance Metrics</h2>
          <div className="h-1.5 w-24 bg-primary-container"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Metrics Chart */}
          <div className="md:col-span-2 space-y-12">
          <div className="bg-surface-container p-8 border-l-4 border-primary-container shadow-lg">
          <h3 className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-8 font-bold">Inference Start Delay (Meta-Llama-3-8B)</h3>
          <div className="space-y-8">
          <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono mb-1">
          <span className="text-primary-container font-black uppercase">Vajra</span>
          <span className="text-white font-black">3.51s</span>
          </div>
          <div className="h-4 bg-surface-container-lowest w-full relative">
          <div className="h-full bg-gradient-to-r from-primary-container to-tertiary-container shadow-[0_0_10px_rgba(0,245,255,0.3)]" style={{width: "17%"}}></div>
          </div>
          </div>
          <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono mb-1">
          <span className="text-on-surface-variant font-bold uppercase">Standard Python Loader</span>
          <span className="text-on-surface-variant font-bold">20.38s</span>
          </div>
          <div className="h-4 bg-surface-container-lowest w-full">
          <div className="h-full bg-outline-variant" style={{width: "100%"}}></div>
          </div>
          </div>
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-surface-container border-2 border-outline-variant/30">
          <Cloud className="text-tertiary-container mb-4 w-6 h-6" />
          <h4 className="text-lg font-black mb-2 text-white uppercase">Hardware A: Modest</h4>
          <p className="text-sm text-on-surface-variant mb-4 font-medium">2-vCPU Azure VM</p>
          <div className="text-4xl font-black text-primary-container">3.73 <span className="text-sm font-bold text-on-surface-variant">Gbps</span></div>
          <p className="text-[10px] text-tertiary-container uppercase mt-4 tracking-widest font-black">Exceeding Hypervisor Limits</p>
          </div>
          <div className="p-8 bg-surface-container border-2 border-outline-variant/30">
          <Cpu className="text-secondary-container mb-4 w-6 h-6" />
          <h4 className="text-lg font-black mb-2 text-white uppercase">Hardware B: Heavy Metal</h4>
          <p className="text-sm text-on-surface-variant mb-4 font-medium">Vultr NVIDIA A16-16Q</p>
          <div className="text-4xl font-black text-primary-container">5.82 <span className="text-sm font-bold text-on-surface-variant">Gbps</span></div>
          <p className="text-[10px] text-secondary-container uppercase mt-4 tracking-widest font-black">Global Throughput Maxed</p>
          </div>
          </div>
          </div>
          {/* Tech Info Card */}
          <div className="bg-surface-container-highest p-8 relative overflow-hidden flex flex-col justify-center border border-outline-variant/30">
          <img className="absolute top-0 right-0 w-full h-full object-cover mix-blend-overlay opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxBN-_3GGDlP_1hnUf8fPOi7RlHXMzYhNGzeZMUE0w_tjvpFvfy7QbJGqKoL1wtzjJSvOcPibUG6to_a157clv2TcAummSNbP_DPWba2Z9LxBU-a3xmPiFUJFHnqy7mvByWWTUvhTyCDaCbAVOJFdNeyHMqk73h4KKeSmT-YgeLyT8jEefs3DOsl_meOBz9MVBN1AafftTnlai2CrxrgeoREUGEe2VdXjhG2zoIW-33a0JQVFw7hr7or5L5r6mtcOebDnnfB6J0LA" />
          <div className="relative z-10">
          <h3 className="text-2xl font-black mb-6 text-white uppercase tracking-tight">Test Subject: Meta-Llama-3-8B</h3>
          <ul className="space-y-4 text-sm font-mono text-on-surface">
          <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary-container"></span>
          <span className="font-bold">Total Size:</span> ~15GB
                                          </li>
          <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary-container"></span>
          <span className="font-bold">Format:</span> Safetensors
                                          </li>
          <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary-container"></span>
          <span className="font-bold">Protocol:</span> NVMe-over-Fabric
                                          </li>
          <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary-container"></span>
          <span className="font-bold">Concurrency:</span> 128 Threads
                                          </li>
          </ul>
          <div className="mt-8 pt-8 border-t-2 border-outline-variant/40">
          <p className="text-xs text-on-surface font-medium leading-relaxed">
                                              Our engine achieves near-theoretical maximum speeds by utilizing specialized Linux kernel bypass techniques and direct memory access controllers.
                                          </p>
          </div>
          </div>
          </div>
          </div>
          </div>
          </section>
          {/* Section 3: The Problem */}
          <section className="py-24 px-8 md:px-24 border-y border-outline-variant/40 bg-background">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
          <h2 className="text-4xl font-black uppercase tracking-tight leading-none mb-6 text-white">The Cold-Start<br/><span className="text-error">Enemy</span></h2>
          <p className="text-on-surface-variant text-lg font-medium italic">Conventional loading is a bottleneck to real-time AI.</p>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
          <span className="text-error font-mono text-xs uppercase tracking-widest font-black">Fault 01: RAM Reality</span>
          <h4 className="text-xl font-black text-white uppercase">OOM Crashes</h4>
          <p className="text-sm text-on-surface-variant font-medium">Memory-constrained VMs often die before the model is even loaded due to excessive buffering in system RAM.</p>
          </div>
          <div className="space-y-4">
          <span className="text-error font-mono text-xs uppercase tracking-widest font-black">Fault 02: Disk Bottleneck</span>
          <h4 className="text-xl font-black text-white uppercase">I/O Throttling</h4>
          <p className="text-sm text-on-surface-variant font-medium">Standard cloud VM disk performance is heavily capped, creating a multi-minute delay for massive model files.</p>
          </div>
          <div className="space-y-4">
          <span className="text-error font-mono text-xs uppercase tracking-widest font-black">Fault 03: Sequential Delay</span>
          <h4 className="text-xl font-black text-white uppercase">Linear Pipeline</h4>
          <p className="text-sm text-on-surface-variant font-medium">Waiting for full downloads before beginning GPU transfer wastes 90% of the possible performance window.</p>
          </div>
          </div>
          </div>
          </section>
          {/* Section 4: The Solution */}
          <section className="py-24 px-8 md:px-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 text-white">Zero-Copy Architecture</h2>
          <p className="text-primary-container font-mono tracking-widest uppercase text-xs font-black">Direct-to-VRAM Orchestration</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-outline-variant/40">
          <div className="group p-12 bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/20 transition-all">
          <div className="mb-8 w-14 h-14 bg-primary-container/20 flex items-center justify-center text-primary-container border border-primary-container/30">
          <Zap className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">Insane Concurrency</h3>
          <p className="text-on-surface-variant text-sm font-medium leading-relaxed">Our optimized network tier pulls thousands of byte-ranges simultaneously, saturating even the fattest fiber pipes.</p>
          </div>
          <div className="group p-12 bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/20 transition-all relative">
          <div className="mb-8 w-14 h-14 bg-secondary-container/20 flex items-center justify-center text-secondary-container border border-secondary-container/30">
          <Terminal className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">True Zero-Copy</h3>
          <p className="text-on-surface-variant text-sm font-medium leading-relaxed">Streaming directly into PyTorch VRAM via the PCIe bus during the download process. No OS context switching.</p>
          </div>
          <div className="group p-12 bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/20 transition-all">
          <div className="mb-8 w-14 h-14 bg-tertiary-container/20 flex items-center justify-center text-tertiary-container border border-tertiary-container/30">
          <Cpu className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">Decoupled Disk</h3>
          <p className="text-on-surface-variant text-sm font-medium leading-relaxed">Bypassing standard OS bottlenecks by writing directly to mapped memory spaces, avoiding the "Dirty Page" trap.</p>
          </div>
          </div>
          </div>
          </section>
        </main>

        <footer className="w-full border-t border-outline-variant/40 bg-background flex flex-col md:flex-row justify-between items-center px-12 py-16">
          <div className="mb-8 md:mb-0">
            <div className="text-primary-container font-black uppercase text-sm mb-2">VAJRA</div>
            <div className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">
                © 2026 VAJRA.
            </div>
          </div>
          <div className="flex flex-wrap gap-8">
            <a className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold hover:text-white transition-all" href="#">Github</a>
            <a className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold hover:text-white transition-all" href="/docs/intro">Documentation</a>
            <a className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold hover:text-white transition-all" href="#">Benchmark Suite</a>
            <a className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold hover:text-white transition-all" href="#">Status</a>
          </div>
        </footer>
      </div>
    </Layout>
  );
}