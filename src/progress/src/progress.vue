<script setup lang="ts">
  import { unref, computed } from 'vue'
  import { Props } from './props'

  defineOptions({ name: 'GProgress' })

  const props = defineProps(Props)

  const privateMax = computed(() => {
    if (Number.isNaN(+props.max)) {
      throw new Error('[Progress Error]max must be NumberLike')
    }
    return +props.max
  })

  const privateValue = computed(() => {
    if (Number.isNaN(+props.value)) {
      throw new Error('[Progress Error]value must be Number type')
    }

    const value = +props.value

    if (value < 0) return 0

    if (value > unref(privateMax)) return unref(privateMax)

    return value
  })

  const privatePercentage = computed(() => {
    return Math.round((unref(privateValue) / unref(privateMax)) * 100)
  })

  const styles = computed(() => {
    const baseStyle = { width: `${unref(privatePercentage)}%` }

    if (!props.colors || !props.colors.length) return baseStyle

    return Object.assign({}, baseStyle, {
      backgroundColor: safeHex(unref(background))
    })
  })

  const background = computed(() => {
    const filters = props.colors.filter(item => {
      let value = +item.value
      if (value > unref(privateMax)) {
        value = unref(privateMax)
      }

      return unref(privatePercentage) >= Math.round((value / unref(privateMax)) * 100)
    })

    const found = filters[filters.length - 1]

    return found?.color
  })

  function safeHex(color?: string): string | undefined {
    if (!color) return color

    const str = `${color}`

    if (str.startsWith('rgb') || str.startsWith('#')) return color

    return `#${color}`
  }
</script>

<template>
  <div class="g-progress-bar" :class="fix">
    <div class="g-progress">
      <div class="g-progress__inner" :style="styles" :class="type"></div>
    </div>
  </div>
</template>
