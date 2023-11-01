<script setup lang="ts">
  import { computed } from 'vue'
  import { GIconCopy } from '@whouu/geist-design-icons'
  import { GToast } from '../..'
  import { Props } from './props'

  defineOptions({ name: 'GSnippet' })

  const props = defineProps(Props)

  const texts = computed<string[]>(() => {
    if (!Array.isArray(props.text)) {
      return [props.text]
    }

    return props.text
  })

  const svgColor = computed(() => {
    const isSpecialType = props.type !== 'lite' && props.type !== 'default'

    if (props.filled && isSpecialType) return 'var(--geist-background)'

    const currentType = {
      success: 'var(--geist-success)',
      warning: 'var(--geist-warning)',
      secondary: 'var(--accents-5)',
      error: 'var(--geist-error)',
      dark: 'var(--geist-background)',
      lite: 'var(--geist-foreground)',
      default: 'var(--geist-foreground)'
    }
    return currentType[props.type]
  })

  const handleCopy = (): void => {
    GToast.success('Code copied successfully!')
  }
</script>

<template>
  <div
    ref="snippet"
    class="g-snippet"
    :style="{ width }"
    :class="[type, filled ? 'filled' : '', !copy ? 'without-copy' : '']"
  >
    <pre v-for="(lineText, index) in texts" :key="index">{{ lineText }}</pre>
    <div v-show="copy" class="g-copy" @click="handleCopy">
      <g-icon-copy :color="svgColor" />
    </div>
  </div>
</template>
