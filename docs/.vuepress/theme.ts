import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://docs.midrai.cn",
  logo: "/logo.svg",
  logoDark: "/logo-dark.svg",
  repo: 'CrackMiDrAi/docs',

  iconAssets: "fontawesome-with-brands",
  print: false,

  lastUpdated: true,
  contributors: true,
  docsDir: 'docs',
  docsBranch: 'main',

  navbar,
  sidebar,

  copyright: '<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"><img src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png" alt="CC BY-NC-SA 4.0 Badge" /></a>&nbsp;<a href="https://www.gnu.org/licenses/agpl-3.0" target="_blank"><img src="https://www.gnu.org/graphics/agplv3-88x31.png" alt="AGPL 3.0 Badge" /></a>',
  license: '<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>&nbsp;|&nbsp;<a href="https://www.gnu.org/licenses/agpl-3.0" target="_blank">AGPL 3.0</a>',
  footer: `CrackMiDrAi Team 2021-${(new Date()).getFullYear()}`,
  displayFooter: true,

  // hotReload: true,

  plugins: {
    git: true,
    components: {
      components: ["Badge", "VPCard"],
    },

    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },

    searchPro: {
      indexContent: true,
      autoSuggestions: true,
    },
  },
});
