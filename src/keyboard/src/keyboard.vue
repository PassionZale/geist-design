<script setup lang="ts">
  import { computed } from 'vue'
  import { Props } from './props'

  defineOptions({ name: 'GKeyboard' })

  const props = defineProps(Props)

  const isOption = computed(() => props.alt || props.option)
</script>

<template>
  <kbd class="g-keyboard" :class="{ small }">
    <span v-if="shift">⇧</span>
    <span v-if="isOption">⌥</span>
    <span v-if="command">⌘</span>
    <span v-if="ctrl">⌃</span>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </kbd>
</template>
