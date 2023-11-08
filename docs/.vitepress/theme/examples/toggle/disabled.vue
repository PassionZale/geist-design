<script setup lang="ts">
  defineOptions({ name: 'ex-toggle-disabled' })
</script>

<template>
  <g-toggle disabled style="margin-right: 10px;" />

  <g-toggle disabled :model-value="true"/>
</template>
