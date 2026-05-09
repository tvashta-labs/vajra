import Link from '@docusaurus/Link';

export const Installation: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-8 md:px-24 bg-[#05070a]/80 border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-black tracking-tight uppercase text-white mb-4">
              Installation &amp;<br />Usage
            </h2>
            <h3 className="text-xl font-bold tracking-tight mb-2 uppercase text-white">
              Install the Python SDK
            </h3>
            <p className="text-on-surface-variant font-normal leading-relaxed">
              Install the Python package and start streaming models from Python.&nbsp;<br /><br />
              Load Hugging Face .safetensors models directly into PyTorch tensors with one Python call.
            </p>
            <Link to="/docs/quick-start" className="inline-block mt-8 px-8 py-4 bg-primary-container text-black font-black uppercase tracking-[0.2em] text-sm hover:brightness-110 transition-all active:scale-95 shadow-[0_0_10px_rgba(0,245,255,0.1)] no-underline hover:no-underline">
              Get Started
            </Link>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-surface-container-lowest border-2 border-outline-variant/40 rounded-sm overflow-hidden shadow-xl">
              {/* Terminal Header */}
              <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b-2 border-outline-variant/40">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-container"></div>
                </div>
                <div className="text-[10px] font-bold font-mono text-on-surface-variant uppercase tracking-widest">
                  vajra-shell — 80x24
                </div>
                <div className="w-12"></div>
              </div>
              {/* Terminal Body */}
              <div className="p-8 font-mono text-sm leading-relaxed text-on-surface bg-[#05070a]">
                <div className="mb-2">
                  <span className="text-secondary-container font-bold">$</span> <span className="text-white font-bold">pip install vajra-streamer</span>
                </div>
                <div className="space-y-1">
                  <div className="mt-4">
                    <span className="text-tertiary-fixed font-bold">from</span> vajra <span className="text-tertiary-fixed font-bold">import</span> VajraStreamer, StreamConfig
                  </div>
                  <div>config = StreamConfig(</div>
                  <div className="pl-4">auth_token=<span className="text-secondary-container">"hf_..."</span>,</div>
                  <div className="pl-4">chunk_size_mb=<span className="text-primary-container">64</span>,</div>
                  <div className="pl-4">chunk_workers=<span className="text-primary-container">16</span>,</div>
                  <div className="pl-4">gpu_workers=<span className="text-primary-container">3</span>,</div>
                  <div className="pl-4">disable_cache=<span className="text-primary-container">True</span>,</div>
                  <div>)</div>
                  <div>url = <span className="text-secondary-container">"meta-llama/Meta-Llama-3-8B"</span></div>
                  <div>
                    <span className="text-tertiary-fixed font-bold">with</span> VajraStreamer(config) <span className="text-tertiary-fixed font-bold">as</span> streamer:
                  </div>
                  <div className="pl-4">tensors = streamer.load(url)</div>
                  <div className="pl-4">
                    <span className="text-primary-container">print</span>(f<span className="text-secondary-container">"Loaded {'{len(tensors)}'} tensors"</span>)
                  </div>
                  <div className="pl-4">
                    <span className="text-primary-container">print</span>(tensors[<span className="text-secondary-container">"model.layers.0.self_attn.q_proj.weight"</span>].shape)
                  </div>
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
  );
};