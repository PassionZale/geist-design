<script setup lang="ts">
  import { computed } from 'vue'
  import { Props } from './props'
  import type { TextareaEmits } from './emits'

  defineOptions({ name: 'GTextarea', inheritAttrs: true })

  const emit = defineEmits<TextareaEmits>()

  const props = defineProps(Props)

  const value = computed({
    get() {
      return props.modelValue
    },

    set(value: string): void {
      emit('update:modelValue', value)
    }
  })
</script>

<template>
  <div class="g-textarea-container">
    <div class="g-textarea-wrapper">
      <textarea
        v-model="value"
        class="g-textarea"
        :class="[{ disabled }, type]"
        :disabled="disabled"
        :rows="rows"
        v-bind="$attrs"
      ></textarea>
    </div>
  </div>
</template>
