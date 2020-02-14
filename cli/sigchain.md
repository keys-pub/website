# Sigchain

## `keys sigchain show`

View a sigchain.

```shell
keys sigchain show kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c
```

```json
{
  ".sig": "RZhVfrd6IpHFdUbn3hmxKh0UQpzjdkRPBZHE3Ag8sZHOqGvDG1wfRKZQ5vuAJDXQCuDoe6uGX1+xnk9qd8sPDw==",
  "data": "eyJrIjoia2V4MW1uc2VnMjh4dTZnM2o0d3VyN2hxd2s4YWczZnUzcG1yMnQ1bHluYzI2eG1nZmYwZHRyeXF1cGY4MGMiLCJuIjoiZ2FicmllbCIsInNxIjoxLCJzciI6ImdpdGh1YiIsInUiOiJodHRwczovL2dpc3QuZ2l0aHViLmNvbS9nYWJyaWVsL2NlZWEwZjNiNjc1YmFjMDM0MjU0NzI2OTIyNzNjZjUyIn0=",
  "kid": "kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c",
  "seq": 1,
  "ts": 1580344349629,
  "type": "user"
}
```

## `keys sigchain statement add`

Add to sigchain. Anything added to a sigchain is public.

```shell
echo "test" | keys sigchain statement add -kid kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c
```

## `keys sigchain statement revoke`

Revoke statement.

```shell
keys sigchain statement revoke -kid kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c -seq 2
```
