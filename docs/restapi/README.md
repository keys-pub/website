# REST API

The API endpoint is [keys.pub](https://keys.pub/).

- [User](user.md)
- [Sigchain](sigchain.md)
- [Errors](errors.md)

| Resource                                                | Method | Description                                                                                                          |
| ------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| [/user/search](user.md#get-search)                      | GET    | User search.                                                                                                         |
| [/sigchain/:kid](sigchain.md#get-sigchain-kid)          | GET    | Get a sigchain.                                                                                                      |
| [/sigchain/:kid/:seq](sigchain.md#put-sigchain-kid-seq) | PUT    | Put a sigchain entry. Must be a valid signed sigchain statement by the key. If it exists already, returns 409 error. |
| [/sigchains](sigchain.md#get-sigchains)                 | GET    | Get all sigchains.                                                                                                   |
