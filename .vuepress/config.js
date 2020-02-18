module.exports = {
  title: "keys.pub",
  description: "Cryptographic key management, signing and encryption",
  themeConfig: {
    repo: "keys-pub/keys",
    docsRepo: "keys-pub/website",
    sidebar: [
      {
        title: "Guide",
        path: "/",
        collapsable: false,
        sidebarDepth: 1,
        children: ["/docs/install"]
      },
      {
        title: "Command Line",
        path: "/docs/cli",
        collapsable: false,
        children: [
          "/docs/cli/auth",
          "/docs/cli/keys",
          "/docs/cli/encrypt",
          "/docs/cli/sign",
          "/docs/cli/user"
        ]
      },
      {
        title: "REST API",
        path: "/docs/restapi",
        collapsable: false,
        children: ["/docs/restapi/user", "/docs/restapi/sigchain"]
      },
      {
        title: "Specs",
        path: "/docs/specs",
        collapsable: false,
        children: [
          "/docs/specs/auth",
          "/docs/specs/keyring",
          "/docs/specs/keys",
          "/docs/specs/kid",
          "/docs/specs/sigchain",
          "/docs/specs/user"
        ]
      },
      {
        title: "Other",
        collapsable: true,
        children: ["/docs/building", "/docs/service", "/docs/packages"]
      }
    ]
  }
};
