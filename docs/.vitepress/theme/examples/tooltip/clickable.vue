<script setup lang="ts">
  defineOptions({ name: 'ex-tooltip-clickable' })
</script>

<template>
  <g-tooltip content="tooltip content" clickable>
    <g-button>click trigger</g-button>
  </g-tooltip>
</template>
