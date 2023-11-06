<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-collapse-basic' })

  const value = ref([])
</script>

<template>
  <pre>modelValue: {{ value }}</pre>

  <g-collapse v-model="value">
    <g-collapse-item
      name="geist design"
      title="Geist Design"
      sub-title="@whouu/geist-design"
    >
      <p>run <g-code>npm i @whouu/geist-design</g-code> to install</p>
    </g-collapse-item>

    <g-collapse-item
      name="geist design icons"
      title="Geist Design Icons"
      sub-title="@whouu/geist-design-icons"
    >
      <p>run <g-code>npm i @whouu/geist-design-icons</g-code> to install</p>
    </g-collapse-item>
  </g-collapse>
</template>
