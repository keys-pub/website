# Encryption

## `keys encrypt`

Encrypt text to armored msg.enc (from stdin).

Specify a key id or user name@service as recipients.

```shell
echo -n "My secret 🤓" | keys encrypt -armor -sender gabriel@github \
-recipient kex1ts0qw8fwkvle2f2xsqumetmr9ev5ppx22rl5hnycen68sanjzl7qnta629 \
-recipient gabriel@github > msg.enc
```

Encrypt image.png to image.png.enc.

Sender is optional, if unspecified, is anonymous.

```shell
keys encrypt -r gabriel@github -i image.png
```

## `keys decrypt`

Decrypt from (from stdin).

```shell
cat msg.enc | keys decrypt

verified: kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c saltpack-encrypt gabriel@github
My secret 🤓
```

Decrypt image.png.enc to image.png.

```shell
keys decrypt -in image.png.enc

out: /Users/gabe/Pictures/image.png
```
