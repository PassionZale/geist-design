<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-checkbox-disabled' })

  const value = ref(true)
</script>

<template>
  <g-checkbox v-model="value" disabled>Wuhan</g-checkbox>
</template>
