<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-radio-disabled' })

  const disabledValue = ref('Wuhan')
  const value = ref(2)
</script>

<template>
  <g-radio v-model="disabledValue" label="Wuhan" disabled>Wuhan</g-radio>

  <g-radio v-model="value" :label="2">Shenzhen</g-radio>
  
  <g-radio v-model="value" label="Changsha" />
</template>
