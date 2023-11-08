<script setup lang="ts">
  import { computed } from 'vue'
  import { Props } from './props'
  import type { ToggleEmits } from './emits'

  defineOptions({ name: 'GToggle' })

  const props = defineProps(Props)

  const emit = defineEmits<ToggleEmits>()

  const privateValue = computed({
    get() {
      return !!props.modelValue
    },
    set(value: boolean) {
      emit('update:modelValue', value)
    }
  })
</script>

<template>
  <div
    class="g-toggle"
    :class="{ checked: privateValue, disabled }"
    @click="emit('update:modelValue', !privateValue)"
  ></div>
</template>
