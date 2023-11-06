<script setup lang="ts">
  import { getRealShape } from '../bounding'

  defineOptions({ name: 'TransitionExpand' })

  const onEnter = (el: Element): void => {
    const node = el as HTMLElement

    const { width } = getRealShape(node)
    node.style.width = `${width}px`
    node.style.position = 'absolute'
    node.style.visibility = 'hidden'
    node.style.height = 'auto'

    const { height } = getRealShape(node)

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    node.style.width = null!
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    node.style.position = null!
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    node.style.visibility = null!
    node.style.height = '0'

    getRealShape(el)

    const tiemr = setTimeout(() => {
      node.style.height = `${height}px`
      clearTimeout(tiemr)
    }, 0)
  }

  const onAfterEnter = (el: Element): void => {
    const node = el as HTMLElement

    node.style.height = 'auto'
  }

  const onLeave = (el: Element): void => {
    const node = el as HTMLElement

    const { height } = getRealShape(node)

    node.style.height = `${height}px`

    getRealShape(node)

    const timer = setTimeout(() => {
      node.style.height = '0'
      clearTimeout(timer)
    }, 0)
  }

  const onAfterLeave = (el: Element): void => {
    const node = el as HTMLElement

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    node.style.height = null!
  }
</script>

<template>
  <transition
    name="expand"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <slot />
  </transition>
</template>

<style lang="scss" scoped>
  .expand-enter-active,
  .expand-leave-active {
    transition: height 0.2s ease;
    overflow: hidden;
  }

  .expand-enter,
  .expand-leave-to {
    height: 0;
  }
</style>
