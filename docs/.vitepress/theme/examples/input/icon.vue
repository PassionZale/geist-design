<script setup lang="ts">
  import { GIconGithub, GIconGift } from '@whouu/geist-design-icons'

  defineOptions({ name: 'ex-input-icon' })
</script>

<template>
  <g-input size="mini" :prefix-icon="GIconGithub"></g-input>

  <g-spacer />

  <g-input :prefix-icon="GIconGithub"></g-input>

  <g-spacer />

  <g-input size="big" :prefix-icon="GIconGithub"></g-input>

  <g-spacer />

  <g-input :suffix-icon="GIconGift"></g-input>
</template>
