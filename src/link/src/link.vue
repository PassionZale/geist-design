<script setup lang="ts">
  import { GIconArrowRight, GIconExternalLink } from '@whouu/geist-design-icons'
  import { Props } from './props'
  import { computed } from 'vue'

  defineOptions({ name: 'GLink' })

  const props = defineProps(Props)

  const currentColor = computed(() =>
    props.color ? 'var(--geist-success)' : 'var(--geist-foreground)'
  )
</script>

<template>
  <span class="g-link-wrapper">
    <a
      class="g-link"
      :href="href"
      :target="target"
      :rel="rel"
      :class="{ 'no-decoration': more, bold, color }"
    >
      <slot></slot>
      
      <g-icon-arrow-right v-if="!pure && more" :color="currentColor" />

      <g-icon-external-link v-if="!pure && !more" :color="currentColor" />
    </a>
  </span>
</template>
