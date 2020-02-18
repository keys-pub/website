# Auth

By default, clients must be authorized to use the service. This prevents other programs on your system from accessing
the service without permission.

## `keys auth`

The first time you run `keys auth`, it will ask you to setup a password.

```shell
keys auth

OK, let's create a password.
Create a password:
Re-enter the password:

export KEYS_AUTH="AbGNXgc4aK9x1b1pHlOLZ33meXyv796DyWK5jHqiS1R"
# To output an auth token:
#  keys auth -token
#
# To include in a shell environment:
#  export KEYS_AUTH=`keys auth -token`
#
# or using eval:
#  eval $(keys auth)
#
# For Powershell:
#  $env:KEYS_AUTH = (keys auth -token)
```
