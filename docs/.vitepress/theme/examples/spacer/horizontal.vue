<script setup lang="ts">
  defineOptions({ name: 'ex-spacer-horizontal' })
</script>

<template>
  <div class="container">
    <div class="item"></div>
    <g-spacer :x="3" />
    <div class="item"></div>
    <g-spacer :x="3" />
    <div class="item"></div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
  }

  .item {
    height: 30px;
    flex: 1;
    background: var(--geist-foreground);
  }
</style>
