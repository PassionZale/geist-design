<script setup lang="ts">
  defineOptions({ name: 'ex-tag-type' })
</script>

<template>
  <div class="tags">
    <g-tag type="success">success</g-tag>

    <g-spacer />

    <g-tag type="danger">danger</g-tag>

    <g-spacer />

    <g-tag type="warning">warning</g-tag>
  </div>
</template>

<style lang="scss" scoped>
.tags {
  display: flex;
}
</style>

