<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-select-size' })

  const value = ref('Wuhan')
</script>

<template>
  <g-select v-model="value">
    <g-option value="Wuhan">Wuhan</g-option>
    <g-option value="Shenzhen">Shenzhen</g-option>
    <g-option value="Changsha">Changsha</g-option>
  </g-select>

  <g-spacer />

  <g-select v-model="value" size="small">
    <g-option value="Wuhan">Wuhan</g-option>
    <g-option value="Shenzhen">Shenzhen</g-option>
    <g-option value="Changsha">Changsha</g-option>
  </g-select>

  <g-spacer />

  <g-select v-model="value" size="mini">
    <g-option value="Wuhan">Wuhan</g-option>
    <g-option value="Shenzhen">Shenzhen</g-option>
    <g-option value="Changsha">Changsha</g-option>
  </g-select>
</template>
