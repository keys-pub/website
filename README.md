---
title: keys.pub - Cryptographic key management, sigchains, user identities, signing, encryption, password manager.
---

<img src="./logo.png" width="280"/>

## Install

[Download for macOS](https://github.com/keys-pub/app/releases/download/v0.0.35/Keys-0.0.35.dmg)

[Download for Windows](https://github.com/keys-pub/app/releases/download/v0.0.35/Keys-0.0.35.msi)

[Download for Linux](https://github.com/keys-pub/app/releases/download/v0.0.35/Keys-0.0.35.AppImage)

Or the [command line only](/docs/cli/install.md).

## What is it?

- Manage cryptographic [keys](/docs/specs/keys.md), [sigchains](/docs/specs/sigchain.md) and [user identities](/docs/specs/user.md).
- [Search for keys](/docs/restapi/user.md#get-user-search), verify and import them.
- Securely store passwords and secrets.
- Encrypt, decrypt, sign, verify.
- Create a secure connection ([Wormhole](/docs/specs/wormhole)) between 2 computers.
- Most features available in both the app and on the command line.
- 100% open source ([github.com/keys-pub](http://github.com/keys-pub)) and cross platform (macOS, Windows, Linux).
- _Coming soon:_ Backup keys/secrets to your private self-hosted storage on S3, GCP, etc.
- _Coming soon:_ Support for hardware keys.
- _Coming soon:_ Mobile apps.

<img src="./app-encrypt.jpg"/>

<div style="margin-top: -20px; margin-bottom: 20px; font-style: italic; text-align: center">Using the desktop app to encrypt a message from gabriel@github to multiple recipients.</div>

::: warning
This project is in development and has not been audited.
:::

## How does it work?

The default key is a [Ed25519/X25519 key](/docs/specs/keys.md) capable of signing and encryption.

We can [link this key](/docs/specs/user.md) to your identity on Github, Twitter, Reddit, etc, by creating a signed statement and publishing it both there and on your sigchain. (You can revoke by removing either statement.)

You can [search for keys](/docs/restapi/user.md#get-user-search) by user name and service (e.g. `gabriel@github`, `gabrlh@twitter`), or [lookup a user](/docs/restapi/user.md#get-user-kid) by a key identifier using a [REST API](/docs/restapi-index.html).

The [Saltpack](https://saltpack.org) format is used for signing and encryption, providing authenticity, repudability and anonymity.

The [Noise Protocol](https://noiseprotocol.org/) is used to create a secure connection between two keys.

[Key identifiers](/docs/specs/kid.md) are [Bech32 format](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki), encode the type of key and public key bytes, and include a checksum with error correction.

Your keys and secrets are protected by a [keyring](/docs/specs/keyring.md) which is secured by both the OS and a user supplied password.

The app and command line utility connect to a `keysd` daemon runs as a [gRPC service](/docs/specs/service.md) on your computer.

```shell
> keys pull gabriel@github
kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c

> echo "hi 🤓" | keys encrypt -recipient gabriel@github -armor -stdin -stdout
BEGIN SALTPACK ENCRYPTED MESSAGE. kcJn5brvybfNjz6 D5ll2Nk0Z2co0as ...
```

_The above example pulls the public key for the Github user gabriel, verifies it and creates an encrypted saltpack message._

- [Desktop App](/docs/desktop/install.md)
- [Command Line](/docs/cli-index.md)
- [REST API](/docs/restapi-index.md)
- [Library](/docs/lib-index.md)
- [Specs](/docs/specs-index.md)

## What else?

### Go Libraries

All the features in the app is available through Go libraries.

[See some examples](/docs/lib-index.md)

### Similarities/Differences

- [Keybase](https://keybase.io): This project borrows many ideas from Keybase, including sigchains and user (proofs), and uses [Saltpack](https://saltpack.org) and [keybase/go-keychain](https://github.com/keybase/go-keychain) and other packages.
  However, this project only links a single key to a user.
- [Age](https://github.com/FiloSottile/age): We also use Bech32 as a key identifiers, and [convert Ed25519 keys to X25519](https://blog.filippo.io/using-ed25519-keys-for-encryption/).

### Coming soon

- Other key types like age?
- Legacy/pgp?
- Better documentation
- More services (Facebook, Website)
- Inbox
- Import SSH ed25519 keys
- Wormhole through relays (syncthing)
- Syncthing integration
