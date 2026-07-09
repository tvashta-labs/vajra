---
sidebar_position: 4
sidebar_label: Model Inputs
---

# Model Inputs

`VajraStreamer.load()` accepts either a Hugging Face repo id or a `huggingface.co` URL.

```python
# Repo id. This is the clearest form.
tensors = streamer.load("meta-llama/Meta-Llama-3-8B")

# Full Hugging Face URL — still loads the whole repo.
tensors = streamer.load(
    "https://huggingface.co/meta-llama/Meta-Llama-3-8B/resolve/main/model-00001-of-00004.safetensors"
)
```

A URL is only used to recover the repo id (`owner/model`). The loader then finds every `.safetensors` file in that repo and loads all of them. The path after `/resolve/main/` does not restrict loading to one shard.

Only `huggingface.co` URLs are supported. Other hosts raise `ConnectionError`.

## Gated Models

For gated or private repos, pass a Hugging Face token:

```python
config = StreamConfig(auth_token="hf_...")

with VajraStreamer(config) as streamer:
    tensors = streamer.load("meta-llama/Meta-Llama-3-8B")
```

If the token is missing or invalid, resolution can fail with `ConnectionError`.
