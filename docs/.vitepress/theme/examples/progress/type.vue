<script setup lang="ts">
  defineOptions({ name: 'ex-progress-type' })
</script>

<template>
  <g-progress value="20" type="success" />
  <g-progress value="40" type="warning" />
  <g-progress value="60" type="danger" />
  <g-progress value="80" type="secondary" />
</template>
