<script setup lang="ts">
  import { ref } from 'vue'
  defineOptions({ name: 'ex-progress-colors' })

  const percentage = ref(10)

  const progressColor = [
    {
      value: 0,
      color: '#000'
    },
    {
      value: 30,
      color: '#f56c6c'
    },
    {
      value: 70,
      color: '#ccc'
    },
    {
      value: 100,
      color: '#67c23a'
    }
  ]
</script>

<template>
  <g-progress :value="30" :colors="[{ value: 0, color: '#f56c6c' }]" />

  <g-spacer />

  <g-progress :value="percentage" :colors="progressColor" />

  <g-spacer />

  <g-button size="small" @click="percentage += 8">+8</g-button>
  &nbsp;
  <g-button size="small" @click="percentage = 10" type="primary">重置</g-button>
</template>
