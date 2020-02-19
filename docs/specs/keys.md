# Keys

| Key        | Description                                       |
| ---------- | ------------------------------------------------- |
| `EdX25519` | EdX25519 (Ed25519/X25519) signing/encryption key. |
| `X25519`   | X25519 encryption key.                            |

ECC cryptography uses smaller keys and signatures than RSA for the same level of security and provides fast key generation, signatures and key exchange.
The key size for ECC keys using Curve25519 is 256 bits.

## EdX25519

Ed25519 is an [elliptic curve signing algorithm](https://tools.ietf.org/html/rfc8032) using EdDSA and Curve25519.
An Ed25519 can be [converted to an X25519 encryption key](https://blog.filippo.io/using-ed25519-keys-for-encryption/),
and so we call this an EdX25519 key.

## X25519

X25519 is an elliptic curve Diffie-Hellman key exchange using Curve25519.
X25519 keys only provides public key authenticated encryption.
