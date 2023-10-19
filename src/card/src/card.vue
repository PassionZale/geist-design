<script setup lang="ts">
  import { Props } from './props'

  defineOptions({ name: 'GCard' })

  defineProps(Props)
</script>

<template>
  <div class="g-card" :class="[{ hoverable, shadow }]" v-bind="$attrs">
    <slot />
  </div>
</template>
