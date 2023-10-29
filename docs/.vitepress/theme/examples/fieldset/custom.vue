<script setup lang="ts">
  defineOptions({ name: 'ex-fieldset-custom' })
</script>

<template>
  <g-fieldset>
    <h1>The Evil Rabbit Jumped over the Fence</h1>
    <p>The Evil Rabbit Jumped over the Fence</p>

    <template #footer>
      <p>The Evil Rabbit Jumped over the Fence</p>
      <g-button size="mini" type="primary" auto>action</g-button>
    </template>
  </g-fieldset>
</template>
