<script setup lang="ts">
  import { Props } from './props'

  defineOptions({ name: 'GDescription' })

  defineProps(Props)
</script>

<template>
  <dl class="g-description">
    <dt class="g-description-title">{{ title }}</dt>
    <dd v-if="$slots.default" class="g-description-content">
      <slot></slot>
    </dd>
    <dd v-else class="g-description-content">{{ content }}</dd>
  </dl>
</template>
