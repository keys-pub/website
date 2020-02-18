# User

A user is an account on another service (like Github or Twitter) linked to a key with a signed
[Statement](specs/sigchain.md#Statement).

This allows others to search and verify a key as belonging to a user/account on a 3rd party service.

The steps are:

1. Generate a user signed statement (saltpack armored) with the name, service and key identifier.
2. Place the statement on the service at an URL controlled by the account.
3. Save a signed statement in the sigchain including all the information about including the URL on the service where to find the signed statement.

## Statement

The signed statement signs the following fields:

| Fields | Description                |
| ------ | -------------------------- |
| `k`    | Key identifier.            |
| `n`    | Username.                  |
| `sr`   | Service (github, twitter). |

For example,

```json
{
  "k": "kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c",
  "n": "gabriel",
  "sr": "github"
}
```

You can create a signed user statement from the command line:

```shell
keys user sign -kid "kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c" \
-service "github" -name "gabriel"
```

```txt
BEGIN MESSAGE.
kdZaJI1U5AS7G6i VoUxdP8OtPzEoM6 pYhVl0YQZJnotVE wLg9BDb5SUO05pm
abUSeCvBfdPoRpP J8wrcF5PP3wTCKq 6Xr2MZHgg6m2Qal gJCD6vMqlBQfIg6
QsfB27aP5DMuXlJ AUVIAvMDHIoptmS riNMzfpwBjRShVL WH70a0GOEqD6L8b
kC5EFOwCedvHFpc AQVqULHjcSpeCfZ EIOaQ2IP.
END MESSAGE.
```

Place this user signed statement at a location or the service, for example, [https://gist.github.com/gabriel/02fae653e737bdeb7c730da669c949b1/edit](https://gist.github.com/gabriel/02fae653e737bdeb7c730da669c949b1/edit).

## Sigchain Statement

After placing the signed statement at an URL, saved a signed statement in the sigchain with the additional information.

| Fields | Description                |
| ------ | -------------------------- |
| `k`    | Key identifier.            |
| `n`    | Username.                  |
| `sq`   | Sigchain seq (position).   |
| `sr`   | Service (github, twitter). |
| `u`    | URL to signed statement.   |

For example,

```json
{
  "k": "kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c",
  "n": "gabriel",
  "sq": 2,
  "sr": "github",
  "u": "https://gist.github.com/gabriel/02fae653e737bdeb7c730da669c949b1"
}
```

You can save to the a user statement to the sigchain from the command line:

```shell
keys user add -kid "kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c" \
-service "github" -name "gabriel" \
-url "https://gist.github.com/gabriel/02fae653e737bdeb7c730da669c949b1"
```

Using the kid and seq (sigchain position), you can lookup the sigchain item to find the user signed statement:

```shell
curl https://keys.pub/sigchain/kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c/1
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

Or use the command line:

```shell
keys sigchain show -kid kex1mnseg28xu6g3j4wur7hqwk8ag3fu3pmr2t5lync26xmgff0dtryqupf80c -seq 1
```

## Revoke

You can remove the user account by revoking the sigchain statement or removing the signed statement at the URL.
