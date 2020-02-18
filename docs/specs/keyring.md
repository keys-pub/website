# Keyring

Keys are stored in the keyring. All keyring items are encrypted, using a password/salt derived key from [Auth](auth.md.
This provides an important additional layer of protection on platforms such as Windows and Linux, where the underlying system keyring/crendentials are only secure at the user account level.

The [github.com/keys-pub/keys/keyring](https://github.com/keys-pub/keys/tree/master/keyring) package uses the following APIs:

## macOS

The Keychain API via the [github.com/keybase/go-keychain](https://github.com/keybase/go-keychain) package.

## Windows

The Windows Credential Manager API via the [github.com/danieljoos/wincred](https://github.com/danieljoos/wincred) package.

## Linux

The Secret Service dbus interface via the [github.com/zalando/go-keyring](github.com/zalando/go-keyring)
package. The Secret Service dbus interface, which is provided by GNOME Keyring.

## FS

There is a filesystem based keyring for other OS types that have no system keyring.
