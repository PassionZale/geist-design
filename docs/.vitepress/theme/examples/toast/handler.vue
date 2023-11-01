<script setup lang="ts">
  import { GToast } from 'geist-design'

  defineOptions({ name: 'ex-toast-handler' })

  const show = (): void => {
    GToast({
      type: 'danger',
      action: 'again',
      message: 'click to try reconnect',
      handler: () => alert('ok')
    })
  }

  const close = (): void => {
    GToast({
      type: 'success',
      action: 'close',
      message: 'click to close all',
      handler: () => GToast.closeAll()
    })
  }
</script>

<template>
  <div class="buttons">
    <g-button size="small" @click="show()" type="danger">set network</g-button>
    <g-button size="small" @click="close()" type="success">close all</g-button>
  </div>
</template>

<style lang="scss" scoped>
  .buttons {
    button + button {
      margin-left: 20px;
    }
  }
</style>
