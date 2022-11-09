# Install

Are you looking for [command line usage](/docs/cli-index.md) instead?

To manually build the binaries, see [building from source](building.md).

## macOS

The desktop app installs the command line on first run:

```shell
ln -s /Applications/Keys.app/Contents/Resources/bin/keys /usr/local/bin/keys
```

### Homebrew

Via [homebrew](https://brew.sh/):

```shell
brew tap keys-pub/tap
brew install keys
```

## Windows

::: warning
The scoop install will conflict with the desktop app. Fix is in progress.
:::

The desktop app ships with the command line utilities, you can add it to your %PATH%:

```shell
%USERPROFILE%\AppData\Local\Programs\keys\resources\bin
```

### Scoop

To install via [scoop](https://scoop.sh/):

```shell
scoop bucket add keys.pub https://github.com/keys-pub/scoop-bucket
scoop install keys
```

## Linux

Add keys.pub apt repository:

```shell
echo "deb https://storage.googleapis.com/aptly.keys.pub current main" \
    | sudo tee -a /etc/apt/sources.list.d/keys.list
```

Add the keys apt signing public key:

```shell
wget -qO - https://storage.googleapis.com/aptly.keys.pub/keys.asc | sudo apt-key add -
```

```shell
sudo apt-get update
sudo apt-get install keys
```

## Arch Linux

Available in the AUR as [keys-pub-git](https://aur.archlinux.org/packages/keys-pub-git/)
