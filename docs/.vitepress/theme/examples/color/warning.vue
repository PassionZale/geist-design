<script setup lang="ts">
  defineOptions({ name: 'ex-color-warning' })

  const colors = [
    { name: 'Light', value: 'var(--geist-warning-light)' },
    { name: 'Default', value: 'var(--geist-warning)' },
    { name: 'Dark', value: 'var(--geist-warning-dark)' }
  ]

  function valueToStyle(val: string) {
    return `background-color: ${val}; color: var(--geist-background);`
  }

  function getCSSValue(val: string) {
    // @ts-ignore
    const value = val.match(/^var\(([\s\S]*)\)/)[1]
    if (!value) return ''
    return getComputedStyle(document.documentElement).getPropertyValue(value)
  }
</script>

<template>
  <div class="colors">
    <div
      class="color"
      v-for="color in colors"
      :key="color.name"
      :style="valueToStyle(color.value)"
    >
      <h4>{{ color.name }}</h4>
      <span class="value">{{ color.value }}</span
      ><span class="cssValue">{{ getCSSValue(color.value) }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped src="../../styles/_color.scss"></style>
