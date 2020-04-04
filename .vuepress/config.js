module.exports = {
  title: "keys.pub",
  description: "Cryptographic key management, signing and encryption",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/assets/icons/apple-icon-57x57.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/assets/icons/apple-icon-60x60.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/assets/icons/apple-icon-72x72.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/assets/icons/apple-icon-76x76.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/assets/icons/apple-icon-114x114.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/assets/icons/apple-icon-120x120.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/assets/icons/apple-icon-144x144.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/assets/icons/apple-icon-152x152.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/icons/apple-icon-180x180.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/assets/icons/android-icon-192x192.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/icons/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/assets/icons/favicon-96x96.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/icons/favicon-16x16.png"
      }
    ],
    ["link", { rel: "manifest", href: "/assets/icons/manifest.json" }]
  ],
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
        path: "/docs/cli",
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
        path: "/docs/restapi",
        children: [
          "/docs/restapi/user",
          "/docs/restapi/sigchain",
          "/docs/restapi/errors"
        ]
      },
      {
        title: "Library",
        collapsable: false,
        path: "/docs/lib",
        children: [
          "/docs/lib/encrypt",
          "/docs/lib/decrypt",
          "/docs/lib/noise",
          "/docs/lib/packages"
        ]
      },
      {
        title: "Specs",
        collapsable: false,
        path: "/docs/specs",
        children: [
          "/docs/specs/auth",
          "/docs/specs/keys",
          "/docs/specs/encrypt",
          "/docs/specs/kid",
          "/docs/specs/keyring",
          "/docs/specs/sigchain",
          "/docs/specs/user",
          "/docs/specs/wormhole"
        ]
      },
      {
        title: "Other",
        collapsable: true,
        children: ["/docs/cli/building", "/docs/specs/service"]
      }
    ]
  }
};
