<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-slider-basic' })

  const value = ref(10)
</script>

<template>
  <pre>value: {{ value }}</pre>

  <g-slider style="width: 60%" v-model="value" />
</template>
