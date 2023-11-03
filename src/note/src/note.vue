<script setup lang="ts">
  import { Props } from './props'

  defineOptions({ name: 'GNote' })

  defineProps(Props)
</script>

<template>
  <div class="g-note" :class="[type, filled && 'filled']">
    <span v-if="label" class="g-note-type">
      <b>{{ label }}:&nbsp;</b>
    </span>
    <slot></slot>
  </div>
</template>
