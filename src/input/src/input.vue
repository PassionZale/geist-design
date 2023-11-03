<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { GIconDelete } from '@whouu/geist-design-icons'
  import { Props } from './props'
  import type { InputEmits } from './emits'

  defineOptions({ name: 'GInput' })

  const emit = defineEmits<InputEmits>()

  const props = defineProps(Props)

  const showCloseIcon = ref(false)

  const value = computed<string | number>({
    get() {
      return props.modelValue
    },

    set(value: string | number): void {
      emit('update:modelValue', value)
    }
  })

  const groupClass = computed(() => {
    if (props.prefixIcon || props.prefixLabel || props.suffixIcon || props.suffixLabel) {
      return 'g-input-group'
    }

    return 'g-input-group-empty'
  })
</script>

<template>
  <div
    :class="[
      groupClass,
      { prefix: prefixIcon || prefixLabel, suffix: suffixIcon || suffixLabel, clearable }
    ]"
  >
    <span v-if="prefixLabel" class="g-label prefix" :class="size && size">
      {{ prefixLabel }}
    </span>

    <span v-if="prefixIcon" class="g-label prefix" :class="size && size">
      <component :is="prefixIcon" />
    </span>

    <input
      v-model="value"
      class="g-input"
      :class="[{ disabled: disabled }, size && size, status]"
      :disabled="disabled"
      :type="type"
      v-bind="$attrs"
      @focus="showCloseIcon = true"
      @blur="showCloseIcon = false"
    />

    <span v-if="suffixLabel" class="g-label suffix" :class="size && size">
      {{ suffixLabel }}
    </span>

    <span v-if="suffixIcon" class="g-label suffix" :class="size && size">
      <component :is="suffixIcon" />
    </span>

    <g-icon-delete
      v-if="clearable && showCloseIcon"
      class="close"
      @mousedown="value = ''"
    />
  </div>
</template>
