<script setup lang="ts">
  defineOptions({ name: 'ex-layout-column' })
</script>

<template>
  <g-row>
    <g-col class="first"></g-col>
    <g-col class="last"></g-col>
  </g-row>

  <g-row style="margin-top: 20px">
    <g-col class="first" span="8"></g-col>
    <g-col class="last"></g-col>
  </g-row>
</template>

<style lang="scss" scoped>
  .first,
  .last {
    background: var(--accents-2);
    padding: var(--geist-gap-half);
    border-radius: var(--geist-radius);
  }

  .last {
    background: var(--accents-4);
  }
</style>
