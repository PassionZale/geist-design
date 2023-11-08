<script setup lang="ts">
  defineOptions({ name: 'ex-popover-basic' })
</script>

<template>
  <g-popover>
    <g-button size="small">show team</g-button>

    <template #dropdown>
      <g-popover-item title>Dashboard</g-popover-item>
      <g-popover-item>Team A</g-popover-item>
      <g-popover-item>Team B</g-popover-item>
    </template>
  </g-popover>
</template>
