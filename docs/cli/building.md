# Building from Source

```shell
git clone https://github.com/keys-pub/keysd
cd keysd/service

# Service keysd
go install ./keysd
# Client keys
go install ./keys
# Plugin fido2.so (optional)
go build -buildmode=plugin ./fido2 && mv fido2.so `go env GOPATH`/bin
```

On macOS, you should codesign the binaries:

```shell
> codesign --verbose --sign "Developer ID Application: ????" `go env GOPATH`/bin/keysd
> codesign --verbose --sign "Developer ID Application: ????" `go env GOPATH`/bin/keys
> codesign --verbose --sign "Developer ID Application: ????" `go env GOPATH`/bin/fido2.so
```

## Using goreleaser

For building locally into `./dist`.

```shell
git clone https://github.com/keys-pub/keysd
cd keysd/service

# For macOS, windows
goreleaser --snapshot
# For linux
goreleaser --snapshot config=.goreleaser.linux.yml
```
