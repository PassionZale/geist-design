# 图标

`@whouu/geist-design` 使用 `@whouu/geist-design-icons` 作为图标提供商。

所有的图标都会自动跟随主题变化。

:::warning
如果你需要图标，需要自行安装 `@whouu/geist-design-icons` 库。
:::

## 安装图标库

1. 运行命令: <g-code>npm i @whouu/geist-design-icons</g-code>

2. 随后尝试直接使用图标组件：

```vue
<template>
  <g-icon-github />
</template>

<script setup lang="ts">
  import { GIconGithub } from '@whouu/geist-design-icons'
</script>
```

## 功能特色

1. 所有的图标都是高质量的，且都是一个 Vue 组件；
2. 支持单个按需引入图标；
3. 数量巨大，包含 [feathericons](https://feathericons.com/) 的 300个 svg 图标；
