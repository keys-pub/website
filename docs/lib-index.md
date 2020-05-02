# Library

::: warning
This documentation is in progress.
:::

keys.pub provides Go packages to:

- Generate keys and securely store them in a keyring.
- Encrypt, decrypt, sign and verify using Saltpack.
- Create and verify sigchains/statements.
- Perform a Noise handshake.
- and more.

## Examples

- [Keyring](/docs/lib/keyring.md): Setup/unlock a Keyring.
- [Encrypt (Saltpack)](/docs/lib/saltpack.md#encrypt): Generate a key, and encrypt to recipients using Saltpack.
- [Decrypt (Saltpack)](/docs/lib/saltpack.md#decrypt): Import a key, and decrypt a Saltpack armored message.
- [Sign (Saltpack)](/docs/lib/saltpack.md#sign): Create a Saltpack signed message.
- [Verify (Saltpack)](/docs/lib/saltpack.md#verify): Verify a Saltpack signed message.
- [Noise](/docs/lib/noise.md): Complete a Noise protocol handshake using two X25519 keys and Encrypt/Decrypt using the Cipher.

## Packages

- [github.com/keys-pub/keys](https://github.com/keys-pub/keys): Generate keys (Ed25519/X25519) and sigchains.
- [github.com/keys-pub/keys/keyring](https://github.com/keys-pub/keys/tree/master/keyring): Securely store secrets on macOS, Windows and Linux.
- [github.com/keys-pub/keys/saltpack](https://github.com/keys-pub/keys/tree/master/saltpack): Encrypt/Decrypt/Sign/Verify using Saltpack.
- [github.com/keys-pub/keys/noise](https://github.com/keys-pub/keys/tree/master/noise): Noise protocol integration.
- [github.com/keys-pub/keysd/http/client](https://github.com/keys-pub/keysd/tree/master/http/client): Client REST API for keys.pub.
- [github.com/keys-pub/keysd/db](https://github.com/keys-pub/keysd/tree/master/db): Secure (leveldb) database.
