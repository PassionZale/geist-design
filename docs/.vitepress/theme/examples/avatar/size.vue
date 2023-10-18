<script setup lang="ts">
  defineOptions({ name: 'ex-avatar-size' })
</script>

<template>
  <div>
    <g-avatar src="/ex-image.jpg" size="small" style="margin-right: 2px" />
    <g-avatar src="/ex-image.jpg" size="medium" style="margin-right: 2px" />
    <g-avatar src="/ex-image.jpg" size="big" style="margin-right: 2px" />
    <g-avatar src="/ex-image.jpg" size="huge" />
  </div>
</template>
