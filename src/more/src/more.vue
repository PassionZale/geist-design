<script setup lang="ts">
  import { computed, ref, onMounted } from 'vue'
  import { GButton } from '../../button'
  import { Props } from './props'

  defineOptions({ name: 'GMore' })

  const props = defineProps(Props)

  const toggle = ref(false)

  const statusText = computed(() => {
    const up = props.textUp || props.text

    return toggle.value ? up : props.text
  })

  onMounted(() => (toggle.value = props.expand))
</script>

<template>
  <div class="g-more" @click="toggle = !toggle">
    <g-button class="g-more-slot" circular size="small" :loading="loading">
      {{ statusText }}
    </g-button>
  </div>
</template>
