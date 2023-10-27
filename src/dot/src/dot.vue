<script setup lang="ts">
  import { Props } from './props'

  defineOptions({ name: 'GDot' })

  defineProps(Props)
</script>

<template>
  <span class="g-dot-wrapper">
    <span class="g-dot" :class="[type]"></span>
    <span v-if="$slots.default || label" class="g-dot-label">
      <slot>{{ label }}</slot>
    </span>
  </span>
</template>
