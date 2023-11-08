<script setup lang="ts">
  import { ref, shallowRef, provide } from 'vue'
  import PopoverIcon from './popover-icon.vue'
  import { Props, POPOVER_INJECT_KEY } from './props'

  import type { PopoverEmits } from './emits'
  import type { PopoverProvide } from './interface'

  defineOptions({ name: 'GPopover' })

  const props = defineProps(Props)

  const emit = defineEmits<PopoverEmits>()

  const visible = ref(false)

  const timer = shallowRef()

  const globalHandler = (): void => {
    visible.value = false
  }

  const toggle = (): void => {
    if (props.hoverable) return

    visible.value = !visible.value

    document.removeEventListener('click', globalHandler)

    if (visible.value) {
      document.addEventListener('click', globalHandler)
    }
  }

  const hoverToggle = (next: boolean): void => {
    if (!props.hoverable) return

    const t = props.delay

    if (next) {
      timer.value && clearTimeout(timer.value)
      visible.value = true
      return
    }

    timer.value = setTimeout(() => {
      visible.value = false
      clearTimeout(timer.value)
    }, t)
  }

  const childTrigger = (command?: string | number | object): void => {
    emit('command', command)

    if (props.hideOnClick) {
      document.removeEventListener('click', globalHandler)
      visible.value = false
    }
  }

  provide<PopoverProvide>(POPOVER_INJECT_KEY, { childTrigger })
</script>

<template>
  <div
    class="g-popover"
    @click.stop
    @mousemove="hoverToggle(true)"
    @mouseleave="hoverToggle(false)"
  >
    <span class="g-popover-host" @click.stop="toggle">
      <slot></slot>
    </span>

    <transition name="g-fade-in">
      <div v-show="visible" class="g-popover-dropdown" :class="align">
        <popover-icon class="g-popover-icon"></popover-icon>

        <div class="g-popover-slot-container">
          <slot name="dropdown"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
