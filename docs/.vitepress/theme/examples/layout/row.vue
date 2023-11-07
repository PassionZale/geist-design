<script setup lang="ts">
  defineOptions({ name: 'ex-layout-row' })
</script>

<template>
  <g-row class="example">
    <span>Container</span>
  </g-row>

  <g-row class="example" style="margin-top: 20px;">
    <span>Container</span>
  </g-row>
</template>

<style lang="scss" scoped>
.example {
  background: var(--geist-success);
  padding: var(--geist-gap-half);
  border-radius: var(--geist-radius);
  color: var(--geist-background);
  font-size: .75rem;
}

</style>