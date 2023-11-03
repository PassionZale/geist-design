<script setup lang="ts">
  defineOptions({ name: 'ex-grid-hidden' })
</script>

<template>
  <g-grid container justify-content="center" :spacing="3">
    <g-grid :xs="12" :sm="0">
      <g-card shadow />
    </g-grid>

    <g-grid :xs="12" :sm="0">
      <g-card shadow />
    </g-grid>

    <g-grid :xs="24">
      <g-card shadow />
    </g-grid>

    <g-grid :xs="24">
      <g-card shadow />
    </g-grid>
  </g-grid>
</template>
