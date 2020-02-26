# Sigchain

The _keys.pub_ server provides an API for publishing and accessing [sigchains](/docs/specs/sigchain.md).

## GET /sigchain/:kid

Get a sigchain for a user public key.

```shell
curl https://keys.pub/sigchain/kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c
```

```json
{
  "kid": "kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c",
  "statements": [
    {
      ".sig": "RZhVfrd6IpHFdUbn3hmxKh0UQpzjdkRPBZHE3Ag8sZHOqGvDG1wfRKZQ5vuAJDXQCuDoe6uGX1+xnk9qd8sPDw==",
      "data": "eyJrIjoia2V4MW1uc2VnMjh4dTZnM2o0d3VyN2hxd2s4YWczZnUzcG1yMnQ1bHluYzI2eG1nZmYwZHRyeXF1cGY4MGMiLCJuIjoiZ2FicmllbCIsInNxIjoxLCJzciI6ImdpdGh1YiIsInUiOiJodHRwczovL2dpc3QuZ2l0aHViLmNvbS9nYWJyaWVsL2NlZWEwZjNiNjc1YmFjMDM0MjU0NzI2OTIyNzNjZjUyIn0=",
      "kid": "kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c",
      "seq": 1,
      "ts": 1580344349629,
      "type": "user"
    }
  ]
}
```

| Response   | Description                                              |
| ---------- | -------------------------------------------------------- |
| kid        | Key ID                                                   |
| statements | Array&lt;[Statement](../specs/sigchain.md#statement)&gt; |

## PUT /sigchain/:kid/:seq

The body content should be a sigchain [Statement](../sigchain.md#Statement).

```shell
curl -X PUT -d '{".sig":"RZhVfrd6IpHFdUbn3hmxKh0UQpzjdkRPBZHE3Ag8sZHOqGvDG1wfRKZQ5vuAJDXQCuDoe6uGX1+xnk9qd8sPDw==","data":"eyJrIjoia2V4MW1uc2VnMjh4dTZnM2o0d3VyN2hxd2s4YWczZnUzcG1yMnQ1bHluYzI2eG1nZmYwZHRyeXF1cGY4MGMiLCJuIjoiZ2FicmllbCIsInNxIjoxLCJzciI6ImdpdGh1YiIsInUiOiJodHRwczovL2dpc3QuZ2l0aHViLmNvbS9nYWJyaWVsL2NlZWEwZjNiNjc1YmFjMDM0MjU0NzI2OTIyNzNjZjUyIn0=","kid":"kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c","seq":1,"ts":1580344349629,"type":"user"}' \
https://keys.pub/sigchain/kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c/1
```

It must be a valid signed sigchain statement by the sign key. If it exists already, returns 409 error.
The max size for the msg is 16KB.

## GET /sigchains

List all sigchain statements for everyone.
The results are in order of the statements added, and is meant for sync'ing all sigchains from one place to another.

| Params  | type           | Description                                                      |
| ------- | -------------- | ---------------------------------------------------------------- |
| version | string         | Returns sigchain statements added since this version.            |
| limit   | int [1-10000]  | Limit number of results. Defaults to 1000. Max allowed is 10000. |
| include | strings ["md"] | Additional fields to include, "md" (metadata).                   |

```shell
curl https://keys.pub/sigchains?limit=2
```

```json
{
  "statements": [
    {
      ".sig": "RZhVfrd6IpHFdUbn3hmxKh0UQpzjdkRPBZHE3Ag8sZHOqGvDG1wfRKZQ5vuAJDXQCuDoe6uGX1+xnk9qd8sPDw==",
      "data": "eyJrIjoia2V4MW1uc2VnMjh4dTZnM2o0d3VyN2hxd2s4YWczZnUzcG1yMnQ1bHluYzI2eG1nZmYwZHRyeXF1cGY4MGMiLCJuIjoiZ2FicmllbCIsInNxIjoxLCJzciI6ImdpdGh1YiIsInUiOiJodHRwczovL2dpc3QuZ2l0aHViLmNvbS9nYWJyaWVsL2NlZWEwZjNiNjc1YmFjMDM0MjU0NzI2OTIyNzNjZjUyIn0=",
      "kid": "kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c",
      "seq": 1,
      "ts": 1580344349629,
      "type": "user"
    },
    {
      ".sig": "hF2w6ccdzwwgYyzYLyOqH1jMt3ChfH7JRN8Vs/nm+b1NhXtMRe7TRENx0QGn6B0v4x1zUf4epIBnaoCvj6JUAw==",
      "data": "eyJrIjoia2V4MWUyNnJxOXZyaGp6eXhoZXAwYzVseTZydWRxN20yY2V4amxrZ2tubDJ6NGxxZjhnYTN1YXN6M3M0OG0iLCJuIjoiZ2FicmxoIiwic3EiOjEsInNyIjoidHdpdHRlciIsInUiOiJodHRwczovL3R3aXR0ZXIuY29tL2dhYnJsaC9zdGF0dXMvMTIyMjcwNjI3Mjg0OTM5MTYxNiJ9",
      "kid": "kex1e26rq9vrhjzyxhep0c5ly6rudq7m2cexjlkgknl2z4lqf8ga3uasz3s48m",
      "seq": 1,
      "ts": 1580350874625,
      "type": "user"
    }
  ],
  "version": "1580350875072"
}
```

| Response   | Description                     |
| ---------- | ------------------------------- |
| statements | Statements.                     |
| version    | Current version.                |
| md         | Metadata (if asked to include). |
