# Vault

::: warning
This documentation is in progress.
:::

A vault is an append only encrypted log used to store secrets.

The format for the vault is designed to track changes and allow for syncing.

## Master Key

Vault items are encrypted with a master key (MK) which is encrypted with key encryption keys (KEK's).[^1]
KEK's are created from passwords (Argon2id), hardware security keys (FIDO2) or paper key backups.

## KEK's

### Passwords

When generating a KEK from a password, we use the Argon2id KDF with the following parameters:

```go
key := argon2.IDKey(password, salt, 1, 64*1024, 4, 32)
```

### FIDO2

_This documentation is in progress..._

## API Key

If a vault is synced to the server, data is also encrypted with a vault API ([EdX25519](/docs/specs/keys.md)) key. This key is also used to sign (and authorize) requests to the server (via the [Vault API](/docs/restapi/vault.md)).
This API key is derived from the master key (using HKDF with a random 32 byte salt).

[^1]: Vault configuration required to unlock the vault, such as salt values, are not encrypted.
