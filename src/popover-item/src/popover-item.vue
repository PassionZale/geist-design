<script setup lang="ts">
  import { inject, computed } from 'vue'
  import { Props } from './props'
  import { POPOVER_INJECT_KEY } from '../../popover/src/props'

  import type { PopoverProvide } from '../../popover'

  defineOptions({ name: 'GPopoverItem' })

  const props = defineProps(Props)

  const parentInject: PopoverProvide | null = inject(POPOVER_INJECT_KEY, null)

  const nohover = computed(() => props.line || props.title || props.subTitle)

  const handleClick = (): void => {
    if (props.disabled) return

    if (parentInject) {
      parentInject.childTrigger(props.command)
    }
  }
</script>

<template>
  <div
    class="g-popover-item"
    :class="{ primary, nohover, line, disabled }"
    @click.stop="handleClick"
  >
    <span v-if="!nohover" class="text"> <slot></slot></span>
    <span v-if="!line && title" class="title"> <slot></slot></span>
    <span v-if="!line && subTitle" class="subtitle"> <slot></slot></span>
  </div>
</template>
