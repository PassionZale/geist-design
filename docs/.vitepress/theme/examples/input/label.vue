<script setup lang="ts">
  defineOptions({ name: 'ex-input-label' })
</script>

<template>
  <g-input prefix-label="https://" model-value="www.lovchun.com"></g-input>
  <g-spacer />
  <g-input suffix-label=".com" model-value="https://www.lovchun"></g-input>
  <g-spacer />
  <g-input prefix-label="https://" suffix-label=".com" model-value="www.lovchun"></g-input>
</template>
