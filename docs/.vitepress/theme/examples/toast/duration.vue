<script setup lang="ts">
  import { GToast } from 'geist-design'

  defineOptions({ name: 'ex-toast-duration' })

  const show = (): void => {
    GToast({
      message: 'auto hide after 1.5s',
      duration: 1500
    })
  }
</script>

<template>
  <g-button size="small" @click="show">Duration</g-button>
</template>
