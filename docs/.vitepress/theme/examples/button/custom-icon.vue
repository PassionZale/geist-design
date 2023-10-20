<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'

  defineOptions({ name: 'ex-button-custom-icon' })

  // svg 由 vite-svg-loader 加载
  const GeistDesign = defineAsyncComponent(() => import('../../assets/icon.svg'))
</script>

<template>
  <g-button :icon="GeistDesign">Custom Icon</g-button>
</template>
