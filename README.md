# keys.pub

keys.pub hosts a set of tools to help manage cryptographic keys.

- Create [keys](docs/specs/keys.md) capable of signing and encryption
- [Encrypt](docs/cli/encrypt.md) and [sign](docs/cli/sign.md) text or files
- [Link a key](docs/specs/user.md) to an identity on Github, Twitter, etc
- [Search and find keys](docs/restapi/user.md#search) on keys.pub
- Short [key identifiers](docs/specs/kid.md) are public keys
- Publish signed statements to a [sigchain](docs/specs/sigchain.md)
- Protect keys using a [keyring](docs/specs/keyring.md) secured by the OS and a password
- 100% open source [go libraries](docs/packages.md)
- End to end [service architecture](docs/service.md) with [authenticated access](docs/specs/auth.md)

Coming soon:

- Other key types (age, legacy/pgp)?

::: warning
This project is in development and has not been audited or reviewed. Use at your own risk.
:::
