<script setup lang="ts">
  import { Props } from './props'

  defineOptions({ name: 'GSpinner' })

  defineProps(Props)
</script>

<template>
  <div class="g-spinner" :class="[size && size, { auto }]">
    <div class="g-spinner-container">
      <div
        v-for="index in 12"
        :key="`g-spinner-bar-${index}`"
        class="g-spinner-bar"
      />
    </div>
  </div>
</template>
