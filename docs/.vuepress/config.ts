import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "CrackMiDrAi Docs",
  description: "小米小爱老师破解公共文档",

  theme,
  head: [
    [ 'script', { src: '/referrer-detect.js' } ],
  ],

  host: '0.0.0.0',
  port: 6800,
});
