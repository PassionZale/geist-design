<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-collapse-shadow' })

  const value = ref([])
</script>

<template>
  <g-collapse v-model="value">
    <g-collapse-item
      name="geist design"
      title="Geist Design"
      sub-title="@whouu/geist-design"
      shadow
    >
      <p>run <g-code>npm i @whouu/geist-design</g-code> to install</p>
    </g-collapse-item>
  </g-collapse>
</template>
