export const sidebar = {
  '/guide/': {
    base: '/guide/',
    items: [
      {
        text: '快速开始',
        items: [
          { text: '什么是 Geist Design', link: 'introduction' },
          { text: '安装', link: 'installation' }
        ]
      },
      {
        text: '定制与主题',
        items: [
          { text: '主题', link: 'themes' },
          { text: '色彩', link: 'colors' },
          { text: '文字排版', link: 'typography' },
          { text: '图标', link: 'icons' }
        ]
      }
    ]
  },
  '/components/': {
    base: '/components/',
    items: [
      {
        text: '组件',
        items: [{ text: 'Avatar', link: 'avatar' }]
      }
    ]
  }
}
