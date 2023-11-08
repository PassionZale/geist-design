<script setup lang="ts">
  import { GToast } from 'geist-design'

  defineOptions({ name: 'ex-popover-command' })

  const handleCommand = (command?: string | number | object) => {
    if (command) {
      GToast.success(JSON.stringify(command))
    }
  }
</script>

<template>
  <g-popover @command="handleCommand">
    <g-button size="small">command</g-button>

    <template #dropdown>
      <g-popover-item title>Dashboard</g-popover-item>
      <g-popover-item command="a">Team A</g-popover-item>
      <g-popover-item command="b">Team B</g-popover-item>
    </template>
  </g-popover>
</template>
