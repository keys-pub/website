# Auth

In order to use the keysd local service, you need to authenticate using `keys auth` or the `AuthSetup` or `AuthUnlock` rpc.

The password you specify is never stored on disk and is only used to authenticate and generate an auth token.
Auth tokens are stored in memory by the keysd service, and are only usable until the service exits or `keys lock` or `Lock` rpc is called.

In addition to authentication, we use this password to derive a key which encrypts [keyring](keyring.md) items.

We use the Argon2id KDF with this password and a salt value with the following parameters:

```go
key := argon2.IDKey(password, salt, 1, 64*1024, 4, 32)
```

If the user forgets their password, they will not be able to recover their account.
