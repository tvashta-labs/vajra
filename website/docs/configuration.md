---
sidebar_position: 5
sidebar_label: Configuration
---

# Configuration

`StreamConfig` controls authentication, chunking, worker counts, cache behavior, and native logging.

```python
from vajra import StreamConfig

config = StreamConfig(
    auth_token="",
    chunk_size_mb=64,
    chunk_workers=16,
    gpu_workers=3,
    disable_cache=False,
    log_level=4,
)
```

## Fields

| Field | Type | Default | Description |
|---|---|---|---|
| `auth_token` | `str` | `""` | Hugging Face API token. Required for gated or private repos. |
| `chunk_size_mb` | `int` | `64` | Size of each download chunk in megabytes. Converted to bytes before native code receives it. |
| `chunk_workers` | `int` | `16` | Number of parallel download workers. |
| `gpu_workers` | `int` | `3` | Number of workers dedicated to GPU copy work. |
| `disable_cache` | `bool` | `False` | When `True`, disables the native on-disk cache. |
| `log_level` | `int` | `4` | Native log verbosity. |

## Chunk Size

`chunk_size_mb` is converted before crossing into native code:

```python
chunk_size = chunk_size_mb * 1024 * 1024
```

Larger chunks can reduce per-request overhead, but they also increase the amount of data handled per chunk. Smaller chunks may be easier to schedule but can increase coordination overhead.

## Worker Counts

The native thread pool size is derived from:

```text
chunk_workers + gpu_workers + 2
```

`chunk_workers` controls download parallelism. `gpu_workers` controls GPU copy work. Raising both can improve throughput, but too much parallelism can create network pressure, scheduling overhead, or higher peak memory pressure.

## Cache Behavior

`disable_cache=False` keeps native caching enabled.

`disable_cache=True` skips the native cache. This is useful when benchmarking fresh loads or when you do not want downloaded chunks persisted.

## Log Levels

| Value | Level |
|---|---|
| `4` | info |
| `3` | diagnostic |
| `2` | debug |
| `1` | debugV |
| `0` | trace |

Lower values are more verbose.

If you need to understand why a full Hugging Face URL does not restrict loading to one shard, read [Model Inputs](./model-inputs.md).
