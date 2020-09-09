# Service (gRPC)

The keysd binary runs as a service on your local machine exposed via gRPC.
The command line client (keys) and desktop app connect to this local service.

The service is designed to allow access only to explicitly authorized clients.
The command line client authorizes via `keys auth` which uses the gRPC calls `AuthSetup` or `AuthUnlock`.

Access is over HTTPS on 127.0.0.1 on port 22405 with a certificate generated.
You can find the certificate in the app support directory, for example,
on macOS at `~/Library/Application Support/Keys/cert.pem`.

For more details on service authentication, see [Auth](auth.md).
