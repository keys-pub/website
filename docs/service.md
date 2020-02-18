# Service Architecture

Keys.pub runs as a local service (keysd) exposed via gRPC. It includes a command line client (keys) which connects to a locally
running service.

Access to the service is over HTTPS on 127.0.0.1 on port 22405 and is restricted to clients that are authorized (via an
auth token).

The service is designed to allow access only to explicitly authorized clients and protects key material and
cryptographic operations by using platform keychain/credentials/keyring APIs. The command line client authorizes via
`keys auth` which uses the gRPC calls AuthSetup or AuthUnlock.

For more details on service authentication, see [specs/auth](specs/auth.md).
