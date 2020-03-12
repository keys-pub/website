# Signing

## `keys sign`

Sign from stdin to stdout (armored).

```shell
> echo -n "I'm alice 🤓" | keys sign -stdin -stdout -armor \
-signer kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c > msg.sig
```

Sign image.png to image.png.sig.

```shell
> keys sign -signer kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c \
-in image.png -out image.png.sig
```

Sign image.png to image.png.sig (from stdin to stdout).

```shell
> cat image.png | keys sign -stdin -stdout \
-signer kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c > image.png.sig
```

## `keys verify`

Verify from stdin to stdout (armored).

```shell
> cat msg.sig | keys verify -stdin -stdout -armor \
-signer kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c

I'm alice 🤓
```

Verify from file to stdout.

```shell
> keys verify -armor -in msg.sig -stdout

verified kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c gabriel@github
I'm alice 🤓
```

Verify image.png.sig to image.png.

```shell
> keys verify -in image.png.sig -out image.png

verified kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c gabriel@github
```
