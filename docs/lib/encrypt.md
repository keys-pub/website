# Encrypt

The following example describes how to:

- Initialize and setup/unlock a Keyring
- Create a Keystore
- Configure Saltpack
- Generate an EdX25519 key
- Encrypt to recipients using Saltpack

```go
import (
    "github.com/keys-pub/keys"
    "github.com/keys-pub/keys/keyring"
    "github.com/keys-pub/keys/saltpack"
)

...

// Create a Keyring.
kr, err := keyring.NewKeyring("MyApp")
// Setup/unlock the Keyring using a password.
if err := keyring.UnlockWithPassword(kr, "alicepassword"); err != nil {
    log.Fatal(err)
}
// Alternatively, you can use an in memory (ephemeral) Keyring for testing:
// kr, err := keyring.NewMem()

// Create a Keystore (backed by the Keyring).
ks := keys.NewKeystore(kr)

// Configure saltpack format.
sp := saltpack.NewSaltpack(ks)
sp.SetArmored(true)

// Create an EdX25519 key and save it to the Keystore.
alice := keys.GenerateEdX25519Key()
if err := ks.SaveEdX25519Key(alice); err != nil {
    log.Fatal(err)
}

bobID := keys.ID("kex1yy7amjzd5ld3k0uphvyetlz2vd8yy3fky64dut9jdf9qh852f0nsxjgv0m")
message := []byte("hi bob")

// Encrypt using Saltpack from alice to bob (include alice as a recipient too).
encrypted, err := sp.Encrypt(message, alice.X25519Key(), bobID, alice.ID())
if err != nil {
    log.Fatal(err)
}

fmt.Printf("Encrypted: %s\n", string(encrypted))

```
