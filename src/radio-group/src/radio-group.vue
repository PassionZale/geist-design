<script setup lang="ts">
  import { provide, reactive, toRefs } from 'vue'
  import { Props, RADIO_GROUP_INJECT_KEY } from './props'

  import type { RadioGroupEmits } from './emits'
  import type { RadioGroupProvide } from './interface'

  defineOptions({ name: 'GRadioGroup' })

  const props = defineProps(Props)

  const emit = defineEmits<RadioGroupEmits>()

  const setChange = (changedValue: string | number): void => {
    emit('update:modelValue', changedValue)
  }

  provide<RadioGroupProvide>(
    RADIO_GROUP_INJECT_KEY,
    reactive({
      ...toRefs(props),
      setChange
    })
  )
</script>

<template>
  <div class="g-radio-group">
    <slot></slot>
  </div>
</template>
