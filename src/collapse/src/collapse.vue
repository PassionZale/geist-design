<script setup lang="ts">
  import { provide, reactive, toRefs, computed } from 'vue'
  import { Props, COLLAPSE_PROPS_KEY } from './props'
  import type { CollapseEmits } from './emits'
  import type { CollapseProvide } from './interface'

  defineOptions({ name: 'GCollapse' })

  const props = defineProps(Props)

  const emit = defineEmits<CollapseEmits>()

  const value = computed({
    get(): string[] {
      return props.modelValue
    },
    set(changedValue: string[]) {
      emit('update:modelValue', changedValue)
    }
  })

  const setChange = (changedValue: string[]): void => {
    value.value = changedValue
  }

  /** 获取需要注入的依赖项 */
  provide<CollapseProvide>(
    COLLAPSE_PROPS_KEY,
    reactive({
      ...toRefs(props),
      setChange
    })
  )
</script>

<template>
  <div class="g-collapse-group">
    <slot />
  </div>
</template>
