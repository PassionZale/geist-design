<script setup lang="ts">
  defineOptions({ name: 'ex-input-label' })
</script>

<template>
  <g-input prefix-label="https://" model-value="lovchun.com"></g-input>
  <g-spacer />
  <g-input suffix-label=".com" model-value="https://lovchun"></g-input>
  <g-spacer />
  <g-input prefix-label="https://" suffix-label=".com" model-value="lovchun"></g-input>
</template>
