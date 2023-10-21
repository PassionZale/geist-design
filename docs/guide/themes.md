# 主题

`@whouu/geist-design` 也支持 **暗黑模式**。你可以在任何时间使用非常简单的 API 完成切换，不需要任何第三方样式或库。

## 切换主题

你可以在任意处使用此 `API`，所有的组件都会自动更新以适应主题。

```js
import GeistDesign from '@whouu/geist-design'

GeistDesign.theme.enableLight()
GeistDesign.theme.enableDark()
```

## 定制主题

你也可以在自己的项目中覆盖这些主题变量：

### 第一步

在 [这里](https://github.com/PassionZale/geist-design/blob/main/src/_styles/themes/default/index.scss) 阅读所有的 CSS 变量

### 第二步

设置全局 CSS 变量覆盖默认值：

```css
html {
  --accents-1: #fff;
}
```

## 定制组件样式

`Vue` 原生支持在组件上添加 `css class`, 你不需要任何 hack 就可以轻易的修改组件样式：

```vue
<template>
  <g-card class="mycard"> Gesit Design. </g-card>
</template>

<style lang="css" scoped>
  .mycard {
    font-size: 20px;
  }
</style>
```
