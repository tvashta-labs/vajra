---
sidebar_position: 1
sidebar_label: Quick Start
---

# Quick Start

This is the smallest normal usage pattern:

```python
from vajra import VajraStreamer, StreamConfig

config = StreamConfig(
    auth_token="hf_...",   # Required for gated Hugging Face models.
    chunk_size_mb=64,
    chunk_workers=16,
    gpu_workers=3,
    disable_cache=False,
    log_level=4,           # 4 = info
)

with VajraStreamer(config) as streamer:
    tensors = streamer.load("Qwen/Qwen2.5-0.5B-Instruct")

    for name, tensor in tensors.items():
        print(name, tensor.shape, tensor.dtype, tensor.device)
```

## What This Does

`streamer.load(...)` resolves the Hugging Face repo, finds `.safetensors` files, streams them through the native library, allocates GPU memory, and returns a dictionary of tensor name to CUDA tensor.

## Keep Tensor Work Inside `with`

The returned tensors point at GPU memory owned by the native library. When the `with` block exits, `VajraStreamer` frees that memory.

```python
with VajraStreamer(config) as streamer:
    tensors = streamer.load("owner/model")
    first_tensor = next(iter(tensors.values()))
    print(first_tensor.shape)
```

If you need a tensor after the `with` block, clone it while the block is still active:

```python
with VajraStreamer(config) as streamer:
    tensors = streamer.load("owner/model")
    copied = next(iter(tensors.values())).clone()

# `copied` owns separate memory now.
```

For the full memory rule, read [Tensors and Lifetime](./tensors-and-lifetime.md).
