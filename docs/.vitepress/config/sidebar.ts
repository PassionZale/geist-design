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
            { text: '按钮 <small>Button</small>', link: '/components/button' },
            { text: '代码 <small>Code</small>', link: '/components/code' },
            {
              text: '图标 <small>Icons</small>',
              link: '/components/icons'
            } /** PLOP_INJECT_SIDEBAR_GENERAL */
          ]
        },
        {
          text: '布局',
          items: [
            {
              text: '占位符 <small>Spacer</small>',
              link: '/components/spacer'
            },
            {
              text: '栅格 <small>Grid</small>',
              link: '/components/grid'
            },
            {
              text: '布局 <small>Layout</small>',
              link: '/components/layout'
            } /** PLOP_INJECT_SIDEBAR_LAYOUT */
          ]
        },
        {
          text: '容器',
          items: [
            { text: '卡片 <small>Card</small>', link: '/components/card' },
            {
              text: '控件组 <small>Fieldset</small>',
              link: '/components/fieldset'
            },
            {
              text: '折叠框 <small>Collapse</small>',
              link: '/components/collapse'
            } /** PLOP_INJECT_SIDEBAR_CONTAINER */
          ]
        },
        {
          text: '表单',
          items: [
            {
              text: '输入框 <small>Input</small>',
              link: '/components/input'
            },
            {
              text: '文本输入框 <small>Textarea</small>',
              link: '/components/textarea'
            },
            {
              text: '滑块 <small>Slider</small>',
              link: '/components/slider'
            } /** PLOP_INJECT_SIDEBAR_FORM */
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: '头像 <small>Avatar</small>', link: '/components/avatar' },
            { text: '徽章 <small>Badge</small>', link: '/components/badge' },
            { text: '描述 <small>Description</small>', link: '/components/description' },
            { text: '陈列框 <small>Display</small>', link: '/components/display' },
            { text: '点 <small>Dot</small>', link: '/components/dot' },
            { text: '键盘 <small>Keyboard</small>', link: '/components/keyboard' },
            { text: '标签 <small>Tag</small>', link: '/components/tag' },
            {
              text: '用户 <small>User</small>',
              link: '/components/user'
            },
            {
              text: '图片 <small>Image</small>',
              link: '/components/image'
            },
            {
              text: '文件 <small>Files</small>',
              link: '/components/files'
            } /** PLOP_INJECT_SIDEBAR_DATA_DISPLAY */
          ]
        },
        {
          text: '反馈',
          items: [
            {
              text: '通知 <small>Toast</small>',
              link: '/components/toast'
            },
            {
              text: '提示 <small>Note</small>',
              link: '/components/note'
            },
            {
              text: '评级 <small>Rate</small>',
              link: '/components/rate'
            },
            {
              text: '指示器 <small>Spinner</small>',
              link: '/components/spinner'
            },
            {
              text: '进度条 <small>Progress</small>',
              link: '/components/progress'
            },
            {
              text: '更多 <small>More</small>',
              link: '/components/more'
            },
            {
              text: '对话框 <small>Dialog</small>',
              link: '/components/dialog'
            } /** PLOP_INJECT_SIDEBAR_FEEDBACK */
          ]
        },
        {
          text: '导航',
          items: [
            {
              text: '链接 <small>Link</small>',
              link: '/components/link'
            },
            {
              text: '选项卡 <small>Tabs</small>',
              link: '/components/tabs'
            } /** PLOP_INJECT_SIDEBAR_NAVIGATION */
          ]
        },
        {
          text: '其他',
          items: [
            {
              text: '片段 <small>Snippet</small>',
              link: '/components/snippet'
            } /** PLOP_INJECT_SIDEBAR_OTHERS */
          ]
        }
      ]
    }
  ]
}
