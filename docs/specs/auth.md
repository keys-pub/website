# Auth

In order to use the keysd local (gRPC) service, you need to authenticate using `keys auth` or the `AuthSetup` or `AuthUnlock` rpc.

Successfully authenticating with the rpc returns a token which the client should specify in the Authorization header.
Auth tokens are stored in memory by the service, and are only usable until the service exits or `keys lock` or `AuthLock` rpc is called.

