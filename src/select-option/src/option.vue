<script setup lang="ts">
  import { computed, inject } from 'vue'
  import { Props } from './props'
  import { SELECT_INJECT_KEY } from '../../select/src/props'

  import type { SelectProvide } from '../../select'

  defineOptions({ name: 'GOption' })

  const props = defineProps(Props)

  const parentInject: SelectProvide | null = inject(SELECT_INJECT_KEY, null)

  const isDisabled = computed(() => {
    if (parentInject) return parentInject.disabled

    return props.disabled
  })
</script>

<template>
  <option :value="value" :disabled="isDisabled">
    {{ label || value }}
  </option>
</template>
