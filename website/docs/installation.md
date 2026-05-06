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
| Native library | `libvajra.so` on Linux or `libvajra.dylib` on macOS |

The package returns CUDA tensors, so a CPU-only PyTorch install is not enough.

## Native Library Placement

The Python package loads `libvajra` with `ctypes`. When installed from a wheel, the native library should be bundled inside the `vajra/` package directory.

For local development, place the compiled library in one of these locations:

```text
python/vajra/libvajra.so
python/libvajra.so
libvajra.so
```

On macOS, use `libvajra.dylib` instead of `libvajra.so`.

## Local Editable Install

From the repository root:

```bash
cp libvajra.so python/vajra/
cd python
pip install -e .
```

## Import Check

```python
from vajra import VajraStreamer, StreamConfig
```

If this import raises `OSError`, Python found the package but could not load the native library. Check that `libvajra.so` or `libvajra.dylib` is present in one of the search locations above.
