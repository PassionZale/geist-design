<script setup lang="ts">
  import { GToast } from 'geist-design'

  defineOptions({ name: 'ex-toast-handler' })

  const show = (): void => {
    GToast({
      type: 'success',
      action: 'again',
      message: 'click to try reconnect',
      handler: () => alert('ok')
    })
  }

  const close = (): void => {
    const instance = GToast({
      type: 'danger',
      action: 'close',
      message: 'click to close',
      handler: () => GToast.close(instance)
    })
  }

  const closeAll = (): void => {
    GToast({
      type: 'warning',
      action: 'close all',
      message: 'click to close all',
      handler: () => GToast.closeAll()
    })
  }
</script>

<template>
  <div class="buttons">
    <g-button size="small" @click="show()" type="success">set network</g-button>
    <g-button size="small" @click="close()" type="danger">close</g-button>
    <g-button size="small" @click="closeAll()" type="warning">close all</g-button>
  </div>
</template>

<style lang="scss" scoped>
  .buttons {
    button + button {
      margin-left: 20px;
    }
  }
</style>
