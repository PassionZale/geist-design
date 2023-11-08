<script setup lang="ts">
  defineOptions({ name: 'ex-tooltip-custom' })
</script>

<template>
  <g-tooltip>
    <g-button>Paragraph</g-button>

    <template #content>
      <p>The <b>Evil Rabbit</b> Jumped over the <i>Fence</i></p>
    </template>
  </g-tooltip>
</template>
