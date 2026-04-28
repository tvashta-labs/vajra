---
sidebar_position: 3
sidebar_label: Installation
---

# Installation

The Python package is named `vibe-streamer`, but the import name is `vibe_streamer`.

```bash
pip install vibe-streamer
```

## Requirements

| Requirement | Value |
|---|---|
| Python | `>=3.8` |
| PyTorch | `torch>=2.0.0` |
| CUDA | Required |
| Native library | `libvibestreamer.so` on Linux or `libvibestreamer.dylib` on macOS |

The package returns CUDA tensors, so a CPU-only PyTorch install is not enough.

## Native Library Placement

The Python package loads `libvibestreamer` with `ctypes`. When installed from a wheel, the native library should be bundled inside the `vibe_streamer/` package directory.

For local development, place the compiled library in one of these locations:

```text
python/vibe_streamer/libvibestreamer.so
python/libvibestreamer.so
libvibestreamer.so
```

On macOS, use `libvibestreamer.dylib` instead of `libvibestreamer.so`.

## Local Editable Install

From the repository root:

```bash
cp libvibestreamer.so python/vibe_streamer/
cd python
pip install -e .
```

## Import Check

```python
from vibe_streamer import VibeStreamer, StreamConfig
```

If this import raises `OSError`, Python found the package but could not load the native library. Check that `libvibestreamer.so` or `libvibestreamer.dylib` is present in one of the search locations above.
