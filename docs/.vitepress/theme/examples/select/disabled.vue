<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-select-disabled' })

  const value1 = ref('Wuhan')

  const value2 = ref('Wuhan')
</script>

<template>
  <g-select v-model="value1" disabled>
    <g-option value="Wuhan">Wuhan</g-option>
    <g-option value="Shenzhen">Shenzhen</g-option>
    <g-option value="Changsha">Changsha</g-option>
  </g-select>

  <g-spacer />

  <g-select v-model="value2">
    <g-option value="Wuhan">Wuhan</g-option>
    <g-option value="Shenzhen" disabled>Shenzhen</g-option>
    <g-option value="Changsha">Changsha</g-option>
  </g-select>
</template>
