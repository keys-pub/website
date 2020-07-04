# Saltpack

::: warning
This documentation is in progress.
:::

Encryption by default uses the [Saltpack binary encryption format](https://saltpack.org/encryption-format-v2).

This format uses NaCl's box and secretbox constructions and provides authenticity, repudability and anonymity.
See [saltpack.org](https://saltpack.org) for more details.

This [github.com/keys-pub/keys/saltpack](https://github.com/keys-pub/keys/tree/master/saltpack) package allows you to encrypt/decrypt and sign/verify using Saltpack and
EdX25519 keys.

## Examples

- [Encrypt + Decrypt](https://github.com/keys-pub/keys/blob/master/saltpack/encrypt_examples_test.go)
- [Sign + Verify](https://github.com/keys-pub/keys/blob/master/saltpack/sign_examples_test.go)
