<script setup lang="ts">
  import { Props } from './props'

  defineOptions({ name: 'GImage' })

  defineProps(Props)
</script>

<template>
  <figure class="g-image">
    <main :style="{ width: width || 'auto' }">
      <img :src="src" draggable="false" :class="{ shadow }">
      <p v-if="caption" :class="{ shadow }">{{ caption }}</p>
    </main>
  </figure>
</template>
