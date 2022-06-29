// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  projectName: 'MichelleGuan.github.io',
  organizationName: 'MichelleGuan',
  trailingSlash: false,
  title: "Michelle's Blog",
  tagline: "Tech otakus save the world",
  url: 'https://michelleguan.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  deploymentBranch: 'master',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
        contextualSearch: true,
      },
      navbar: {
        title: 'HomePage',
        items: [
          {
            type: 'doc',
            docId: '/category/ProjectReview',
            position: 'left',
            label: 'Confluence',
          },
          {to: 'blog/Resume', label: 'Resume', position: 'left'},
          {
            href: 'https://github.com/MichelleGuan',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Confluence',
                to: 'docs/category/ProjectReview',
              },
            ],
          },
          {
            title: 'Blog',
            items: [
              {
                label: 'Blog',
                to: 'blog/Resume',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Algorithms Practice',
                to: 'https://github.com/MichelleGuan/Algorithms-and-data-stuctures',
              },
              {
                label: 'Unity UGUI demo',
                href: 'https://github.com/MichelleGuan/Xlua_UGUI_Demo',
              },
              {
                label: 'taxForm_miniApp',
                href: 'https://github.com/MichelleGuan/taxForm_miniApp',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    
};

module.exports = config;
