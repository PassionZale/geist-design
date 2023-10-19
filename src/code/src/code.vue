<script setup lang="ts">
  import { computed } from 'vue'
  import { Props } from './props'

  defineOptions({ name: 'GCode' })

  const props = defineProps(Props)

  const isBlock = computed(() => {
    if (props.inline) return false

    return props.bash || props.block
  })
</script>

<template>
  <pre v-if="isBlock" :class="{ 'g-bash': bash, 'g-pre': bash || block }">
    <code>
      <slot />
    </code>
  </pre>

  <code v-else>
    <slot />
  </code>
</template>
