<script setup lang="ts">
  defineOptions({ name: 'ex-button-size' })
</script>

<template>
  <div class="buttons">
    <g-button size="mini">Mini</g-button>
    <g-button size="small">Small</g-button>
    <g-button>Default</g-button>
    <g-button size="big">Big</g-button>
    <g-button size="small" auto>auto width</g-button>
  </div>
</template>

<style lang="scss" scoped>
  .buttons > button {
    display: block;
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
