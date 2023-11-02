<script setup lang="ts">
  import { GIconGithub } from '@whouu/geist-design-icons'

  defineOptions({ name: 'ex-icons-size' })
</script>

<template>
  <div class="icons">
    <g-icon-github size="16" />

    <g-spacer :x="0.35" />

    <g-icon-github size="20" />

    <g-spacer :x="0.35" />

    <g-icon-github size="24" />

    <g-spacer :x="0.35" />

    <g-icon-github size="28" />

    <g-spacer :x="0.35" />

    <g-icon-github size="32" />

    <g-spacer :x="0.35" />

    <g-icon-github size="36" />
  </div>
</template>

<style lang="scss" scoped>
  .icons {
    display: flex;
    align-items: baseline;
  }
</style>
