<script setup lang="ts">
  import { computed, toRefs } from 'vue'
  import { Props } from './props'

  import type { CSSProperties } from 'vue'
  import type { GridProps } from './props'

  type Breakpoint = keyof Pick<GridProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>

  const BREAKPOINTS: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl']

  defineOptions({ name: 'GGrid' })

  const props = defineProps(Props)

  const getItemLayout = (): object => {
    return BREAKPOINTS.map(item => {
      const isNumberSize = typeof props[item] === 'number'

      if (!props[item]) return {}

      if (isNumberSize) {
        const width = (100 / 24) * (props[item] as number)
        return {
          [`--geist-${item}-width`]: width > 100 ? '100%' : width < 0 ? '0' : `${width}%`,
          [`--geist-${item}-grow`]: 0,
          [`--geist-${item}-basis`]: width > 100 ? '100%' : width < 0 ? '0' : `${width}%`
        }
      }
      return {
        [`--geist-${item}-grow`]: 1
      }
    })
  }

  const flexProps = computed(() => {
    const { justifyContent, alignItems, alignContent, direction, wrap } = toRefs(props)

    return {
      'justify-content': justifyContent.value,
      'align-content': alignContent.value,
      'flex-direction': direction.value,
      'flex-wrap': wrap.value,
      'align-items': alignItems.value
    }
  })

  const containerWidth = computed(() => {
    const setWidth = (): object => ({
      'max-width': `calc(100% + 8px * ${props.spacing})`,
      margin: `-${4 * props.spacing}px`
    })
    if (props.container) return setWidth()
    if (props.spacing) {
      console.error('[Grid Error] prop [spacing] 必须在 [container] 模式下使用')
    }
    return {}
  })

  const classes = computed(() => {
    const breakpointsClasses = BREAKPOINTS.map(item => {
      return props[item] === 0 ? `${item}-hidden` : props[item] && `${item}`
    })
    if (!props.container) return ['g-grid', ...breakpointsClasses]

    return ['g-grid-container', ...breakpointsClasses]
  })

  const styles = computed<CSSProperties>(() => {
    const makeContainerStyle = (): object => ({
      '--geist-grid-spacing': `${props.spacing * 4}px`,
      ...flexProps.value
    })
    return [containerWidth.value, props.container ? makeContainerStyle() : {}].concat(
      getItemLayout()
    ) as unknown as CSSProperties
  })
</script>

<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
