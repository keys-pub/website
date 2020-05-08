# Command Line

The desktop app includes the `keys` command line utility.

If you only want to install the command line without the app, see [How to install the Command Line (only)](/docs/cli/install.md).

## macOS

_This symlink may already exist, as the app attempts to create it when it is first run._

```shell
ln -s /Applications/Keys.app/Contents/Resources/bin/keys /usr/local/bin/keys
```

## Windows

```
TODO
```

## Linux

Add the following lines to your .bashrc(or equivalent file)

```
alias keys="/tmp/.mount_Keys-*/resources/bin/keys"
alias keysd="/tmp/.mount_Keys-*/resources/bin/keysd"
```

* You should keep the AppImage open in the background
* There might be unintended consequences to having multiple AppImages open in the background
