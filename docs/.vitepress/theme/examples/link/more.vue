<script setup lang="ts">
  defineOptions({ name: 'ex-link-more' })
</script>

<template>
  <div>
    <p>
      <g-link href="https://github.com/PassionZale/geist-design" more>Github url</g-link>
    </p>

    <p>
      <g-link href="https://github.com/PassionZale/geist-design" more color>Github url with color</g-link>
    </p>

    <p>
      <g-link href="https://github.com/PassionZale/geist-design" bold>Github url with bold</g-link>
    </p>

    <p>
      <g-link href="https://github.com/PassionZale/geist-design" pure>Github url with pure</g-link>
    </p>
  </div>
</template>
