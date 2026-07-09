---
sidebar_position: 2
sidebar_label: Overview
---

# Vajra Python Library

`vajra-streamer` streams Hugging Face `.safetensors` model weights directly into GPU memory and returns them as PyTorch tensors.

The tensors are **zero-copy**: PyTorch views GPU memory already allocated by the native library instead of copying tensor bytes into a new allocation. That keeps peak VRAM lower for large models.

## Main API

```python
from vajra import VajraStreamer, StreamConfig

config = StreamConfig()

with VajraStreamer(config) as streamer:
    tensors = streamer.load("owner/model")
    # Use tensors here.
```

`StreamConfig` stores load settings. `VajraStreamer` performs the load and owns the native memory lifetime. Keep tensor use inside the `with` block; see [Quick Start](./quick-start.md).

`load()` accepts a Hugging Face repo id or URL. A URL still loads every `.safetensors` file in the repo, not just one shard. See [Model Inputs](./model-inputs.md).

## Next Steps

- [Installation](./installation.md)
- [Quick Start](./quick-start.md)
