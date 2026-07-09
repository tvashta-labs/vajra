---
sidebar_position: 5
sidebar_label: Configuration
---

# Configuration

`StreamConfig` controls authentication, chunking, worker counts, cache behavior, and logging.

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
| `chunk_size_mb` | `int` | `64` | Size of each download chunk in megabytes. |
| `chunk_workers` | `int` | `16` | Number of parallel download workers. |
| `gpu_workers` | `int` | `3` | Number of workers dedicated to GPU copy work. |
| `disable_cache` | `bool` | `False` | When `True`, disables the on-disk cache. Useful for fresh-load benchmarks. |
| `log_level` | `int` | `4` | Log verbosity. Lower is more verbose. |

## Log Levels

| Value | Level |
|---|---|
| `4` | info |
| `3` | diagnostic |
| `2` | debug |
| `1` | debugV |
| `0` | trace |
