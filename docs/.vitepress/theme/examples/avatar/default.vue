<script setup lang="ts">
  defineOptions({ name: 'ex-avatar-default' })
</script>

<template>
  <div>
    <g-avatar src="/ex-image.jpg" style="margin-right: 2px" />
    <g-avatar src="/ex-image.jpg" style="margin-right: 2px" />
    <g-avatar src="/ex-image.jpg" style="margin-right: 2px" />
    <g-avatar src="/ex-image.jpg" />

    <br />

    <g-avatar src="/ex-image.jpg" shape="square" style="margin-right: 2px" />
    <g-avatar src="/ex-image.jpg" shape="square" style="margin-right: 2px" />
    <g-avatar src="/ex-image.jpg" shape="square" style="margin-right: 2px" />
    <g-avatar src="/ex-image.jpg" shape="square" />
  </div>
</template>
