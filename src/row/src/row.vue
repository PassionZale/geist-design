<script setup lang="ts">
  import { computed, provide } from 'vue'
  import { Props, ROW_INJECT_KEY } from './props'

  import type { CSSProperties } from 'vue'
  import type { RowProvide } from './interface'

  defineOptions({ name: 'GRow', inheritAttrs: false })

  const props = defineProps(Props)

  const gutter = computed(() => {
    if (props.gutter === undefined) return props.gutter
    if (typeof props.gutter === 'number') return props.gutter
    if (Number.isNaN(+props.gutter)) {
      console.error('g-row: [gutter] expected a number.')
      return 0
    }

    return +props.gutter
  })

  const styles = computed(() => {
    const style: CSSProperties = {}
    if (gutter.value) {
      style.marginLeft = `-${gutter.value / 2}px`
      style.marginRight = style.marginLeft
    }
    return style
  })

  const classes = computed(() => {
    let _class = ''
    if (props.justify !== 'start') {
      _class += ` justify-${props.justify}`
    }
    if (props.align !== 'top') {
      _class += ` align-${props.align}`
    }

    return _class
  })

  provide<RowProvide>(ROW_INJECT_KEY, { gutter })
</script>

<template>
  <div class="g-row" :class="classes" :style="styles" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
