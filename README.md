---
title: keys.pub - Tools to help manage cryptographic keys
---

<img src="./logo.png" width="280"/>

::: warning
This project is in development and has not been audited. Don't use for anything important yet.
:::

## Install

- [Install Command Line](/docs/cli/install.md)
- [Install Desktop](/docs/desktop/install.md) (includes command line)

## Introduction

keys.pub hosts a set of tools to help manage cryptographic keys. This includes a [software library](/docs/lib/encrypt.md), a [command line utility](/docs/cli/install.md), [a desktop app](/docs/desktop/install.md), and a [REST API](/docs/restapi/user.md).

The default key is a [Curve25519 key (EdX25519)](/docs/specs/keys.md) capable of signing and encryption.
Using this key, you can create a [sigchain](/docs/specs/sigchain.md) (an ordered sequence of signed statements).
You can [link a key to an identity](/docs/specs/user.md) on Github or Twitter, etc, by publishing a signed statement on that service and in a sigchain on keys.pub.

You can [search for keys](docs/restapi/user.md#search) by user name and service (Github or Twitter, etc), or lookup a user by a key identifier.

[Key identifiers](/docs/specs/kid.md) are [Bech32 format](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki), encode the type of key and public key bytes, and include a checksum with error correction.

The [Saltpack](https://saltpack.org) format is used for signing and encryption, providing authenticity, repudability and anonymity.

Your keys are protected by a [keyring](docs/specs/keyring.md) which is secured by both the OS and a user supplied password (similar to a password manager).

The `keysd` daemon runs as a [gRPC service](/docs/service.md) on your computer.

- [Command Line](/docs/cli/)
- [REST API](/docs/restapi/)
- [Library](/docs/lib/)
- [Specs](/docs/specs/)

## Coming soon

- Other key types (age, legacy/pgp)?
- Better documentation
