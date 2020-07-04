# Library

::: warning
This documentation is in progress.
:::

keys.pub provides Go packages to:

- Encrypt, decrypt, sign and verify using Saltpack.
- Create and verify sigchains/statements.
- Perform a Noise handshake.
- and more.

## Examples

- [Saltpack](/docs/lib/saltpack.md): Encrypt, Decrypt, Sign, Verify using Saltpack.
- [Noise](/docs/lib/noise.md): Complete a Noise protocol handshake using two X25519 keys and Encrypt/Decrypt using the Cipher.
- [User](/docs/lib/user.md): Verify a User in a Sigchain

## Packages

- [github.com/keys-pub/keys](https://github.com/keys-pub/keys): Generate keys (Ed25519/X25519) and sigchains.
- [github.com/keys-pub/keys/keyring](https://github.com/keys-pub/keys/tree/master/keyring): Securely store secrets on macOS, Windows and Linux.
- [github.com/keys-pub/keys/saltpack](https://github.com/keys-pub/keys/tree/master/saltpack): Encrypt/Decrypt/Sign/Verify using Saltpack.
- [github.com/keys-pub/keys/noise](https://github.com/keys-pub/keys/tree/master/noise): Noise protocol integration.
- [github.com/keys-pub/keys-ext/http/client](https://github.com/keys-pub/keys-ext/tree/master/http/client): Client REST API for keys.pub.
- [github.com/keys-pub/keys-ext/vault](https://github.com/keys-pub/keys-ext/tree/master/vault): Vault securely stores keys and secrets.
