<script setup lang="ts">
  defineOptions({ name: 'ex-layout-spacing' })
</script>

<template>
  <g-row gutter="15">
    <g-col><div class="example"></div></g-col>
    <g-col><div class="example"></div></g-col>
    <g-col><div class="example"></div></g-col>
  </g-row>

  <g-row gutter="15" style="margin-top: 20px;">
    <g-col><div class="example"></div></g-col>
    <g-col><div class="example"></div></g-col>
    <g-col><div class="example"></div></g-col>
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