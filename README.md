# geist-design

## 🔑 安装

使用 `pnpm` 安装

```shell
pnpm add @whouu/geist-design
```

使用 `npm` 安装

```shell
npm install @whouu/geist-design
```

使用 `yarn` 安装

```shell
yarn add @whouu/geist-design
```

## 🎉 快速上手

在 `main.ts` 中引入下面内容

```ts
import { createApp } from 'vue'
import App from './App.vue'
import GeistDesign from '@whouu/geist-design'
import '@whouu/geist-design/dist/index.css'

createApp(App).use(GeistDesign).mount('#app')
```

## 🪂 快速体验

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@whouu/geist-design/dist/index.css"
  />
</head>

<body>
  <div id="app">
    <g-button auto>欢迎使用 Geist Design！</g-button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@whouu/geist-design/dist/index.umd.js"></script>
  <script>
    const { createApp } = Vue

    const app = createApp()

    app.use(GeistDesign.default)
    app.mount('#app')
  </script>
</body>
```

## 🐳 相关链接

- [官方文档](https://geist-design.lovchun.com)
- [NPM](https://www.npmjs.com/package/@whouu/geist-design)

## 💬 执照

[MIT](https://github.com/PassionZale/geist-design/blob/main/LICENSE)

## ✨ 组件

- 通用
  - [x] 按钮 Button
  - [x] 代码 Code
  - [x] 图标 Icons
- 布局
  - [x] 占位符 Spacer
  - [x] 栅格 Grid
  - [x] 布局 Layout
- 容器
  - [x] 卡片 Card
  - [x] 控件组 Fieldset
  - [x] 折叠框 Collapse
- 表单
  - [x] 输入框 Input
  - [x] 文本输入框 Textarea
  - [x] 滑块 Slider
  - [x] 开关 Toggle
  - [x] 多选框 Checkbox
  - [x] 单选框 Radio
  - [x] 下拉框 Select
- 数据展示
  - [x] 头像 Avatar
  - [x] 徽章 Badge
  - [x] 描述 Description
  - [x] 陈列框 Display
  - [x] 点 Dot
  - [x] 键盘 Keyboard
  - [x] 标签 Tag
  - [x] 用户 User
  - [x] 图片 Image
  - [x] 下拉菜单 Popover
  - [x] 提示框 Tooltip
  - [x] 表格 Table
- 反馈
  - [x] 通知 Toast
  - [x] 提示 Note
  - [x] 评级 Rate
  - [x] 指示器 Spinner
  - [x] 进度条 Progress
  - [x] 更多 More
  - [x] 对话框 Dialog
- 导航
  - [x] 链接 Link
  - [x] 选项卡 Tabs
- 其他
  - [x] 片段 Snippet
