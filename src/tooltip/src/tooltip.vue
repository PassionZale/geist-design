<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { createPopper } from '@popperjs/core'
  import { Props } from './props'

  defineOptions({ name: 'GTooltip' })

  const props = defineProps(Props)

  const timer = ref<NodeJS.Timeout | null>(null)
  const visible = ref(false)

  const hostRef = ref<HTMLDivElement | null>(null)
  const innerRef = ref<HTMLDivElement | null>(null)
  const arrowRef = ref<HTMLDivElement | null>(null)

  const toggle = (next: boolean): void => {
    if (props.clickable) return

    if (props.delay) {
      const t = Number.isNaN(+props.delay) ? 0 : +props.delay
      if (next) {
        timer.value && clearTimeout(timer.value)

        visible.value = true
      }

      timer.value = setTimeout(() => {
        timer.value && clearTimeout(timer.value)

        visible.value = false
      }, t)
      return
    }

    visible.value = next
  }

  const hide = (): void => {
    visible.value = false
  }

  const handleClick = (): void => {
    if (!props.clickable) return
    visible.value = !visible.value

    document.removeEventListener('click', hide)
    if (visible.value) {
      document.addEventListener('click', hide)
    }
  }

  onMounted(() => {
    if (hostRef.value && innerRef.value && arrowRef.value) {
      createPopper(hostRef.value, innerRef.value, {
        placement: props.placement,
        modifiers: [
          {
            name: 'arrow',
            options: {
              element: arrowRef.value
            }
          },
          {
            name: 'offset',
            options: {
              offset: [0, 8]
            }
          }
        ]
      })
    }
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', hide)
    timer.value && clearTimeout(timer.value)
  })
</script>

<template>
  <div
    ref="hostRef"
    class="g-tooltip"
    @mousemove="toggle(true)"
    @mouseleave="toggle(false)"
    @click.stop="handleClick"
  >
    <slot></slot>
    <div ref="innerRef" class="g-tooltip-box" :class="{ visible }">
      <div ref="arrowRef" class="g-tooltip-arrow"></div>
      <div class="g-tooltip-inner">
        <slot name="content">{{ content }}</slot>
      </div>
    </div>
  </div>
</template>
