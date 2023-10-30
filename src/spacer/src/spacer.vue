<script setup lang="ts">
  import { computed } from 'vue'
  import { Props } from './props'

  defineOptions({ name: 'GSpacer' })

  const props = defineProps(Props)

  const marginLeft = computed(() => {
    return `calc(${props.x * 15.25}pt + 1px * ${props.x - 1})`
  })

  const marginTop = computed(() => {
    return `calc(${props.y * 15.25}pt + 1px * ${props.y - 1})`
  })
</script>

<template>
  <span class="g-spacer" :style="{ marginLeft, marginTop }" />
</template>
