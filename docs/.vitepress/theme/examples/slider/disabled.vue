<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-slider-disabled' })

  const value = ref(10)
</script>

<template>
  <g-slider style="width: 60%" v-model="value" disabled />
</template>
