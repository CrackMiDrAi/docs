import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: '破解教程',
      icon: 'desktop',
      prefix: "破解教程/",
      link: "破解教程",
      children: [
        {
          text: '小白向教程',
          icon: 'bookmark',
          link: '小白向教程',
        },
        {
          text: '更新日志',
          icon: 'file-lines',
          link: 'CHANGELOG',
        },
        {
          text: '鸣谢',
          icon: 'heart',
          link: 'CREDITS',
        }
      ]
    },
    {
      text: '互助文档',
      icon: 'book',
      prefix: '互助文档/',
      link: '互助文档/',
      children: [
        {
          text: '常见问题',
          icon: 'question',
          link: '常见问题',
        },
        {
          text: '进阶问题',
          icon: 'truck-fast',
          link: '进阶问题',
        },
        {
          text: '代刷问题',
          icon: 'money-bill',
          link: '代刷问题',
        }
      ],
    },
    {
      text: '各种链接',
      icon: 'link',
      prefix: '各种链接/',
      link: '各种链接/',
      children: [
        {
          text: 'GSI',
          icon: 'fa-brands fa-google',
          link: '各种 GSI',
        },
        {
          text: 'Magisk 模块',
          icon: 'masks-theater',
          link: '各种Magisk模块'
        }
      ],
    },
  ],
});
