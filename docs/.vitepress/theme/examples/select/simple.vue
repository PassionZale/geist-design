<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-select-simple' })

  const value = ref('Wuhan')
</script>

<template>
  <g-select v-model="value" simple>
    <g-option value="Wuhan">Wuhan</g-option>
    <g-option value="Shenzhen">Shenzhen</g-option>
    <g-option value="Changsha">Changsha</g-option>
  </g-select>
</template>
