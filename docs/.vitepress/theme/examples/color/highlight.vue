<script setup lang="ts">
  defineOptions({ name: 'ex-color-highlight' })

  const colors = [
    { name: 'Alert', value: 'var(--geist-alert)' },
    { name: 'Purple', value: 'var(--geist-purple)' },
    { name: 'Violet', value: 'var(--geist-violet)' },
    { name: 'Cyan', value: 'var(--geist-cyan)' }
  ]

  function valueToStyle(val: string, index: number) {
    if (index < 3) return `background-color: ${val}; color: var(--geist-background);`
    return `background-color: ${val}; color: #000;`
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
      v-for="(color, index) in colors"
      :key="color.name"
      :style="valueToStyle(color.value, index)"
    >
      <h4>{{ color.name }}</h4>
      <span class="value">{{ color.value }}</span
      ><span class="cssValue">{{ getCSSValue(color.value) }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped src="../../styles/_color.scss"></style>
