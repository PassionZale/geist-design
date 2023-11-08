<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-slider-range' })

  const value1 = ref(9)
  const value2 = ref(0.3)
</script>

<template>
  <g-slider v-model="value1" :min="5" :max="30" style="width: 60%" />
  <g-spacer />
  <g-slider v-model="value2" :min="0" :max="1" :step="0.1" style="width: 60%" />
</template>
