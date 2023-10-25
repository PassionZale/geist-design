<script setup lang="ts">
  defineOptions({ name: 'ex-typography-small' })

  const text = "Geitst design typographt small"
</script>

<template>
  <div>
    <small>{{ text }}</small>.

    <small><b>{{ text }}</b></small>
  </div>
</template>