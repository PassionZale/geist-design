<script setup lang="ts">
  defineOptions({ name: 'ex-badge-basic' })
</script>

<template>
  <g-badge count="5" style="margin-right: 5px" />

  <g-badge count="100" status="success" style="margin-right: 5px" />

  <g-badge count="100" status="warning" style="margin-right: 5px;" />

  <g-badge count="100" status="error" style="margin-right: 5px;" />
  
  <g-badge count="100" style="background: green" />
</template>
