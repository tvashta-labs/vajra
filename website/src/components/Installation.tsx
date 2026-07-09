import React from 'react';
import Link from '@docusaurus/Link';
import { CopyButton } from '@site/src/components/CopyButton';

const INSTALL_CMD = 'pip install vajra-streamer';

const USAGE_CODE = `from vajra import VajraStreamer, StreamConfig
config = StreamConfig(
    auth_token="hf_...",
    chunk_size_mb=64,
    chunk_workers=16,
    gpu_workers=3,
    disable_cache=True,
)
url = "meta-llama/Meta-Llama-3-8B"
with VajraStreamer(config) as streamer:
    tensors = streamer.load(url)
    print(f"Loaded {len(tensors)} tensors")
    print(tensors["model.layers.0.self_attn.q_proj.weight"].shape)`;

export const Installation: React.FC = () => {
  return (
    <section id="install" className="scroll-mt-24 px-7 py-16">
      <div className="mx-auto grid max-w-wrap items-center gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
        <div>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-ink">
            Installation
            <br />
            <em className="not-italic text-accent">&amp; Usage</em>
          </h2>
          <h3 className="mt-[26px] mb-2.5 font-display text-[1.24rem] font-semibold tracking-[-0.01em] text-ink">
            Install the Python SDK
          </h3>
          <p className="mb-3.5 max-w-[420px] text-base font-medium text-ink-soft">
            Install the Python package and start streaming models from Python.
          </p>
          <p className="mb-3.5 max-w-[420px] text-base font-medium text-ink-soft">
            Load Hugging Face{' '}
            <span className="mono text-accent">.safetensors</span> models
            directly into PyTorch tensors with a single call.
          </p>
          <Link
            to="/docs/quick-start"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-transparent bg-ink px-[22px] py-[11px] text-base font-medium text-paper no-underline transition-all duration-250 hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:no-underline hover:shadow-[0_14px_30px_-12px_rgba(37,99,235,0.7)]">
            Get started
          </Link>
        </div>

        <div
          className="reveal overflow-hidden rounded-lg border border-[#1e1e24] bg-[#070709] shadow-soft-lg"
          style={{ animationDelay: '0.15s' }}>
          <div className="flex items-center gap-2 border-b border-[#1e1e24] bg-[#0f0f13] px-[18px] py-3.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="overflow-x-auto px-[26px] py-6 font-mono text-[0.95rem] leading-[1.85] text-[#e1e4e8]">
            <div className="flex items-start gap-3.5">
              <div className="min-w-0 flex-1">
                <div className="whitespace-pre">
                  <span className="tk-prompt">$</span>{' '}
                  <span className="tk-cmd">{INSTALL_CMD}</span>
                </div>
              </div>
              <CopyButton text={INSTALL_CMD} label="Copy install command" />
            </div>

            <div className="h-[1.85em]" />

            <div className="flex items-start gap-3.5">
              <div className="min-w-0 flex-1">
                <div className="whitespace-pre">
                  <span className="tk-kw">from</span>{' '}
                  <span className="tk-var">vajra</span>{' '}
                  <span className="tk-kw">import</span> VajraStreamer,
                  StreamConfig
                </div>
                <div className="whitespace-pre">
                  config = <span className="tk-fn">StreamConfig</span>(
                </div>
                <div className="whitespace-pre">
                  {'    '}auth_token=<span className="tk-str">&quot;hf_...&quot;</span>,
                </div>
                <div className="whitespace-pre">
                  {'    '}chunk_size_mb=<span className="tk-num">64</span>,
                </div>
                <div className="whitespace-pre">
                  {'    '}chunk_workers=<span className="tk-num">16</span>,
                </div>
                <div className="whitespace-pre">
                  {'    '}gpu_workers=<span className="tk-num">3</span>,
                </div>
                <div className="whitespace-pre">
                  {'    '}disable_cache=<span className="tk-kw">True</span>,
                </div>
                <div className="whitespace-pre">)</div>
                <div className="whitespace-pre">
                  url ={' '}
                  <span className="tk-str">
                    &quot;meta-llama/Meta-Llama-3-8B&quot;
                  </span>
                </div>
                <div className="whitespace-pre">
                  <span className="tk-kw">with</span>{' '}
                  <span className="tk-fn">VajraStreamer</span>(config){' '}
                  <span className="tk-kw">as</span> streamer:
                </div>
                <div className="whitespace-pre">
                  {'    '}tensors = streamer.<span className="tk-fn">load</span>
                  (url)
                </div>
                <div className="whitespace-pre">
                  {'    '}
                  <span className="tk-fn">print</span>(
                  <span className="tk-str">
                    f&quot;Loaded {'{len(tensors)}'} tensors&quot;
                  </span>
                  )
                </div>
                <div className="whitespace-pre">
                  {'    '}
                  <span className="tk-fn">print</span>(tensors[
                  <span className="tk-str">
                    &quot;model.layers.0.self_attn.q_proj.weight&quot;
                  </span>
                  ].shape)
                </div>
                <div className="whitespace-pre">
                  <span className="caret" />
                </div>
              </div>
              <CopyButton text={USAGE_CODE} label="Copy code snippet" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
