# Keyring

The following example describes how to:

- Initialize and setup/unlock a Keyring
- Save a secret to the keyring
- Get a secret from the keyring
- List keyring items

```go
kr, err := keyring.NewKeyring("AppName", keyring.System())
if err != nil {
    log.Fatal(err)
}

// Unlock keyring (on first unlock, sets the password)
if err := keyring.UnlockWithPassword(kr, "mypassword"); err != nil {
    log.Fatal(err)
}

// Save secret
secret := keyring.NewSecret([]byte("mysecret"))
item := keyring.NewItem("id1", secret, "")

if err := kr.Set(item); err != nil {
    log.Fatal(err)
}

// Get secret
out, err := kr.Get("id1")
if err != nil {
    log.Fatal(err)
}
fmt.Printf("secret: %s\n", string(out.SecretData()))

// List secrets
items, err := kr.List(nil)
if err != nil {
    log.Fatal(err)
}
for _, item := range items {
    fmt.Printf("%s: %v\n", item.ID, string(item.SecretData()))
}
```
