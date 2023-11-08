<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-radio-basic' })

  const value = ref('Wuhan')
</script>

<template>
  <pre>value: {{ value }}</pre>

  <g-radio v-model="value" label="Wuhan" description="the city where i work">Wuhan</g-radio>

  <g-radio v-model="value" :label="2" description="the city i left">Shenzhen</g-radio>

  <g-radio v-model="value" label="Changsha" description="my friend's city" />
</template>
