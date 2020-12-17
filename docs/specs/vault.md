# Vault

::: warning
This feature is experimental and this documentation is in progress.
:::

A vault is an encrypted database used to securely store secrets.
The format for the vault is designed to preserve history and allow for backup and syncing.

The vault is saved locally on clients in a leveldb database (Vault DB).
Syncing vaults to a server is entirely optional, and if enabled, uses the [Vault Web API](/docs/webapi/vault.md).

The [github.com/keys-pub/keys-ext/vault](https://pkg.go.dev/github.com/keys-pub/keys-ext/vault) package implements this spec.

## Vault DB

The vault database is a leveldb database where entries are encrypted with a (master) key.

### Provisioning Auth

Provisioning auth, such as creating a password or adding a FIDO2 hardware key or paper key backup, creates a key encryption key (or KEK) which encrypts this master key.
This allows auth to be provisioned (added) or removed without having to rekey items.
(Some vault metadata required for provisioning, such as salt values, are not encrypted in the local database.)

## Vault Web API

If a vault is synced to the server, data is **also** encrypted with a Vault API key and saved to the server using the [Vault Web API](/docs/webapi/vault.md).
This API key is a ([EdX25519](/docs/specs/keys.md)) key derived from the master key (using HKDF with a random 32 byte salt).

### Syncing

When syncing to the server, we push unsaved changes and then pull all changes from the current index.

1. Push unsaved changes are saved via `POST /vault/:kid`.
2. Pull changes using `GET /vault/:kid` from the previous index (or 0 if never synced). This includes the changes we just pushed.
3. Save the new index.

Changes are encrypted with the vault API key.
The server returns data in the order it was received and includes an index and timestamp for each change.

### Connecting to a Vault

If connecting another device with the vault, an authenticated client can generate a "vault auth phrase".
This encrypts the vault API key and salt with a KEK and shares it via the [Share API](/docs/webapi/share.md) with an expiration of 5 minutes or first access, whichever happens first.
The auth phrase is the BIP39 encoded (EdX25519) private seed of this KEK.

### Hosting your own Vault

In the future, users will be able host their own vault data instead of using keys.pub.
The API server is not yet configurable on the clients, so this feature is not available yet.

### Deleting a Vault

Vaults can be "unsynced" from the server, which deletes all data from the server and returns the local database to an "unsynced" state.
If other clients were connected to the vault, they will stop syncing.
