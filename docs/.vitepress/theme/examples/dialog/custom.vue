<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-dialog-custom' })

  const visible = ref(false)
</script>

<template>
  <g-button size="small" auto @click="visible = true">Show Custom Dialog</g-button>

  <g-dialog v-model="visible" title="How to install Geist Design?" done="ok!">
    <p>run <g-code>npm i @whouu/geist-design</g-code> to install</p>
  </g-dialog>
</template>
