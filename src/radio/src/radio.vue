<script setup lang="ts">
  import { computed, inject } from 'vue'
  import { Props } from './props'
  import { RADIO_GROUP_INJECT_KEY } from '../../radio-group/src/props'

  import type { RadioEmits } from './emits'
  import type { RadioGroupProvide } from '../../radio-group'

  defineOptions({ name: 'GRadio' })

  const props = defineProps(Props)

  const emit = defineEmits<RadioEmits>()

  const parentInject: RadioGroupProvide | null = inject(RADIO_GROUP_INJECT_KEY, null)

  const privateValue = computed({
    get() {
      if (parentInject) {
        return parentInject.modelValue
      }

      return props.modelValue
    },

    set(value: string | number) {
      if (parentInject) {
        return parentInject.setChange(value)
      }

      emit('update:modelValue', value)
    }
  })

  const isDisabled = computed(() => {
    if (parentInject) return parentInject.disabled

    return props.disabled
  })
</script>

<template>
  <div class="g-radio-container">
    <label
      class="g-radio"
      :class="{ disabled: isDisabled, checked: label === privateValue }"
    >
      <span
        class="g-radio-input"
        :class="{ disabled: isDisabled, checked: label === privateValue }"
      />

      <input
        v-model="privateValue"
        class="g-radio-original"
        type="radio"
        :value="label"
        :disabled="isDisabled"
      />

      <span class="g-radio-label">
        <slot>{{ label }}</slot>
      </span>
      
      <span v-if="description" class="g-radio-description">{{ description }}</span>
    </label>
  </div>
</template>
