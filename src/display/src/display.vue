<script setup lang="ts">
  import { Props } from './props'

  defineOptions({ name: 'GDisplay' })

  defineProps(Props)
</script>

<template>
  <div class="g-display">
    <div class="g-display-content" :class="{ shadow }" :style="{ width }">
      <slot></slot>
    </div>
    <div
      v-if="caption || $slots.caption"
      class="g-display-caption"
      :class="{ marginLarge: shadow }"
    >
      <slot name="caption">{{ caption }}</slot>
    </div>
  </div>
</template>
