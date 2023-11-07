<script setup lang="ts">
  import { computed, inject } from 'vue'
  import { Props } from './props'
  import { ROW_INJECT_KEY } from '../../row/src/props'

  import type { CSSProperties } from 'vue'
  import type { RowProvide } from '../../row'

  defineOptions({ name: 'GCol', inheritAttrs: false })

  const props = defineProps(Props)

  const parentInject: RowProvide | null = inject(ROW_INJECT_KEY, null)

  const gutter = computed(() => {
    return parentInject ? parentInject.gutter.value : 0
  })

  const styles = computed(() => {
    const style: CSSProperties = {}
    if (gutter.value) {
      style.paddingLeft = `${gutter.value / 2}px`
      style.paddingRight = style.paddingLeft
    }
    return style
  })

  const span = computed(() => {
    if (typeof props.span === 'number') return props.span
    if (Number.isNaN(+props.span)) {
      console.error('g-col: [span] expected a number.')
      return 24
    }

    return +props.span
  })

  const classes = computed(() => {
    let _class = ''

    _class += ` g-col-${span.value}`

    return _class
  })
</script>

<template>
  <div :class="classes" :style="styles" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
