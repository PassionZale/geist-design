<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-radio-group' })

  const value = ref('Wuhan')

  const data = ref(['Wuhan', 'Shenzhen', 'Changsha'])
</script>

<template>
  <g-radio-group v-model="value">
    <g-radio v-for="item in data" :label="item" :key="item" />
  </g-radio-group>
</template>
