---
sidebar_position: 4
sidebar_label: Model Inputs
---

# Model Inputs

`VibeStreamer.load()` accepts either a Hugging Face repo id or a `huggingface.co` URL.

```python
# Repo id. This is the clearest form.
tensors = streamer.load("meta-llama/Meta-Llama-3-8B")

# Full Hugging Face URL.
tensors = streamer.load(
    "https://huggingface.co/meta-llama/Meta-Llama-3-8B/resolve/main/model-00001-of-00004.safetensors"
)
```

## Repo ID Is the Real Input

What you might expect: passing a URL to a specific shard streams just that shard.

The tricky part: the native resolver extracts only the repo id (`owner/model`) from a Hugging Face URL. Then it queries the Hugging Face model API, finds every `.safetensors` file in that repo, and loads all of them.

So these two inputs target the same model repo:

```python
streamer.load("meta-llama/Meta-Llama-3-8B")

streamer.load(
    "https://huggingface.co/meta-llama/Meta-Llama-3-8B/resolve/main/model-00001-of-00004.safetensors"
)
```

The path after `/resolve/main/` is not used to restrict loading to one file.

## Supported Hosts

Only `huggingface.co` URLs are supported. Other HTTP hosts are rejected during model resolution and surface as `ConnectionError` in Python.

## Gated Models

For gated or private repos, pass a Hugging Face token through `StreamConfig.auth_token`:

```python
config = StreamConfig(auth_token="hf_...")

with VibeStreamer(config) as streamer:
    tensors = streamer.load("meta-llama/Meta-Llama-3-8B")
```

If the token is missing or invalid, resolution can fail with `ConnectionError`.
