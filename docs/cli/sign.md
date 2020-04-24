# Signing

## `keys sign`

```shell
# Sign image.png to image.png.sig
keys sign -signer gabriel@github -in image.png
keys sign -s gabriel@github -i image.png

# Verify image.png
keys verify -s gabriel@github -i image.png
```

```shell
# Create a signed message (from stdin)
echo -n "I'm gabriel on Github 🤓" | keys sign -s gabriel@github > msg.signed

# Verify signed message to stdout
cat msg.signed | keys verify -signer gabriel@github
I'm gabriel on Github 🤓
```

```shell
# Sign image.png to image.png.signed (binary, signature is attached)
keys sign -s gabriel@github -i image.png -m binary,attached

# Verify attached signed message image.png.signed to image.png.
keys verify -s gabriel@github -i image.png.signed -m binary,attached
```

## `keys verify`

```shell
# Verify image.png
keys verify -in image.png -signer gabriel@github
```

```shell
# Verify signed message to stdout
cat msg.signed | keys verify -signer gabriel@github
I'm gabriel on Github 🤓
```

```shell
# Verify attached signed message image.png.signed to image.png.
keys verify -s gabriel@github -i image.png.signed -m binary,attached
```
