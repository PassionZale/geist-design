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

## ✨ 特性

- [x] Avatar / 头像
- [x] Badge / 徽章
- [x] Button / 按钮
- [x] Card / 卡片
- [ ] Checkbox / 多选框
- [x] Code / 代码
- [ ] Collapse / 折叠框
- [x] Description / 描述
- [ ] Dialog / 对话框
- [x] Display / 陈列框
- [x] Dot / 点
- [x] Fieldset / 控件组
- [ ] Files / 文件
- [ ] Grid / 栅格
- [ ] Image / 图片
- [x] Icons / 图标
- [x] Input / 输入框
- [x] Keyboard / 键盘
- [ ] Layout / 布局
- [x] Link / 链接
- [ ] More / 更多
- [ ] Note / 提示
- [ ] Popover / 下拉菜单
- [ ] Progress / 进度条
- [ ] Radio / 单选框
- [ ] Rate / 评级
- [ ] Select / 选择器
- [ ] Slider / 滑块
- [x] Snippet / 片段
- [x] Spacer / 占位符
- [ ] Spinner / 指示器
- [ ] Switcher / 切换按钮
- [ ] Table / 表格
- [ ] Tabs / 选项卡
- [x] Tag / 标签
- [x] Textarea / 文本输入框
- [x] Toast / 通知
- [ ] Toggle / 开关
- [ ] Tooltip / 提示框
- [x] User / 用户
