<script setup lang="ts">
  defineOptions({ name: 'ex-popover-split' })
</script>

<template>
  <g-popover>
    <g-button size="small">line</g-button>

    <template #dropdown>
      <g-popover-item title>Dashboard</g-popover-item>
      <g-popover-item line />
      <g-popover-item>Team A</g-popover-item>
      <g-popover-item>Team B</g-popover-item>
    </template>
  </g-popover>

  <g-spacer />

  <g-popover>
    <g-button size="small">subtitle</g-button>

    <template #dropdown>
      <g-popover-item title>Dashboard</g-popover-item>
      <g-popover-item line />
      <g-popover-item>Team A</g-popover-item>
      <g-popover-item>Team B</g-popover-item>
      <g-popover-item line />
      <g-popover-item sub-title>Asian Team</g-popover-item>
      <g-popover-item>Team A</g-popover-item>
      <g-popover-item>Team B</g-popover-item>
    </template>
  </g-popover>
</template>
