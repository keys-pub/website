# Vault

::: warning
This documentation is in progress.
:::

A vault is an append only encrypted log used to store secrets.

The format for the vault is designed to track changes and (optionally) for syncing to a remote server.

## Master Key

Vault items are encrypted[^1] with a master key (32 byte secret key) which can be unlocked by provisioned passwords or hardware security keys.

## API Key

If a vault is synced to the server, data is also encrypted with a vault API (EdX25519) key. This key is also used to sign (and authorize) requests to the server (via the [Vault API](/docs/restapi/vault.md)).
This API key is derived from the master key (using HKDF with a random 32 byte salt).

[^1]: Provisioning info required to unlock the vault, such as salt values, are **NOT** encrypted.
