<script setup lang="ts">
  defineOptions({ name: 'ex-grid-responsive' })
</script>

<template>
  <g-grid container justify-content="center" :spacing="3">
    <g-grid :xs="24" :md="12">
      <g-card shadow />
    </g-grid>

    <g-grid :xs="24" :md="12">
      <g-card shadow />
    </g-grid>

    <g-grid :xs="24" :md="6">
      <g-card shadow />
    </g-grid>

    <g-grid :xs="24" :md="6">
      <g-card shadow />
    </g-grid>

    <g-grid :xs="24" :md="6">
      <g-card shadow />
    </g-grid>
  </g-grid>
</template>

