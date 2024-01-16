import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://docs.midrai.cn",
  logo: "/logo.svg",
  repo: 'CrackMiDrAi/docs',

  iconAssets: "fontawesome-with-brands",
  print: false,

  lastUpdated: true,
  contributors: true,
  docsDir: 'docs',
  docsBranch: 'main',

  navbar,
  sidebar,

  copyright: 'Copyright © CrackMiDrAi Team & All contributors',
  license: '<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>',
  footer: '<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"><img src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png" alt="CC BY-NC-SA 4.0 Badge" /></a>',
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
