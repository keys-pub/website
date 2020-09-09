# Sigchain

The _keys.pub_ server provides an API for publishing and accessing [sigchains](/docs/specs/sigchain.md).

## GET /sigchain/:kid

Get a sigchain for a key.

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

The body content should be a sigchain [Statement](../specs/sigchain.md#statement).

```shell
curl -X PUT -d '{".sig":"RZhVfrd6IpHFdUbn3hmxKh0UQpzjdkRPBZHE3Ag8sZHOqGvDG1wfRKZQ5vuAJDXQCuDoe6uGX1+xnk9qd8sPDw==","data":"eyJrIjoia2V4MW1uc2VnMjh4dTZnM2o0d3VyN2hxd2s4YWczZnUzcG1yMnQ1bHluYzI2eG1nZmYwZHRyeXF1cGY4MGMiLCJuIjoiZ2FicmllbCIsInNxIjoxLCJzciI6ImdpdGh1YiIsInUiOiJodHRwczovL2dpc3QuZ2l0aHViLmNvbS9nYWJyaWVsL2NlZWEwZjNiNjc1YmFjMDM0MjU0NzI2OTIyNzNjZjUyIn0=","kid":"kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c","seq":1,"ts":1580344349629,"type":"user"}' \
https://keys.pub/sigchain/kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c/1
```

It must be a valid signed sigchain statement by the specified key. If it exists already, returns 409 error.
The max size for a signed message is 16KB.
