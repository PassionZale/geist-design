<script setup lang="ts">
  defineOptions({ name: 'ex-spacer-vertical' })
</script>

<template>
  <div class="container">
    <div class="item-1"></div>
    <g-spacer />
    <div class="item-2"></div>
    <g-spacer :y="2" />
    <div class="item-3"></div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
  }

  .item {
    &-1 {
      height: 30px;
      background: var(--geist-foreground);
    }

    &-2 {
      height: 60px;
      background: var(--geist-foreground);
    }

    &-3 {
      height: 90px;
      background: var(--geist-foreground);
    }
  }
</style>
