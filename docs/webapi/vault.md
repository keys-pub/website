# Vault

This document describes the Vault Web API, if you want to understand how the vault is designed see the [Vault Spec](/docs/specs/vault.md).

::: warning
This feature is experimental and this documentation is in progress.
:::

This API stores and retrieves data in an append only log. Clients can request data from an index into this log.
[Requests are authorized](/docs/webapi/auth.md) with the EdX25519 key associated with the vault.

This API is used by the clients to (optionally) backup and sync vault items.

Data is stored in the order it is received, and should be end-to-end encrypted.
You probably want to use the [github.com/keys-pub/keys-ext/http/client](https://pkg.go.dev/github.com/keys-pub/keys-ext/http/client) package instead of this API directly.

## GET /vault/:kid

Get vault items.

| Request | Description              |
| ------- | ------------------------ |
| idx     | Index to start at.       |
| limit   | Limit number of results. |

Requires [Authorization](/docs/webapi/auth.md).

```shell
curl -H "Authorization: kex1nh4jwl3zy0xz8m7eaxvd6uluqwfg3tt2k0rvdlsa6f2jeckvfrtsfd6jh8:pJ/x7hzEcqPZ9cWGmX4UBB3Jh0csSP+7yDScIqI6SPiz9MKedySmQZlxFYSMZMNPKZPyYLVgQeU6NPK7YivJCg==" \
  "https://keys.pub/vault/kex1nh4jwl3zy0xz8m7eaxvd6uluqwfg3tt2k0rvdlsa6f2jeckvfrtsfd6jh8?nonce=pFrY3aZiyYzaHjFF1YlyfZfHxG9QuQwXFv3iUoIQUj9&ts=1595367948129"
```

Returns vault items with a timestamp and index. The timestamp included is when the server received the data.

```json
{
  "vault": [
    { "data": "dGVzdGluZzE=", "idx": 1, "ts": 1595285756121 },
    { "data": "dGVzdGluZzI=", "idx": 2, "ts": 1595285756152 }
  ],
  "idx": 2
}
```

## POST /vault/:kid

Requires [Authorization](/docs/webapi/auth.md).

Save items to a vault. The server can process up to 500 items at once.

The request body is a JSON array of data objects.

```json
[{ "data": "dGVzdGluZzE=" }, { "data": "dGVzdGluZzI=" }]
```

## DELETE /vault/:kid

Requires [Authorization](/docs/webapi/auth.md).

Remove all data associated with a vault.
Subsequent requests (GET, POST, PUT) to the vault will return a 404.
