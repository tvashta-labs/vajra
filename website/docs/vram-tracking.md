---
sidebar_position: 8
sidebar_label: VRAM Tracking
---

# VRAM Tracking

The native library can log CUDA memory allocation activity to a CSV file.

It intercepts:

- `cudaMalloc`
- `cudaFree`
- `cuMemAlloc`
- `cuMemFree`

Tracking is enabled by default when the native library is loaded.

## Log File Location

Set `VIBE_VRAM_LOG` to choose the output path:

```bash
VIBE_VRAM_LOG=/tmp/my_run.csv python your_script.py
```

If `VIBE_VRAM_LOG` is not set, the default path is:

```text
/tmp/vibe_vram_allocs.csv
```

The CSV columns are:

| Column | Meaning |
|---|---|
| `TIMESTAMP` | Unix timestamp for the allocation event. |
| `API` | CUDA API that was intercepted. |
| `PTR` | Device pointer. |
| `SIZE` | Allocation size in bytes. Frees use `0`. |
| `BACKTRACE` | Native call stack frames separated by semicolons. |

## Pause and Resume Tracking

Use the static helpers on `VibeStreamer`:

```python
from vibe_streamer import VibeStreamer

VibeStreamer.pause_vram_tracking()
# Allocations here are not logged.
VibeStreamer.resume_vram_tracking()
```

This is useful when you want to exclude known allocations from the log.

## What Could Go Wrong

The tracker hooks CUDA allocation functions at the native library level. If another library also hooks or wraps CUDA allocation APIs, logs can be incomplete or harder to interpret.

The log records allocation activity, not high-level ownership. Use the `BACKTRACE` column to infer whether an allocation came from model weights, temporary buffers, or other CUDA work.
