<script setup lang="ts">
  import { ref } from 'vue'
  defineOptions({ name: 'ex-input-disabled' })

  const value = ref('The Evil Rabbit')
</script>

<template>
  <g-input placeholder="placeholder" v-model="value" disabled></g-input>
</template>
