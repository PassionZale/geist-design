import { defineConfig } from 'vitepress'
import { head } from './config/head'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

/**
 * vitepress 配置项文件
 *
 * @see site-config https://vitepress.dev/reference/site-config
 */
export default defineConfig({
  lang: 'zh-cn',

  title: 'Geist Design',

  description: 'Vue3 component library',

  head,

  lastUpdated: true,

  cacheDir: '../../node_modules',

  themeConfig: {
    aside: false,

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PassionZale/geist-design' }
    ],

    lastUpdatedText: '最后更新时间',

    editLink: {
      pattern: 'https://github.com/PassionZale/geist-design/edit/main/docs/:path',
      text: '编辑此页'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Lei Zhang'
    }
  }
})
