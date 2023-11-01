<script setup lang="ts">
  import { GToast } from 'geist-design'

  defineOptions({ name: 'ex-toast-action' })

  const show = (): void => {
    GToast({
      message: 'The Evil Rabbit jumped over the fence',
      action: 'insert',
      handler: () => toastHandler()
    })
  }

  const toastHandler = () => {
    GToast.danger('insert action cliced')
  }
</script>

<template>
  <g-button size="small" @click="show" auto> Toast with action </g-button>
</template>
