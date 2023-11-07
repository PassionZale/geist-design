<script setup lang="ts">
  defineOptions({ name: 'ex-layout-compose' })
</script>

<template>
  <g-row gutter="15">
    <g-col span="16"><div class="example"></div></g-col>
    <g-col span="8"><div class="example"></div></g-col>
  </g-row>

  <g-row gutter="15" style="margin-top: 20px">
    <g-col span="8"><div class="example"></div></g-col>
    <g-col span="8"><div class="example"></div></g-col>
    <g-col span="4"><div class="example"></div></g-col>
    <g-col span="4"><div class="example"></div></g-col>
  </g-row>

  <g-row gutter="15" style="margin-top: 20px">
    <g-col span="5"><div class="example"></div></g-col>
    <g-col span="16"><div class="example"></div></g-col>
    <g-col span="4"><div class="example"></div></g-col>
  </g-row>
</template>

<style lang="scss" scoped>
  .example {
    background: var(--geist-success);
    padding: var(--geist-gap-half);
    border-radius: var(--geist-radius);
    color: var(--geist-background);
    font-size: 0.75rem;
  }
</style>
