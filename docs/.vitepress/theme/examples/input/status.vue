<script setup lang="ts">
  defineOptions({ name: 'ex-input-status' })
</script>

<template>
  <g-input placeholder="The Evil Rabbit" status="success"></g-input>
  <g-spacer />
  <g-input placeholder="The Evil Rabbit" status="danger"></g-input>
  <g-spacer />
  <g-input placeholder="The Evil Rabbit" status="warning"></g-input>
</template>
