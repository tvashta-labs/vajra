---
sidebar_position: 2
sidebar_label: Overview
---

# vibe-streamer Python Library

`vibe-streamer` streams Hugging Face `.safetensors` model weights directly into GPU memory and returns them as PyTorch tensors.

The tensors are **zero-copy**: zero-copy means PyTorch receives a view of GPU memory already allocated by the native library instead of copying tensor bytes into a new allocation. That matters because model weights are large, and an extra copy can double peak VRAM usage.

The Python package is intentionally small. It is a ctypes binding over `libvibestreamer`, a native D/vibe.d library that owns network I/O, chunked downloading, Hugging Face resolution, and GPU memory management.

## What You Can Do

- Install the Python package and native library.
- Load a Hugging Face model repo into GPU memory.
- Use the returned values as CUDA-backed PyTorch tensors.
- Tune chunking, worker counts, cache behavior, and log verbosity.
- Pause and resume native VRAM allocation logging.

## Main API

```python
from vibe_streamer import VibeStreamer, StreamConfig
```

`StreamConfig` stores load settings. `VibeStreamer` performs the load and owns the native memory lifetime.

The normal workflow is:

```python
from vibe_streamer import VibeStreamer, StreamConfig

config = StreamConfig()

with VibeStreamer(config) as streamer:
    tensors = streamer.load("owner/model")
    # Use tensors here.
```

## Important Constraints

`VibeStreamer` is a **context manager**: a context manager is an object used with `with ...` so Python reliably runs cleanup when the block exits. Keep tensor use inside the `with` block because the native library frees the backing VRAM when the block exits.

`load()` is designed for Hugging Face model repos. If you pass a full Hugging Face URL, the native resolver extracts the repo id and loads every `.safetensors` file in that repo. It does not stream only the single shard named in the URL.

## Next Steps

- Start with [Installation](./installation.md).
- Then run the [Quick Start](./quick-start.md).
- Before building on top of returned tensors, read [Tensors and Lifetime](./tensors-and-lifetime.md).
