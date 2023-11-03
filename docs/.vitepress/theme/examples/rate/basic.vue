<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-rate-basic' })

  const rateValue = ref(0)
</script>

<template>
  <g-rate v-model="rateValue" />
</template>
