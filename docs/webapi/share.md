# Share

The share API allows clients to store data (up to 512 bytes) until expire or first access using a [EdX25519](/docs/specs/keys.md) key.
This key both encrypts the data and signs requests.

## GET /share/:kid

Get share.

| Request | Description                                                                       |
| ------- | --------------------------------------------------------------------------------- |
| expire  | Time duration before expire, "5m" is 5 minutes, "30s" is 30 seconds, max is "15m" |

Requires [Authorization](/docs/webapi/auth.md).

Max data shared is 512 bytes.

## PUT /share/:kid

Save to share.

| Request | Description                                                                       |
| ------- | --------------------------------------------------------------------------------- |
| expire  | Time duration before expire, "5m" is 5 minutes, "30s" is 30 seconds, max is "15m" |

Requires [Authorization](/docs/webapi/auth.md).

Max data shared is 512 bytes.
