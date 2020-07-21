# Vault

A vault is an append only log of data. Data can be requested from an index into this log.
Vault [requests must be signed](/docs/restapi/auth.md) with the EdX25519 key associated with the vault.

The data itself is not verified in an way, it is stored just as it is received.
It is up to the clients to encrypt this data (typically using the same EdX25519 key used for signing).

This API is used by the clients to (optionally) backup and sync vault items.

## GET /vault/:kid

Get vault.

| Request | Description              |
| ------- | ------------------------ |
| idx     | Index to start at.       |
| limit   | Limit number of results. |

Requires [Authorization](/docs/restapi/auth.md).

```shell
https://keys.pub/vault/kex16jvh9cc6na54xwpjs3ztlxdsj6q3scl65lwxxj72m6cadewm404qts0jw9
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

Requires [Authorization](/docs/restapi/auth.md).

Save items to a vault. The server can process up to 500 items at once.

The request body is a JSON array of data objects.

```json
[{ "data": "dGVzdGluZzE=" }, { "data": "dGVzdGluZzI=" }]
```

## DELETE /vault/:kid

Requires [Authorization](/docs/restapi/auth.md).

Remove all data associated with a vault.
Subsequent requests (GET, POST, PUT) to the vault will return a 404.
