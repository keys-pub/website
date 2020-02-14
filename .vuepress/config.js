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
        children: ["/install"]
      },
      {
        title: "Command Line",
        path: "/cli",
        collapsable: false,
        children: [
          "/cli/auth",
          "/cli/keys",
          "/cli/encrypt",
          "/cli/sign",
          "/cli/user"
        ]
      },
      {
        title: "REST API",
        path: "/restapi",
        collapsable: false,
        children: ["/restapi/user", "/restapi/sigchain"]
      },
      {
        title: "Specs",
        path: "/specs",
        collapsable: false,
        children: ["/specs/keys", "/specs/sigchain", "/specs/user"]
      },
      {
        title: "Other",
        collapsable: true,
        children: ["/building", "/service", "/packages"]
      }
    ]
  }
};
