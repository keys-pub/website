# Sigchain

A sigchain is an ordered sequence of signed statements by a key.

This spec is similar to [Keybase Sigchain](https://keybase.io/docs/teams/sigchain_v2) or the [Secure Scuttlebutt Feed](https://ssbc.github.io/scuttlebutt-protocol-guide/#structure).

## Statement

A [Statement](https://godoc.org/github.com/keys-pub/keys#Statement) describes signed data in a sigchain.

### Format

This is compatible as a JSON canonical format (ordered keys, no whitespace, with only string and integer values) with
the signature in the beginning to make it easy to extract without having to parse JSON.

| Field  | Type   | Description                                                                                       |
| ------ | ------ | ------------------------------------------------------------------------------------------------- |
| .sig   | string | Signature (64 bytes, base64 encoded with padding, always 88 characters).                          |
| data   | string | Data (base64 encoded).                                                                            |
| kid    | string | Key id used to sign.                                                                              |
| prev   | string | Hash (SHA-256, base64 encoded) of previous sigchain statement, or omitted for the root statement. |
| seq    | int    | Sequence number, starting at 1 for the root statement.                                            |
| revoke | int    | (Optional) Sequence number of a statement to revoke.                                              |
| ts     | int    | (Optional) Timestamp, number of milliseconds since 1 January 1970 00:00 UTC.                      |
| type   | string | (Optional) Statement type ("", "revoke", "user").                                                 |

The format for a statement:

```
{".sig":"<base64 signature>","kid":"<kid>","data":"<base64 data>","prev":"<base64 prev hash>","seq":<integer>,"ts":<integer>}
```

The format for a revoke statement:

```
{".sig":"<base64 signature>","kid":"<kid>","prev":"<base64 prev hash>","revoke":<integer>,"seq":<integer>,"ts":<integer>,"type":"revoke"}
```

### Signature

The signature (`.sig`) is the signature bytes (64 bytes, base64 encoded, padded, 88 characters) of the specific serialization.

The specific serialization (or the bytes to sign) is the statement without the ".sig" value:

```
{".sig":"","data":"<base64 data>","kid":"<kid>","prev":"<base64 prev hash>","seq":<integer>,"ts":<integer>,"type":"<type>"}
```

### Verifying the Signature

It is important to verify the bytes match the specific serialization.
You can do this by stripping out the .sig value in the range [9:97] and then verifying the signature on those bytes.
This .sig is always 88 characters (64 bytes, base64 encoded with padding) in this range at the beginning of the statement.

```
Sig = b[9:97]
BytesToSign = b[0:9] + b[97:]
```

See [How (not) to sign a JSON object](https://latacora.micro.blog/2019/07/24/how-not-to.html) on why this is important.

### REST API

You can access sigchains via the [/sigchain](/docs/restapi/sigchain.md) API.
