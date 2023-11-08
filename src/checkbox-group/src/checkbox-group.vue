<script setup lang="ts">
  import { inject, toRefs, computed, reactive } from 'vue'
  import { Props, CHECKBOX_GROUP_INJECT_KEY } from './props'

  import type { CheckboxGroupModelValue } from './props'
  import type { CheckboxGroupProvide } from './interface'
  import type { CheckboxGroupEmits } from './emits'

  defineOptions({ name: 'GCheckboxGroup' })

  const props = defineProps(Props)

  const emit = defineEmits<CheckboxGroupEmits>()

  const privateValue = computed({
    get() {
      return props.modelValue
    },

    set(value: CheckboxGroupModelValue) {
      emit('update:modelValue', value)
    }
  })

  const setChange = (changedValue: CheckboxGroupModelValue): void => {
    privateValue.value = changedValue
  }

  inject<CheckboxGroupProvide>(
    CHECKBOX_GROUP_INJECT_KEY,
    reactive({
      ...toRefs(props),
      setChange
    })
  )
</script>

<template>
  <div class="g-checkbox-group">
    <slot></slot>
  </div>
</template>
