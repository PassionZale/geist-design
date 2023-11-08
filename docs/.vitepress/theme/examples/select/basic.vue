<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-select-basic' })

  const value = ref('Wuhan')
</script>

<template>
  <pre>value: {{ value }}</pre>

  <g-select v-model="value">
    <g-option value="Wuhan">Wuhan</g-option>
    <g-option value="Shenzhen">Shenzhen</g-option>
    <g-option value="Changsha">Changsha</g-option>
  </g-select>
</template>
