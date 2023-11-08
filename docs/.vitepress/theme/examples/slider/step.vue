<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-slider-step' })

  const value = ref(10)
</script>

<template>
  <g-slider style="width: 60%" v-model="value" :step="20" show-dots />
</template>
