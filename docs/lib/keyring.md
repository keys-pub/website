# Keyring

The following example describes how to:

- Initialize and setup/unlock a Keyring
- Save a secret to the keyring
- Get a secret from the keyring
- List keyring items

```go
// Initialize Keyring.
// You can use keyring.System(), keyring.SystemOrFS(), keyring.FS(dir), or keyring.Mem().
kr, err := keyring.New("MyApp", keyring.System())
if err != nil {
    log.Fatal(err)
}

// Unlock with password.
if err := kr.UnlockWithPassword("mypassword"); err != nil {
    log.Fatal(err)
}

// Create item.
item := keyring.NewItem("id1", []byte("mysecret"), "", time.Now())
if err := kr.Create(item); err != nil {
    log.Fatal(err)
}

// Get item.
out, err := kr.Get("id1")
if err != nil {
    log.Fatal(err)
}
fmt.Printf("secret: %s\n", string(out.SecretData()))

// List items.
items, err := kr.List(nil)
if err != nil {
    log.Fatal(err)
}
for _, item := range items {
    fmt.Printf("%s: %v\n", item.ID, string(item.SecretData()))
}
```
