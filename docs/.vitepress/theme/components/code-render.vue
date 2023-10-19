<script setup lang="ts">
  defineOptions({ name: 'ex-code-render' })

  defineProps({ name: String })
</script>

<template>
  <component :is="name || 'div'" />
</template>

<style lang="scss">
  pre {
    overflow-y: auto;
  }
</style>
