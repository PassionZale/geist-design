<script setup lang="ts">
  import { reactive, ref } from 'vue'

  defineOptions({ name: 'ex-tabs-disabled' })

  const value = ref('geist')

  const items = reactive([
    {
      label: 'Geist',
      name: 'geist'
    },
    {
      label: 'Design',
      name: 'design',
      disabled: false
    },
    {
      label: 'Icon',
      name: 'icon'
    }
  ])

  const handleClick = () => {
    const { disabled } = items[1]

    const nextDisabled = !disabled

    items[1].disabled = nextDisabled

    items[1].label = nextDisabled ? 'Disabled' : 'Design'
  }
</script>

<template>
  <g-button auto @click="handleClick">Toggle Disabled Tab Design</g-button>

  <g-spacer />

  <g-tabs v-model="value">
    <g-tabs-item
      v-for="item in items"
      :label="item.label"
      :name="item.name"
      :disabled="item.disabled"
    >
      <g-note>{{ `${item.name} content` }}</g-note>
    </g-tabs-item>
  </g-tabs>
</template>
