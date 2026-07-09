---
sidebar_position: 1
sidebar_label: Quick Start
---

# Quick Start

```python
from vajra import VajraStreamer, StreamConfig

config = StreamConfig(
    auth_token="hf_...",   # Required for gated Hugging Face models.
)

with VajraStreamer(config) as streamer:
    tensors = streamer.load("Qwen/Qwen2.5-0.5B-Instruct")

    for name, tensor in tensors.items():
        print(name, tensor.shape, tensor.dtype, tensor.device)
```

`load()` resolves the Hugging Face repo, streams its `.safetensors` files into GPU memory, and returns a dictionary of tensor name to CUDA tensor. The keys come from `.safetensors` metadata. The values point at GPU memory owned by the native library.

## Tensor Lifetime

Use those tensors only inside the `with` block. When the block exits, the native library frees the backing VRAM, and any remaining references become invalid.

If you need a tensor after the block, clone it first:

```python
with VajraStreamer(config) as streamer:
    tensors = streamer.load("owner/model")
    copied = tensors["model.embed_tokens.weight"].clone()

# `copied` owns separate memory now.
```

For chunking, workers, cache, and logging, see [Configuration](./configuration.md).
