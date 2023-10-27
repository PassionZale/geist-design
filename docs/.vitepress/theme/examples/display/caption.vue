<script setup lang="ts">
  defineOptions({ name: 'ex-display-caption' })
</script>

<template>
  <g-display shadow>
    <img style="height: 200px; width: 200px;" src="/ex-image.jpg" />

    <template #caption>
      <p>
        foo bar <g-code>foo</g-code> to <g-code>bar</g-code>.
      </p>
    </template>
  </g-display>
</template>
