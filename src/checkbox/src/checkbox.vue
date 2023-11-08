<script setup lang="ts">
  import { computed, inject } from 'vue'
  import { GIconCheckSquare, GIconSquare } from '@whouu/geist-design-icons'
  import { Props } from './props'
  import { CHECKBOX_GROUP_INJECT_KEY } from '../../checkbox-group/src/props'

  import type { CheckboxEmits } from './emits'
  import type { CheckboxGroupProvide } from '../../checkbox-group'

  defineOptions({ name: 'GCheckbox' })

  const props = defineProps(Props)

  const emit = defineEmits<CheckboxEmits>()

  const parentInject: CheckboxGroupProvide | null = inject(
    CHECKBOX_GROUP_INJECT_KEY,
    null
  )

  const privateValue = computed({
    get(): boolean {
      if (parentInject) {
        return !!parentInject.modelValue.find(label => label === props.label)
      } else {
        return props.modelValue
      }
    },

    set(value: boolean) {
      if (parentInject) {
        const changedValue = value
          ? parentInject.modelValue.concat([props.label])
          : parentInject.modelValue.filter(label => label !== props.label)

        parentInject.setChange(changedValue)
      } else {
        emit('update:modelValue', value)
      }
    }
  })

  const isDisabled = computed(() => {
    if (parentInject && parentInject.disabled) return true

    return props.disabled
  })
</script>

<template>
  <label class="g-checkbox-container" :class="{ disabled: isDisabled }">
    <g-icon-check-square
      v-show="privateValue"
      class="g-checkbox"
      :class="{ disabled: isDisabled }"
      size="15"
    />

    <g-icon-square
      v-show="!privateValue"
      class="g-checkbox"
      :class="{ disabled: isDisabled }"
      size="15"
    />

    <input
      v-model="privateValue"
      class="g-checkbox-original"
      type="checkbox"
      :disabled="isDisabled"
    />
    <span class="g-checkbox-label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
