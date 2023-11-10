<script setup lang="ts">
  import GeistDesign from 'geist-design'
  import { GIconSun, GIconMoon } from '@whouu/geist-design-icons'

  defineOptions({ name: 'ex-button-basic' })

  const dark = () => {
    GeistDesign.theme.enableDark()
  }

  const light = () => {
    GeistDesign.theme.enableLight()
  }
</script>

<template>
  <div class="buttons">
    <g-button @click="light" :icon="GIconSun">light</g-button>

    <g-button @click="dark" type="primary" :icon="GIconMoon">dark</g-button>
  </div>
</template>

<style lang="scss" scoped>
  .buttons > button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
