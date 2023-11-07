<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-dialog-slots' })

  const visible = ref(false)
</script>

<template>
  <g-button size="small" @click="visible = true">Show Slots</g-button>

  <g-dialog v-model="visible">
    <template #header>
      <g-code>Custom Header</g-code>
    </template>

    <p>run <g-code>npm i @whouu/geist-design</g-code> to install</p>

    <template #footer>
      <div style="width: 100%; padding: 10px 0; display: flex; justify-content: center">
        <g-snippet text="npm i @whouu/geist-design" width="300px"></g-snippet>
      </div>
    </template>
  </g-dialog>
</template>
