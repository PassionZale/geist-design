<script lang="ts" setup>
  import { computed } from 'vue'
  import { Props } from './props'

  defineOptions({ name: 'GAvatar' })

  const props = defineProps(Props)

  const hasLink = computed(() => !!props.src)

  const isSingleText = computed(() => props.text && props.text.length === 1)
</script>

<template>
  <span
    class="g-avatar"
    :class="[shape, size && size, isSingleText && 'single', stacked && 'stacked']"
  >
    <img v-if="hasLink" :src="src" draggable="false" />
    <span v-else class="g-avatar-string">{{ text }}</span>
  </span>
</template>
