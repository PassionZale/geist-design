<script setup lang="ts">
  import { computed, provide, toRefs, reactive } from 'vue'
  import { GIconChevronDown } from '@whouu/geist-design-icons'
  import { Props, SELECT_INJECT_KEY } from './props'

  import type { SelectEmits } from './emits'
  import type { SelectProvide } from './interface'

  defineOptions({ name: 'GSelect' })

  const props = defineProps(Props)

  const emit = defineEmits<SelectEmits>()

  const privateValue = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    }
  })

  provide<SelectProvide>(SELECT_INJECT_KEY, reactive({ ...toRefs(props) }))
</script>

<template>
  <div class="g-select-container" :class="[{ disabled, simple }, size && size]">
    <select
      v-model="privateValue"
      class="g-select"
      :class="{ disabled }"
      :disabled="disabled"
      v-bind="$attrs"
    >
      <slot></slot>
    </select>

    <div v-if="!simple" class="g-select-arrow-box">
      <g-icon-chevron-down class="g-select-arrow" />
    </div>
  </div>
</template>
