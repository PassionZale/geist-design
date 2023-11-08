<script setup lang="ts">
  defineOptions({ name: 'ex-popover-hoverable' })
</script>

<template>
  <g-popover hoverable>
    <g-button size="small">hover</g-button>

    <template #dropdown>
      <g-popover-item title>Dashboard</g-popover-item>
      <g-popover-item>Team A</g-popover-item>
      <g-popover-item>Team B</g-popover-item>
    </template>
  </g-popover>
</template>
