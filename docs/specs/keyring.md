# Keyring

Keys are stored in a keyring. All keyring items are encrypted, using a password/salt derived key from [authentication](auth.md).
This provides an important additional layer of protection on platforms such as Windows and Linux, where the underlying system keyring/crendentials are only secure at the user account level.

Keyring item IDs are not encrypted.

The [github.com/keys-pub/keys/keyring](https://pkg.go.dev/github.com/keys-pub/keys/keyring) package uses the following APIs:

## macOS

The Keychain API via the [github.com/keybase/go-keychain](https://github.com/keybase/go-keychain) package.

## Windows

The Windows Credential Manager API via the [github.com/danieljoos/wincred](https://github.com/danieljoos/wincred) package.

## Linux

The SecretService dbus interface via the [github.com/zalando/go-keyring](github.com/zalando/go-keyring)
package. The SecretService dbus interface, which is provided by GNOME Keyring.

We are still exploring whether to use kwallet or libsecret directly for linux environments that support that instead.
In the meantime, you can fall back to the FS based keyring.

## FS

There is a filesystem based keyring for OS' that have no system keyring.

## Mem

The is an in memory keyring for ephemeral keys or for testing.
