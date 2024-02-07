// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext")
const consts = require("./src/config/consts")
const customFields = require("./src/config/customFields")
const ssrTemplate = require("./src/internals/ssr.template")
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: customFields.title,
  tagline: customFields.tagLine,
  favicon: "img/favicon.ico",
  trailingSlash: false,
  // Set the production url of your site here
  url: customFields.productionUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  customFields: customFields,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: customFields.organizationName, // Usually your GitHub org/user name.
  projectName: customFields.projectName, // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    require.resolve("./plugins/optimize/index"),
    require.resolve("./plugins/manifest/index"),
    /* require.resolve("./plugins/webpack-ts/index"), */
    [
      "@docusaurus/plugin-pwa",
      {
        pwaHead: [
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.webmanifest",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#030711",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#030711",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "client",
        path: "client",
        routeBasePath: "client",
        breadcrumbs: true,
        sidebarPath: require.resolve("./sidebarsClient.js"),
        versions: {
          current: {
            label: "Client API",
            path: "/",
          },
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "server",
        path: "server",
        routeBasePath: "server",
        breadcrumbs: true,
        sidebarPath: require.resolve("./sidebarsServer.js"),
        versions: {
          current: {
            label: "Server API",
            path: "/",
          },
        },
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          /* sidebarPath: require.resolve('./sidebars.js'), */
          routeBasePath: "/docs", // Serve the docs at the site's root

          sidebarPath: require.resolve("./sidebars.js"),
        },

        blog: {
          blogSidebarTitle: "All posts",
          blogListComponent: "@theme/BlogListPage",
          blogSidebarCount: 0,
          blogDescription:
            "Your go-to resource for the latest updates on Backend as a Service and Serverless technologies. We cover everything from serverless, to the no-code and how-tos.",
          postsPerPage: 12,
          feedOptions: {
            type: "all",
            copyright: customFields.copyright,
          },
          routeBasePath: "/blog", // Serve the blog at the site's root
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.7,
          ignorePatterns: ["/blog/tags/**"],
          filename: "sitemap.xml",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/meta.jpg",
      announcementBar: {
        id: "support_us",
        content:
          'Agnost is being developed and will be launched soon. Help us shape the future of Agnost by visiting <a target="_blank" rel="noopener noreferrer" href="https://github.com/orgs/cloud-agnost/discussions">Github</a>.',
        backgroundColor: "#030711",
        textColor: "#fff",
        isCloseable: false,
      },

      navbar: {
        logo: {
          alt: "Agnost - Open Source Kubernetes Development Platform",
          src: "img/logo.svg",
          srcDark: "img/logo_dark.svg",
          width: 120,
          height: 50,
        },
        items: [
          /*           {
            to: "https://github.com/orgs/cloud-agnost/discussions",
            label: "⚡️ Feature Requests",
            position: "left",
          }, */
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Platform Guide",
          },
          {
            type: "docsVersionDropdown",
            id: "client",
            path: "/client",
            routeBasePath: "client",
            include: ["**/*.md"],
            docsPluginId: "client",
            position: "left",
            label: "Client",
          },
          {
            type: "docsVersionDropdown",
            id: "server",
            docsPluginId: "server",
            position: "left",
            label: "Server",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/cloud-agnost",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Platform",
            items: [
              {
                label: "Why Agnost?",
                to: "/",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/cloud-agnost",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/AgnostDev",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Agnost, Inc. Built with ❤️.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["yaml", "docker"],
        defaultLanguage: "js",
        plugins: ["line-numbers", "show-language"],
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
}
module.exports = {
  ...config,
  ssrTemplate: ssrTemplate(config),
}
