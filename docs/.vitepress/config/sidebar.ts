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
        {
          text: '通用',
          items: [
            { text: 'Button <small>按钮</small>', link: '/components/button' },
            { text: 'Code <small>代码</small>', link: '/components/code' },
            {
              text: 'Icons <small>图标</small>',
              link: '/components/icons'
            } /** PLOP_INJECT_SIDEBAR_GENERAL */
          ]
        },
        {
          text: '布局',
          items: [
            {
              text: 'Spacer <small>占位符</small>',
              link: '/components/spacer'
            } /** PLOP_INJECT_SIDEBAR_LAYOUT */
          ]
        },
        {
          text: '容器',
          items: [
            { text: 'Card <small>卡片</small>', link: '/components/card' },
            {
              text: 'Fieldset <small>控件组</small>',
              link: '/components/fieldset'
            } /** PLOP_INJECT_SIDEBAR_CONTAINER */
          ]
        },
        {
          text: '表单',
          items: [
            {
              text: 'Textarea <small>文本输入框</small>',
              link: '/components/textarea'
            } /** PLOP_INJECT_SIDEBAR_FORM */
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'Avatar <small>头像</small>', link: '/components/avatar' },
            { text: 'Badge <small>徽章</small>', link: '/components/badge' },
            { text: 'Description <small>描述</small>', link: '/components/description' },
            { text: 'Display <small>陈列框</small>', link: '/components/display' },
            { text: 'Dot <small>点</small>', link: '/components/dot' },
            { text: 'Keyboard <small>键盘</small>', link: '/components/keyboard' },
            { text: 'Tag <small>标签</small>', link: '/components/tag' },
            {
              text: 'User <small>用户</small>',
              link: '/components/user'
            } /** PLOP_INJECT_SIDEBAR_DATA_DISPLAY */
          ]
        },
        {
          text: '反馈',
          items: [
            {
              text: 'Toast <small>通知</small>',
              link: '/components/toast'
            } /** PLOP_INJECT_SIDEBAR_FEEDBACK */
          ]
        },
        {
          text: '导航',
          items: [
            {
              text: 'Link <small>链接</small>',
              link: '/components/link'
            } /** PLOP_INJECT_SIDEBAR_NAVIGATION */
          ]
        },
        {
          text: '其他',
          items: [
            {
              text: 'Snippet <small>片段</small>',
              link: '/components/snippet'
            } /** PLOP_INJECT_SIDEBAR_OTHERS */
          ]
        }
      ]
    }
  ]
}
