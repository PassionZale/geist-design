<script setup lang="ts">
  defineOptions({ name: 'ex-color-basic' })

  const colors = [
    { name: 'Background', value: 'var(--geist-background)' },
    { name: 'Accent 1', value: 'var(--accents-1)' },
    { name: 'Accent 2', value: 'var(--accents-2)' },
    { name: 'Accent 3', value: 'var(--accents-3)' },
    { name: 'Accent 4', value: 'var(--accents-4)' },
    { name: 'Accent 5', value: 'var(--accents-5)' },
    { name: 'Accent 6', value: 'var(--accents-6)' },
    { name: 'Accent 7', value: 'var(--accents-7)' },
    { name: 'Accent 8', value: 'var(--accents-8)' },
    { name: 'Foreground', value: 'var(--geist-foreground)' }
  ]

  function valueToStyle(val: string, index: number) {
    const bg = `background-color: ${val};`
    if (index < 5) return bg
    return `${bg} color: var(--geist-background);`
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
