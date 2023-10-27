export const sidebar = {
  '/guide/': [
    {
      text: '快速开始',
      items: [
        { text: '什么是 Geist Design', link: '/guide/introduction' },
        { text: '安装', link: '/guide/installation' }
      ]
    },
    {
      text: '定制与主题',
      items: [
        { text: '主题', link: '/guide/themes' },
        { text: '色彩', link: '/guide/colors' },
        { text: '文字排版', link: '/guide/typography' },
        { text: '图标', link: '/guide/icons' }
      ]
    }
  ],
  '/components/': [
    {
      text: '组件',
      items: [
        { text: 'Avatar', link: '/components/avatar' },
        { text: 'Button', link: '/components/button' },
        { text: 'Card', link: '/components/card' },
        { text: 'Code', link: '/components/code' },
        { text: 'Badge', link: '/components/badge' },
        { text: 'Link', link: '/components/link' },
        { text: 'Dot', link: '/components/dot' },
        { text: 'Description', link: '/components/description' },
        { text: 'Display', link: '/components/display' } /** PLOP_INJECT_SIDEBAR */
      ]
    }
  ]
}
