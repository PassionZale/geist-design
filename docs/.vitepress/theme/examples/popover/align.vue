<script setup lang="ts">
  defineOptions({ name: 'ex-popover-align' })
</script>

<template>
  <g-popover align="left">
    <g-button size="small">align left</g-button>

    <template #dropdown>
      <g-popover-item title>Dashboard</g-popover-item>
      <g-popover-item>Team A</g-popover-item>
      <g-popover-item>Team B</g-popover-item>
    </template>
  </g-popover>

  <g-spacer />

  <g-popover align="right">
    <g-button size="small">align right</g-button>

    <template #dropdown>
      <g-popover-item title>Dashboard</g-popover-item>
      <g-popover-item>Team A</g-popover-item>
      <g-popover-item>Team B</g-popover-item>
    </template>
  </g-popover>
</template>
