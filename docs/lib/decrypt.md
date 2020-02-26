# Decrypt

The following example decrypts the message from the [encrypt] example:

```go
import (
    "github.com/keys-pub/keys"
    "github.com/keys-pub/keys/keyring"
    "github.com/keys-pub/keys/saltpack"
)

...

// Message from Alice
aliceID := keys.ID("kex1vrpxw9rqmf49kygc7ujjrdlx8lkzaarjc3s24j73xlqxhwvsyx2sw06r82")
encrypted := `BEGIN SALTPACK ENCRYPTED MESSAGE.
kcJn5brvybfNjz6 D5ll2Nk0YusOJBf 9x1CB6V3o7cdMOV ZPenXvEVhLpMBj0 8rJiM2GJTyXbhDn
cGIoczvWtRoxL5r 3EIPrfVqpwhLDke LfCV6YykdYdGwY1 lUfrzkOIUGdeURb HDSwgrTSrcexwj3
ix9Mw1FVXQGBwBV yil8lLyD1q0VFGv KmgJYyARppqQEIF HgAsZq0BJL6Dosz WGrFalmG90QA6PO
avDlwRXMDbjKFvE wQtaBDKXVSBaM9k 0Xu0CfdGUkEICbN vZNV67cGqEz2IiH kr8.
END SALTPACK ENCRYPTED MESSAGE.`

// Bob creates a Keyring and Keystore
kr, err := keyring.NewKeyring("BobKeyring")
if err != nil {
    log.Fatal(err)
}
if err := keyring.UnlockWithPassword(kr, "bobpassword"); err != nil {
    log.Fatal(err)
}
ks := keys.NewKeystore(kr)
sp := saltpack.NewSaltpack(ks)

// Import edx25519 key to bob's Keystore
kmsg := `BEGIN EDX25519 KEY MESSAGE.
E9zL57KzBY1CIdJ d5tlpnyCIX8R5DB oLswy2g17kbfK4s CwryRUoII3ZNk3l
scLQrPmgNuKi9OK 7ugGoVWBY2n5xbK 7w500Vp2iXo6LAe XZiB06UjUdCoYJv
YjKbul2B61uxTZc waeBgRV91RZoKCn xLQnRhLXE2KC.
END EDX25519 KEY MESSAGE.`
bob, err := keys.DecodeKeyFromSaltpack(kmsg, "password", false)
if err != nil {
    log.Fatal(err)
}
if err := ks.SaveKey(bob); err != nil {
    log.Fatal(err)
}

// Bob decrypt's
out, signer, err := sp.DecryptArmored(encrypted)
if err != nil {
    log.Fatal(err)
}
// The signer from Saltpack Decrypt is a x25519 ID, so compare using
// keys.PublicKeyIDEquals.
if keys.PublicKeyIDEquals(aliceID, signer) {
    fmt.Printf("signer is alice\n")
}
fmt.Printf("%s\n", string(out))
```
