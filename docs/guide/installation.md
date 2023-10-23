# 安装

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

