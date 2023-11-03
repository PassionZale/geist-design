<script setup lang="ts">
  defineOptions({ name: 'ex-grid-autoWidth' })
</script>

<template>
  <g-grid container justify-content="center" :spacing="3">
    <g-grid xs>
      <g-card shadow />
    </g-grid>

    <g-grid xs>
      <g-card shadow />
    </g-grid>

    <g-grid xs>
      <g-card shadow />
    </g-grid>
  </g-grid>

  <g-grid container justify-content="center" :spacing="3">
    <g-grid xs>
      <g-card shadow />
    </g-grid>

    <g-grid :xs="12">
      <g-card shadow />
    </g-grid>

    <g-grid xs>
      <g-card shadow />
    </g-grid>
  </g-grid>
</template>
