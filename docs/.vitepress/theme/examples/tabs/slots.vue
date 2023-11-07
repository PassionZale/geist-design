<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-tabs-slots' })

  const value = ref('geist')

  const items = [
    {
      label: 'Geist',
      name: 'geist'
    },
    {
      label: 'Design',
      name: 'design'
    },
    {
      label: 'Icon',
      name: 'icon'
    }
  ]
</script>

<template>
  <g-tabs v-model="value">
    <g-tabs-item v-for="item in items" :label="item.label" :name="item.name">
      <g-note>{{ `${item.name} content` }}</g-note>
    </g-tabs-item>
  </g-tabs>
</template>
