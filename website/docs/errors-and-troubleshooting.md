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

Python found the `vajra` package, but could not load `libvajra`. Confirm the native library is installed and discoverable as `libvajra.so`.

## `ConnectionError`

Common causes:

- The repo id is wrong.
- The repo does not contain `.safetensors` files.
- The model is gated and `auth_token` is missing or invalid.
- The URL is not hosted on `huggingface.co`.
- The Hugging Face model API is unreachable.

For how repo ids and URLs are resolved, see [Model Inputs](./model-inputs.md).

## `MemoryError`

Usually the model's combined `.safetensors` payload does not fit in available VRAM, or CUDA allocation failed.

Try:

- Loading a smaller model.
- Freeing other CUDA allocations before calling `load()`.
- Reducing competing GPU workloads.
- Restarting the Python process if previous CUDA allocations are still held.

## Process Exit Looks Abrupt

Process shutdown may skip normal Python cleanup. Shutdown callbacks and some `atexit` handlers may not run. Put important cleanup before the end of the script, not in process-shutdown hooks.
