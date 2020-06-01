# Building from Source

```shell
git clone https://github.com/keys-pub/keys-ext
cd keys-ext/service

# Service keysd
go install ./keysd
# Client keys
go install ./keys

# FIDO2 plugin (optional)
cd ../auth/rpc/plugin
go build -buildmode=plugin -o fido2.so && mv fido2.so `go env GOPATH`/bin
```

On macOS, you should codesign the binaries:

```shell
codesign --verbose --sign "Developer ID Application: ????" `go env GOPATH`/bin/keysd
codesign --verbose --sign "Developer ID Application: ????" `go env GOPATH`/bin/keys
codesign --verbose --sign "Developer ID Application: ????" `go env GOPATH`/bin/fido2.so
```

## Using goreleaser

For building locally into `./dist`.

```shell
git clone https://github.com/keys-pub/keys-ext
cd keys-ext/service

# For macOS, windows
goreleaser --snapshot
# For linux
goreleaser --snapshot config=.goreleaser.linux.yml

# FIDO2 plugin (optional)
cd ../auth/rpc/plugin
goreleaser --snapshot
```
