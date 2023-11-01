<script setup lang="ts">
  import { GToast } from 'geist-design'

  defineOptions({ name: 'ex-toast-basic' })

  const show = (): void => {
    GToast('The Evil Rabbit jumped over the fence')
  }
</script>

<template>
  <g-button size="small" @click="show">Basic</g-button>
</template>
