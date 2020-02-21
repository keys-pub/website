module.exports = {
  title: "keys.pub",
  description: "Cryptographic key management, signing and encryption",
  themeConfig: {
    repo: "keys-pub/keys",
    docsRepo: "keys-pub/website",
    sidebar: [
      {
        title: "Guide",
        collapsable: false,
        path: "/"
      },
      {
        title: "Desktop",
        collapsable: false,
        children: ["/docs/desktop/install"]
      },
      {
        title: "Command Line",
        collapsable: false,
        children: [
          "/docs/cli/install",
          "/docs/cli/auth",
          "/docs/cli/keys",
          "/docs/cli/encrypt",
          "/docs/cli/sign",
          "/docs/cli/user"
        ]
      },
      {
        title: "REST API",
        collapsable: false,
        children: [
          "/docs/restapi/user",
          "/docs/restapi/sigchain",
          "/docs/restapi/errors"
        ]
      },
      {
        title: "Library",
        collapsable: false,
        children: ["/docs/lib/encrypt", "/docs/lib/packages"]
      },
      {
        title: "Specs",
        collapsable: false,
        children: [
          "/docs/specs/auth",
          "/docs/specs/keys",
          "/docs/specs/encrypt",
          "/docs/specs/kid",
          "/docs/specs/keyring",
          "/docs/specs/sigchain",
          "/docs/specs/user"
        ]
      },
      {
        title: "Other",
        collapsable: true,
        children: ["/docs/building", "/docs/service"]
      }
    ]
  }
};
