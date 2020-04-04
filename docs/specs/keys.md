# Keys

| Key        | Description                                       |
| ---------- | ------------------------------------------------- |
| `EdX25519` | EdX25519 (Ed25519/X25519) signing/encryption key. |
| `X25519`   | X25519 encryption key.                            |

## EdX25519

This key can be used for both signing and encryption.

Ed25519 is an [elliptic curve signing algorithm](https://tools.ietf.org/html/rfc8032) using EdDSA and Curve25519.
An Ed25519 key can be [converted to an X25519 encryption key](https://blog.filippo.io/using-ed25519-keys-for-encryption/),
and so we call this an EdX25519 key.

The key identifier has the prefix `kex`.

Godoc: [keys.EdX25519Key](https://pkg.go.dev/github.com/keys-pub/keys?tab=doc#EdX25519Key)

```go
alice := keys.GenerateEdX25519Key()
fmt.Printf("%s\n", alice.ID())
```

```shell
> keys generate -t edx25519
kex1m8nd23chn6jg6c2r0rf5xhlawp2g6qwvkj5zc9val5f76enlfszstqerxm
```

## X25519

X25519 is an elliptic curve Diffie-Hellman key exchange using Curve25519.
X25519 keys only provide public key authenticated encryption.

The key identifier has the prefix `kbx`.

Godoc: [keys.X25519Key](https://pkg.go.dev/github.com/keys-pub/keys?tab=doc#EdX25519Key)

```go
bob := keys.GenerateX25519Key()
fmt.Printf("%s\n", bob.ID())
```

```shell
> keys generate -t x25519
kbx18e99hurn8fly3lls0v53jn9qzduey87l4vya0amjylvpvmfhkdaqtfc2v7
```
