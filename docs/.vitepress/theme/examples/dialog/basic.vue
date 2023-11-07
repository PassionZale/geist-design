<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-dialog-basic' })

  const visible = ref(false)
</script>

<template>
  <g-button size="small" @click="visible = true">Show Dialog</g-button>
  
  <g-dialog v-model="visible">
    <p>run <g-code>npm i @whouu/geist-design</g-code> to install</p>
  </g-dialog>
</template>
