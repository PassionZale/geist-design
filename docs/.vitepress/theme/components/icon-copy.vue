<script setup lang="ts">
  defineOptions({ name: 'ex-icon-copy' })
</script>

<template>
  <svg v-bind="$attrs" width="20px" height="20px" viewBox="0 0 13 15" aria-label="copy">
    <g fill="var(--accents-1)" stroke="currentColor" fill-rule="nonzero" stroke-width="1">
      <rect x="0.5" y="0.5" width="9" height="11" rx="1.5"></rect>
      <rect x="3.5" y="3.5" width="9" height="11" rx="1.5"></rect>
    </g>
  </svg>
</template>
