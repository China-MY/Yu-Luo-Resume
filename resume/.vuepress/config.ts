import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      css: {
        devSourcemap: false,
      },
    },
  }),
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "骆裕",
      description: "骆裕介绍",
    },
  },

  theme: hopeTheme({
    hostname: "https://resume.明裕.top",
    favicon: "favicon.jpg",

    author: {
      name: "Yu Luo",
      url: "https://resume.明裕.top",
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
          url: "https://resume.明裕.top",
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
            link: "https://blog.明裕.top",
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
