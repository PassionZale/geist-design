<script setup lang="ts">
  defineOptions({ name: 'ex-fieldset-disabled' })
</script>

<template>
  <g-fieldset disabled>
    <h1>The Evil Rabbit Jumped over the Fence</h1>
    <p>The Evil Rabbit Jumped over the Fence</p>

    <template #footer>
      <p>The Evil Rabbit Jumped over the Fence</p>
      <g-button size="mini" type="primary" auto disabled>action</g-button>
    </template>
  </g-fieldset>
</template>
