<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-progress-fixed' })

  const percentage = ref(0)
</script>

<template>
  <g-progress :value="percentage" fix="top" :colors="[{ value: 0, color: '#409eff' }]" />

  <g-button size="small" @click="percentage += 20">加载进度条</g-button>
</template>
