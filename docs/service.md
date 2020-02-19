# Service Architecture

The command line utility runs as a service (keysd) on your local machine exposed via gRPC. The command line client (keys) and desktop app connect to this local service.

Access is over HTTPS on 127.0.0.1 on port 22405 and is restricted to clients that are authorized (via an auth token).

The service is designed to allow access only to explicitly authorized clients and protects key material and
cryptographic operations by using platform [keyring](specs/keyring.md) APIs. The command line client authorizes via
`keys auth` which uses the gRPC calls AuthSetup or AuthUnlock.

For more details on service authentication, see [specs/auth](specs/auth.md).
