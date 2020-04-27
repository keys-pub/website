# Manage Keys

## `keys generate`

Create a (EdX25519) key.

```shell
keys generate

# <kid>
kex17hy4kxhdrzj2fs03pljxph4d0qcmlvt4zl5fw9mxcpga3ga0kpvs0mq6wu
```

## `keys list`

List keys.

```shell
keys list

# <kid> <name@service>
kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c gabriel@github
kex1ts0qw8fwkvle2f2xsqumetmr9ev5ppx22rl5hnycen68sanjzl7qnta629
```

## `keys pull`

Pull a public key (sigchain) from the key server.

```shell
keys pull kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c
```

Pull by user.

```shell
keys pull gabriel@github

# <kid>
kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c
```

Update all our locally saved keys.

```shell
keys pull

# <kid>
kex1e26rq9vrhjzyxhep0c5ly6rudq7m2cexjlkgknl2z4lqf8ga3uasz3s48m
kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c
```

## `keys push`

Publish a public key (sigchain) to a key server.

```shell
keys push kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c
```

## `keys key`

Show key information.

```shell
keys key kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c
```

```json
{
  "id": "kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c",
  "type": 10,
  "user": {
    "name": "gabriel",
    "kid": "kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c",
    "seq": 1,
    "service": "github",
    "url": "https://gist.github.com/gabriel/ceea0f3b675bac03425472692273cf52",
    "status": 1,
    "verifiedAt": 1581636352389,
    "label": "gabriel@github"
  },
  "saved": true
}
```

## `keys remove`

Remove a key.

```shell
keys remove kex17hy4kxhdrzj2fs03pljxph4d0qcmlvt4zl5fw9mxcpga3ga0kpvs0mq6wu
```

## `keys export`

Export a key.

```shell
keys export kex17hy4kxhdrzj2fs03pljxph4d0qcmlvt4zl5fw9mxcpga3ga0kpvs0mq6wu
```

```
BEGIN EDX25519 KEY MESSAGE.
QelLAF802uFpN7H JX4w8wOChAK1yWy U1cwY9jZv1CqHln yNdbI38AZ1wzrvK
vxiZuXPdypPZNu0 zfDU7X747YQHORI mFCqoE19SrG4VEB GlHuYiwLBGcuugm
5xr35QSNC0S3m2a reUgPa1c1ceyRlK 7mNqlZo1Q5Co.
END EDX25519 KEY MESSAGE.
```

## `keys import`

Import a key.

```shell
keys import -in key.txt
```

```
keys export kex17hy4kxhdrzj2fs03pljxph4d0qcmlvt4zl5fw9mxcpga3ga0kpvs0mq6wu
```
