<script setup lang="ts">
  import { computed } from 'vue'
  import { Props } from './props'

  defineOptions({ name: 'GBadge' })

  const props = defineProps(Props)

  const showSup = computed(() => {
    if (props.showZero) return true

    return +props.count !== 0
  })

  const countLabel = computed(() => {
    const max = +props.maxCount
    const count = +props.count

    if (Number.isNaN(max)) return count

    if (count > max) return `${max}+`

    return count
  })
</script>

<template>
  <span v-if="!$slots.default" class="g-badge" :class="status || ''">
    {{ countLabel }}
  </span>
  <span v-else class="g-badge-group">
    <slot></slot>
    <span v-if="showSup" class="g-badge" :class="[status || '', dot && 'dot']">
      {{ countLabel }}
    </span>
  </span>
</template>
