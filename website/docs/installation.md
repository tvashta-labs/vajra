---
sidebar_position: 3
sidebar_label: Installation
---

# Installation

The Python package is named `vajra-streamer`, but the import package is `vajra`.

```bash
pip install vajra-streamer
```

## Requirements

| Requirement | Value |
|---|---|
| Python | `>=3.8` |
| PyTorch | `torch>=2.0.0` |
| CUDA | Required |
| Native library | `libvajra.so` |

The package returns CUDA tensors, so a CPU-only PyTorch install is not enough.

## Import Check

```python
from vajra import VajraStreamer, StreamConfig
```

If this import raises `OSError`, Python found the `vajra` package but could not load the native `libvajra` library. See [Errors and Troubleshooting](./errors-and-troubleshooting.md) to resolve it.
