<script setup lang="ts">
  defineOptions({ name: 'ex-badge-limit' })
</script>

<template>
  <g-badge count="150" :max-count="100" status="error" style="margin-right: 20px">
    <g-avatar shape="square" src="/ex-image.jpg" />
  </g-badge>

  <g-badge count="0" status="error" style="margin-right: 20px">
    <g-avatar shape="square" src="/ex-image.jpg" />
  </g-badge>

  <g-badge count="0" status="error" show-zero>
    <g-avatar shape="square" src="/ex-image.jpg" />
  </g-badge>
</template>
