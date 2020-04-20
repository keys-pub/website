# Keyring

The following example describes how to:

- Initialize and setup/unlock a Keyring
- Save a secret to the keyring
- Get a secret from the keyring
- List keyring items

```go
kr, err := keyring.NewKeyring("MyApp", keyring.System())
if err != nil {
    log.Fatal(err)
}

// Setup password
if err := keyring.SetupWithPassword(kr, "keys.pub", "mypassword"); err != nil {
    log.Fatal(err)
}

// Save secret
item := keyring.NewItem("id1", []byte("mysecret"), "", time.Now())
if err := kr.Create(item); err != nil {
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
