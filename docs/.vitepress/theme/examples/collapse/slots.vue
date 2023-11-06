<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-collapse-slots' })

  const value = ref([])
</script>

<template>
  <g-collapse v-model="value">
    <g-collapse-item name="item" shadow>
      <template #title>
        <g-code>Geist Design</g-code>
      </template>

      <template #subTitle>
        <p>run <g-code>npm i @whouu/geist-design</g-code> to install</p>
      </template>

      <g-snippet :text="['npm i @whouu/geist-design']" width="300px"/>
    </g-collapse-item>
  </g-collapse>
</template>
