---
sidebar_position: 6
sidebar_label: Tensors and Lifetime
---

# Tensors and Lifetime

`load()` normally returns a dictionary of tensor names to CUDA-backed PyTorch tensors:

```python
tensors = streamer.load("owner/model")

for name, tensor in tensors.items():
    print(name, tensor.shape, tensor.dtype, tensor.device)
```

The keys come from the `.safetensors` metadata. The values point at GPU memory allocated and owned by the native library.

## Zero-Copy Tensors

The returned tensors are **zero-copy**: zero-copy means PyTorch views memory that already exists instead of copying the tensor bytes into a new allocation.

This keeps peak memory lower, but it also means tensor lifetime depends on the native allocation.

## The Lifetime Rule

Use returned tensors inside the `with VibeStreamer(...)` block.

```python
with VibeStreamer(config) as streamer:
    tensors = streamer.load("owner/model")
    tensor = tensors["model.embed_tokens.weight"]
    print(tensor.shape)
```

When the `with` block exits, the native `free_model_memory` function frees the VRAM arenas and CPU metadata. Any tensor still pointing at that memory becomes invalid.

```python
# Wrong: tensor memory is freed after the with block exits.
with VibeStreamer(config) as streamer:
    tensors = streamer.load("owner/model")

tensor = tensors["model.embed_tokens.weight"]  # dangling pointer
```

If you need to keep a tensor after the block, copy it before leaving:

```python
with VibeStreamer(config) as streamer:
    tensors = streamer.load("owner/model")
    copied = tensors["model.embed_tokens.weight"].clone()

# `copied` owns separate memory now.
```

## BF16 Tensors

`bfloat16` is not represented by the standard CUDA array interface type strings. The library handles BF16 by first treating the memory as `int16`, then viewing it as `torch.bfloat16`:

```python
i16_tensor = torch.as_tensor(vibe_tensor, device="cuda")
bf16_tensor = i16_tensor.view(torch.bfloat16)
```

This is still zero-copy. The important detail is that BF16 takes a special path compared with ordinary float or integer tensors.

## Raw `VibeGPUTensor` Fallback

If PyTorch conversion fails for a tensor, the dictionary may contain a raw `VibeGPUTensor` instead of a `torch.Tensor`.

```python
for name, tensor in tensors.items():
    if hasattr(tensor, "dtype"):
        print(name, tensor.dtype, tensor.device)
    else:
        print(name, tensor.typestr, tensor.original_dtype)
```

`VibeGPUTensor` is not intended as the main public API. Treat it as a signal that dtype conversion failed and check your PyTorch/CUDA setup.
