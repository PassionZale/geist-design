<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-checkbox-group' })

  const value = ref(['Hubei'])

  const data = ref(['Hubei', 'Shenzhen', 'Beijing', 'Changsha'])
</script>

<template>
  <pre>value: {{ value }}</pre>

  <g-checkbox-group v-model="value">
    <g-checkbox v-for="item in data" :key="item" :label="item" />
  </g-checkbox-group>
</template>
