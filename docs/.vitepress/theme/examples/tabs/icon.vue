<script setup lang="ts">
  import { ref } from 'vue'
  import { GIconAirplay, GIconGithub, GIconGitBranch } from '@whouu/geist-design-icons'

  defineOptions({ name: 'ex-tabs-icon' })

  const value = ref('geist')

  const items = [
    {
      label: 'Geist',
      name: 'geist',
      prefixIcon: GIconAirplay
    },
    {
      label: 'Design',
      name: 'design',
      suffixIcon: GIconGithub
    },
    {
      label: 'Icon',
      name: 'icon',
      prefixIcon: GIconGitBranch
    }
  ]
</script>

<template>
  <g-tabs v-model="value">
    <g-tabs-item
      v-for="item in items"
      :label="item.label"
      :name="item.name"
      :prefix-icon="item.prefixIcon"
      :suffix-icon="item.suffixIcon"
    >
      <g-note>{{ `${item.name} content` }}</g-note>
    </g-tabs-item>
  </g-tabs>
</template>
