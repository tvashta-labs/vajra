---
sidebar_position: 7
sidebar_label: Errors and Troubleshooting
---

# Errors and Troubleshooting

`VajraStreamer.load()` maps native return codes to Python exceptions.

| Exception | Meaning |
|---|---|
| `ConnectionError` | Network or model resolution failed. |
| `MemoryError` | Native memory or synchronization failure, usually CUDA OOM. |
| `RuntimeError` | Any other non-zero native error code. |

## Import Fails With `OSError`

What this usually means: Python found the `vajra` package, but could not load `libvajra`.

Check that the native library exists in one of these locations:

```text
python/vajra/libvajra.so
python/libvajra.so
libvajra.so
```

On macOS, use `libvajra.dylib`.

## `ConnectionError`

Common causes:

- The repo id is wrong.
- The repo does not contain `.safetensors` files.
- The model is gated and `auth_token` is missing or invalid.
- The URL is not hosted on `huggingface.co`.
- The Hugging Face model API is unreachable.

What you might expect: if you pass a full URL, the loader streams that exact file.

The tricky part: the native resolver uses the URL only to recover `owner/model`, then asks Hugging Face for all `.safetensors` files in that repo. If that API request fails, `load()` raises `ConnectionError`.

## `MemoryError`

`MemoryError` usually means the model's combined `.safetensors` payload does not fit into available VRAM, or the native layer hit a fatal CUDA synchronization or allocation problem.

Try:

- Loading a smaller model.
- Freeing other CUDA allocations before calling `load()`.
- Reducing competing GPU workloads.
- Restarting the Python process if previous CUDA allocations are still held.

## Process Exit Looks Abrupt

Importing `vajra` registers `os._exit(0)` as an `atexit` handler. This bypasses normal Python shutdown to avoid a native library shutdown segfault.

The practical consequence: shutdown callbacks, some `atexit` handlers, and cleanup code after the interpreter begins exiting may not run normally. Put important cleanup before the end of the script, not in process-shutdown hooks.
