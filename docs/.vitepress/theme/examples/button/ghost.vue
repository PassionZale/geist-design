<script setup lang="ts">
  defineOptions({ name: 'ex-button-ghost' })
</script>

<template>
  <div class="buttons">
    <g-button ghost>Basic</g-button>
    <g-button ghost type="primary">Primary</g-button>
    <g-button ghost type="success">Success</g-button>
    <g-button ghost type="warning">Warning</g-button>
    <g-button ghost type="danger">Danger</g-button>
    <g-button ghost type="abort">Abort</g-button>
  </div>
</template>

<style lang="scss" scoped>
  .buttons > button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
