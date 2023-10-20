<script setup lang="ts">
  defineOptions({ name: 'ex-button-status' })
</script>

<template>
  <div class="buttons">
    <g-button>Basic</g-button>
    <g-button type="primary">Primary</g-button>
    <g-button type="success">Success</g-button>
    <g-button type="warning">Warning</g-button>
    <g-button type="danger">Danger</g-button>
    <g-button type="abort">Abort</g-button>
  </div>
</template>

<style lang="scss" scoped>
  .buttons > button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
