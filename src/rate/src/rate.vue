<script setup lang="ts">
  import { computed, ref, unref } from 'vue'
  import RateIcon from './rate-icon.vue'
  import { Props } from './props'

  import type { RateEmits } from './emits'

  defineOptions({ name: 'GRate' })

  const props = defineProps(Props)

  const emit = defineEmits<RateEmits>()

  const hoverIndex = ref(0)

  const value = computed({
    get() {
      return props.modelValue
    },

    set(value) {
      emit('update:modelValue', value)
    }
  })

  const isActive = (index: number): boolean => {
    return index <= unref(value)
  }

  const handleClick = (index: number): void => {
    if (props.disabled) return

    value.value = index
  }

  const classes = (index: number): string => {
    let str = ''

    str = index <= unref(value) ? 'active' : ' '
    if (index <= unref(hoverIndex)) {
      str += ' hover'
    }
    return str.trim()
  }
</script>

<template>
  <div class="g-rate" :class="{ disabled }">
    <rate-icon
      v-for="index in count"
      :key="index"
      class="g-rate-icon"
      :class="[classes(index), { disabled }]"
      :is-active="isActive(index)"
      @click="handleClick(index)"
      @mousemove="!disabled && (hoverIndex = index)"
      @mouseleave="hoverIndex = 0"
    />
  </div>
</template>
