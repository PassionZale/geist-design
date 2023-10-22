<script setup lang="ts">
  defineOptions({ name: 'ex-typography-paragraph' })

  const text = 'Geitst design typographt paragraph'
</script>

<template>
  <div class="not-vp-doc">
    <p>{{ text }}</p>

    <p>
      <b>{{ text }}</b>
    </p>

    <p style="font-size: 0.875rem">{{ text }}</p>
  </div>
</template>
