<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-toggle-basic' })

  const booleanValue = ref(true)

  const numberValue = ref(0)

  const stringValue = ref('foo')
</script>

<template>
  <g-toggle v-model="booleanValue" style="margin-right: 10px" />

  <g-toggle v-model="numberValue" style="margin-right: 10px" />

  <g-toggle v-model="stringValue" />
</template>
