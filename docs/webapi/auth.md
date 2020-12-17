# Authorization

Some requests require an Authorization header which includes a signature of the HTTP request.

The signature should be specified with an `Authorization` header including the (EdX25519) key identifier and signature bytes (base64 encoded) in the format `{KID}:{Signature}`.

For example,

```text
kex1nh4jwl3zy0xz8m7eaxvd6uluqwfg3tt2k0rvdlsa6f2jeckvfrtsfd6jh8:pJ/x7hzEcqPZ9cWGmX4UBB3Jh0csSP+7yDScIqI6SPiz9MKedySmQZlxFYSMZMNPKZPyYLVgQeU6NPK7YivJCg==
```

The bytes to sign are `{Method},{URL},{ContentHash}`.

The Method is the HTTP method (GET, PUT, POST, DELETE, HEAD).
The URL must be in a canonical form (use same CanonicalURI format as AWS signing).
The ContentHash is the base64 encoded SHA256 hash of the HTTP body (or empty string if no body content).

The URL must include a timestamp (`ts`) and a nonce (`nonce`) parameter.
The nonce is only allowed to be used once and the timestamp needs to be within 30 minutes of the current time. The server keeps track of nonce values up to an hour.

For example a vault GET request:

BytesToSign:

```text
GET,https://keys.pub/vault/kex1nh4jwl3zy0xz8m7eaxvd6uluqwfg3tt2k0rvdlsa6f2jeckvfrtsfd6jh8?nonce=pFrY3aZiyYzaHjFF1YlyfZfHxG9QuQwXFv3iUoIQUj9&ts=1595367948129,
```

cURL:

```shell
curl -H "Authorization: kex1nh4jwl3zy0xz8m7eaxvd6uluqwfg3tt2k0rvdlsa6f2jeckvfrtsfd6jh8:pJ/x7hzEcqPZ9cWGmX4UBB3Jh0csSP+7yDScIqI6SPiz9MKedySmQZlxFYSMZMNPKZPyYLVgQeU6NPK7YivJCg==" \
  "https://keys.pub/vault/kex1nh4jwl3zy0xz8m7eaxvd6uluqwfg3tt2k0rvdlsa6f2jeckvfrtsfd6jh8?nonce=pFrY3aZiyYzaHjFF1YlyfZfHxG9QuQwXFv3iUoIQUj9&ts=1595367948129"
```

Or a vault POST request:

BytesToSign:

```text
POST,https://keys.pub/vault/kex1cze367q786xuf0xy9gt5g32n8ldpv9753aprn0zwpl5ql0xmu74qcs0mk4?nonce=bzTYFeAcYQH48MXv64B6tOCs1s4SmlAUOyiwSvCJSE6&ts=1595368769675,QcjV+e8ZP1QQ0CCyM3Gxf9JteKCzL5t/hdjB10VVlZY=
```

cURL:

```shell
curl -H "Authorization: kex1cze367q786xuf0xy9gt5g32n8ldpv9753aprn0zwpl5ql0xmu74qcs0mk4:lwQ/qB7qDayiK4opnN8ODWAD6TeZcNWhGF0JvMtNgPFpXLMrm7o5QyyIQpXuYVH/dO+Xw7CuryHDsHbMHV0iDA==" -d "[{\"data\":\"dGVzdGluZzE=\"},{\"data\":\"dGVzdGluZzI=\"}]" "https://keys.pub/vault/kex1cze367q786xuf0xy9gt5g32n8ldpv9753aprn0zwpl5ql0xmu74qcs0mk4?nonce=bzTYFeAcYQH48MXv64B6tOCs1s4SmlAUOyiwSvCJSE6&ts=1595368769675"
```

The [github.com/keys-pub/keys-ext/http/api](https://pkg.go.dev/github.com/keys-pub/keys-ext/http/api) package can create a signed http.Request object, see [api.NewRequest](https://pkg.go.dev/github.com/keys-pub/keys-ext/http/api?tab=doc#pkg-examples).
