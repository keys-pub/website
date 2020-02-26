---
title: Tools to help manage cryptographic keys
---

<img src="./logo.png" width="280"/>

::: warning
This project is in development and has not been audited. Don't use for anything important yet.
:::

## Install

- [Install Command Line](/docs/cli/install.md)
- [Install the Desktop App](/docs/desktop/install.md) (includes command line)

## Introduction

keys.pub is a [library](/docs/lib/), [utility](/docs/cli/) and [app](/docs/desktop/install.md) that manages cryptographic keys, sigchains and user identities.

The default key is a [Curve25519 key (EdX25519)](/docs/specs/keys.md) capable of signing and encryption.
Using this key, you can create a [sigchain](/docs/specs/sigchain.md) (an ordered sequence of signed statements).
You can [link a key to an identity](/docs/specs/user.md) (on Github, Twitter, etc), by publishing a signed statement in your sigchain.

You can [search for keys](/docs/restapi/user.md#get-user-search) by user name and service, or [lookup a user](/docs/restapi/user.md#get-user-kid) by a key identifier using a [REST API](/docs/restapi/).

[Key identifiers](/docs/specs/kid.md) are [Bech32 format](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki), encode the type of key and public key bytes, and include a checksum with error correction.

The [Saltpack](https://saltpack.org) format is used for signing and encryption, providing authenticity, repudability and anonymity. (Saltpack uses nacl.box and nacl.secretbox constructions.)

Your keys are protected by a [keyring](docs/specs/keyring.md) which is secured by both the OS and a user supplied password (similar to a password manager).

The `keysd` daemon runs as a [gRPC service](/docs/service.md) on your computer.

- [Command Line](/docs/cli/)
- [REST API](/docs/restapi/)
- [Library](/docs/lib/)
- [Specs](/docs/specs/)

### Similarities/Differences

- [Keybase](https://keybase.io/docs): This project borrows many ideas from Keybase, including sigchains and user (proofs), and uses [Saltpack](https://saltpack.org) and [keybase/go-keychain](https://github.com/keybase/go-keychain) and other packages.
  However, this project only provides a 1-to-1 association of a key to a user.
- [Age](https://github.com/FiloSottile/age): We also use Bech32 as a key identifiers, and [convert Ed25519 keys to X25519](https://blog.filippo.io/using-ed25519-keys-for-encryption/).

### Coming soon

- Other key types like age?
- Legacy/pgp?
- Better documentation
- More services (Facebook, Website)
- Inbox
