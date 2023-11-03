<script setup lang="ts">
  defineOptions({ name: 'ex-rate-disabled' })
</script>

<template>
  <g-rate disabled :model-value="3" :count="6" />
</template>
