# Key Identifiers

Key identifiers (`kid`) use the [bech32](https://en.bitcoin.it/wiki/BIP_0173) format.

The bech32 format has a prefix, separator and data part.

The prefix describes the type of key and the data part is the public key bytes encoded as alphanumeric characters excluding "1", "b", "i", and "o".

| Key        | Prefix | Example                                                          |
| ---------- | ------ | ---------------------------------------------------------------- |
| `EdX25519` | `kex`  | `kex1ts0qw8fwkvle2f2xsqumetmr9ev5ppx22rl5hnycen68sanjzl7qnta629` |
| `X25519`   | `kbx`  | `kbx15z2g8pprdf4a20ea3as03fv54u0eseewlmv0ktu0ezwzakm2x3ss28selu` |
