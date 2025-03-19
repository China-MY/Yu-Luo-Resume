import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "骆裕",
      description: "骆裕介绍",
    },
  },

  theme: hopeTheme({
    hostname: "https://resume.myxz.fun",
    favicon: "favicon.jpg",

    author: {
      name: "Yu Luo",
      url: "https://resume.myxz.fun",
    },

    sidebar: false,

    displayFooter: true,
    editLink: false,

    // blog: {
    //   medias: {
    //     Gmail: "mailto:c-shang@iis.u-tokyo.ac.jp",
    //     Email: "mailto:cheng.shang@riken.jp",
    //   },
    // },

    locales: {
      "/": {
        author: {
          name: "骆裕",
          url: "https://resume.myxz.fun",
        },
        navbar: [
          "/",
          {
            text: "个人介绍",
            icon: "circle-info",
            link: "/#个人信息",
          },

          {
            text: "返回博客",
            link: "https://blog.myxz.fun",
          },
        ],

      },
    },

    markdown: {
      align: true,
      hint: false,
    },

    plugins: {
      icon: {
        assets: "fontawesome-with-brands",
      },
      photoSwipe: false,
    },
  }),
});
