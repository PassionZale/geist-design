<script setup lang="ts">
  defineOptions({ name: 'ex-grid-basic' })
</script>

<template>
  <g-grid container justify-content="center" :spacing="3">
    <g-grid :xs="6">
      <g-card shadow />
    </g-grid>

    <g-grid :xs="6">
      <g-card shadow />
    </g-grid>

    <g-grid :xs="6">
      <g-card shadow />
    </g-grid>
  </g-grid>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100px;
}
</style>
