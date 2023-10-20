<script setup lang="ts">
  import { GIconMonitor, GIconGithub, GIconDatabase } from '@whouu/geist-design-icons'

  defineOptions({ name: 'ex-button-icon' })
</script>

<template>
  <div class="buttons">
    <g-button size="small" :icon="GIconMonitor">Monitor</g-button>
    <g-button :iconRight="GIconGithub">Github</g-button>
    <g-button size="big" :iconRight="GIconDatabase">Database</g-button>
    <g-button size="huge" :icon="GIconGithub" :iconRight="GIconGithub">Huge Github</g-button>
  </div>
</template>

<style lang="scss" scoped>
  .buttons > button {
    display: block;
    margin-bottom: 8px;
  }
</style>
