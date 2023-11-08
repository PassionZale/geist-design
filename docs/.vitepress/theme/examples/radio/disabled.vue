<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-radio-disabled' })

  const value = ref('Wuhan')
</script>

<template>
  <g-radio v-model="value" label="Wuhan" disabled>Wuhan</g-radio>

  <g-radio v-model="value" :label="2">Shenzhen</g-radio>
  
  <g-radio v-model="value" label="Changsha" />
</template>
