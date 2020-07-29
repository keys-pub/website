# Signing

## `keys sign`

Sign `image.png` creates `image.png.sig` (armored, detached, Saltpack signature):

```shell
keys sign -signer gabriel@github -in image.png
keys sign -s gabriel@github -i image.png
keys sign -s kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c -i image.png
```

Create a signed message from stdin (armored, attached, Saltpack signature):

```shell
echo -n "I'm gabriel on Github 🤓" | keys sign -s gabriel@github > msg.signed
```

Override the default mode with `-mode binary,attached` and create signed message for a file, `image.png.signed`:

```shell
keys sign -s gabriel@github -i image.png -m binary,attached
```

### Modes

For files, the default is armored, detached.
For stdin, the default is armored, attached.

| Input | Armored | Detached |
| ----- | ------- | -------- |
| file  | Yes     | Yes      |
| stdin | Yes     | No       |

The modes you can specify are `attached`, `detached`, `armored`, `binary`, and you can combine them `binary,attached`.
Saltpack version 2 signing is currently the only output format.

## `keys verify`

Verify image.png from image.png.sig was signed by `gabriel@github`.

```shell
keys verify -i image.png -x image.png.sig
```

Verify and output a signed message:

```shell
cat msg.signed | keys verify -signer gabriel@github
I'm gabriel on Github 🤓
```

Verify image.png.signed (attached binary Saltpack signature) was signed by `gabriel@github` and create `image.png`.

```shell
keys verify -i image.png.signed -s gabriel@github
```
