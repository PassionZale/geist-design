<script setup lang="ts">
  import { Props } from './props'

  defineOptions({ name: 'GTag' })

  defineProps(Props)
</script>

<template>
  <span class="g-tag" :class="type && type">
    <slot></slot>
  </span>
</template>
