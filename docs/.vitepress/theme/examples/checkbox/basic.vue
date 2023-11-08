<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-checkbox-basic' })

  const value = ref(false)
</script>

<template>
  <pre>value: {{ value }}</pre>

  <g-checkbox v-model="value">Wuhan</g-checkbox>
</template>
