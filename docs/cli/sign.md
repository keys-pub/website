# Signing

## `keys sign`

Sign `image.png` creates `image.png.sig` (armored, detached, Saltpack signature):

```shell
keys sign -s gabriel@github -i image.png
```

Create a signed message from stdin (armored, attached, saltpack signature):

```shell
echo -n "I'm gabriel on Github 🤓" | keys sign -s gabriel@github > msg.signed
```

Override the default format with `-armor -attached` and create an armored signed message for a file, `image.png.signed`:

```shell
keys sign -s gabriel@github -i image.png -armor -attached
```

### Default Format

For files, the default is armored, detached.
For stdin, the default is armored, attached.

| Input | Armored | Detached |
| ----- | ------- | -------- |
| file  | Yes     | Yes      |
| stdin | Yes     | No       |

Saltpack version 2 signing is currently the only output format.

## `keys verify`

Verify image.png from image.png.sig (detached signature).

```shell
keys verify -i image.png -x image.png.sig
```

Verify and output a signed message was signed by `gabriel@github`:

```shell
cat msg.signed | keys verify -signer gabriel@github
I'm gabriel on Github 🤓
```

Verify image.png.signed (attached) was signed by `gabriel@github` and create `image.png`.

```shell
keys verify -i image.png.signed -s gabriel@github
```
