# Saltpack

Encryption by default uses the [Saltpack binary encryption format](https://saltpack.org/encryption-format-v2).

This format uses NaCl's box and secretbox constructions and provides authenticity, repudability and anonymity.
See [saltpack.org](https://saltpack.org) for more details.

This [github.com/keys-pub/keys/saltpack](https://github.com/keys-pub/keys/tree/master/saltpack) package allows you to encrypt/decrypt and sign/verify using Saltpack and
EdX25519 keys.

## Encrypt

The following example describes how to:

- Generate an X25519 key
- Encrypt to recipients (Alice and Bob) using Saltpack

```go
import (
    "github.com/keys-pub/keys"
    "github.com/keys-pub/keys/saltpack"
)

...
alice := keys.GenerateX25519Key()
bob := keys.GenerateX25519Key()

message := []byte("hi bob")

// Encrypt using Saltpack from alice to bob (include alice as a recipient too).
encrypted, err := saltpack.EncryptArmored(message, alice, bob.ID(), alice.ID())
if err != nil {
    log.Fatal(err)
}

fmt.Printf("Encrypted: %s\n", string(encrypted))
```

## Decrypt

The following example decrypts the message from the Encrypt example:

- Import a EdX25519 key
- Decrypt and verify a Saltpack message

```go
import (
    "github.com/keys-pub/keys"
    "github.com/keys-pub/keys/keyring"
    "github.com/keys-pub/keys/saltpack"
)

...
// Decode Bob's key.
// keys.ID("kbx18x22l7nemmxcj76f9l3aaflc5487lp5u5q778gpe3t3wzhlqvu8qxa9z07")
key := `BEGIN X25519 KEY MESSAGE.
umCRo9iHIudLWoz 4Ugt0hUXQVJ7lhV p7A9mb3kOTg6PeV fhqetAc9ZOUjagi
91gENEkp0xfjF2E Tyakwe90kzo1FNT gRacWRL5B59strN OoZYHQooqvlMKM.
END X25519 KEY MESSAGE.`
bob, err := keys.DecodeKeyFromSaltpack(key, "", true)
if err != nil {
    log.Fatal(err)
}

// Message from Alice.
aliceID := keys.ID("kbx17jhqvdrgdyruyseuaat0rerj7ep4n63n4klufzxtzmk9p3d944gs4fg39g")
encrypted := `BEGIN SALTPACK ENCRYPTED MESSAGE.
kcJn5brvybfNjz6 D5ll2Nk0YiiGFCz I2xgcLXuPzYNBe3 OboFDA8Gh0TxosH yo82IRf2OZzteqO
GaPWlm7t0lC0M0U vNnOvsussLf1nMw Oo1Llf9oAbA7qxa GjupUEWnTgyjjUn GKb3WvtjSgRsJS2
Y92GMEx8cHvbGrJ zvLGlbqAhEIDNZ2 SE15aoV6ahVxeVH 1inHyghv3H1oTAC K86mBl4fg9FY1QK
4n0gLOmSHbD8UYH V3HAPS0yaBC4xJB g3y04Xcqiij36Nb WmJgvSFdGugXd7O yfU.
END SALTPACK ENCRYPTED MESSAGE.`

// Bob decrypts
out, sender, err := saltpack.DecryptArmored(encrypted, saltpack.NewKeyStore(bob))
if err != nil {
    log.Fatal(err)
}

if sender != nil && sender.ID() == aliceID {
    fmt.Printf("signer is alice\n")
}
fmt.Printf("%s\n", string(out))
```

## Sign

Sign bytes to an armored saltpack message.

```go
import (
    "github.com/keys-pub/keys"
    "github.com/keys-pub/keys/saltpack"
)
...

alice := keys.GenerateEdX25519Key()

message := []byte("hi from alice")

sig, err := saltpack.SignArmored(message, alice)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("%s\n", alice.ID())
fmt.Printf("%s\n", sig)
```

## Verify

Verify a signed saltpack message.

```go
import (
    "github.com/keys-pub/keys"
    "github.com/keys-pub/keys/saltpack"
)
...

aliceID := keys.ID("kex1w2jep8dkr2s0g9kx5g6xe3387jslnlj08yactvn8xdtrx4cnypjq9rpnux")
signed := `BEGIN SALTPACK SIGNED MESSAGE.
kXR7VktZdyH7rvq v5wcIkHbs7mPCSd NhKLR9E0K47y29T QkuYinHym6EfZwL
1TwgxI3RQ52fHg5 1FzmLOMghcYLcV7 i0l0ovabGhxGrEl z7WuI4O3xMU5saq
U28RqUnKNroATPO 5rn2YyQcut2SeMn lXJBlDqRv9WyxjG M0PcKvsAsvmid1m
cqA4TCjz5V9VpuO zuIQ55lRQLeP5kU aWFxq5Nl8WsPqlR RdX86OuTbaKUvKI
wdNd6ISacrT0I82 qZ71sc7sTxiMxoI P43uCGaAZZ3Ab62 vR8N6WQPE8.
END SALTPACK SIGNED MESSAGE.`

out, signer, err := saltpack.VerifyArmored(signed)
if err != nil {
    log.Fatal(err)
}
if signer == aliceID {
    fmt.Printf("signer is alice\n")
}
fmt.Printf("%s\n", string(out))
// Output:
// signer is alice
// hi from alice
```
