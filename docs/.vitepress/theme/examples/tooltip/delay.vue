<script setup lang="ts">
  defineOptions({ name: 'ex-tooltip-delay' })
</script>

<template>
  <g-tooltip content="tooltip content" :delay="2000">
    Hide after 2000 ms
  </g-tooltip>
</template>
