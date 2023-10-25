<script setup lang="ts">
  defineOptions({ name: 'ex-dot-label' })
</script>

<template>
  <g-dot>primary</g-dot>
  <br />
  <br />

  <g-dot type="success">success</g-dot>
  <br />
  <br />

  <g-dot type="danger">danger</g-dot>
  <br />
  <br />

  <g-dot type="warning" label="warning" />
</template>
