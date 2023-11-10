<script setup lang="ts">
  defineOptions({ name: 'ex-button-type' })
</script>

<template>
  <div class="buttons">
    <g-button disabled>Disabled</g-button>
    <g-button shadow>Shadow</g-button>
    <g-button shadow type="success">Shadow with Type</g-button>
    <g-button circular>Circular</g-button>
  </div>
</template>

<style lang="scss" scoped>
  .buttons > button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
