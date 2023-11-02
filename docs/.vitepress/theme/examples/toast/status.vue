<script setup lang="ts">
  import { GToast } from 'geist-design'
  import type { ToastProps } from 'geist-design'

  defineOptions({ name: 'ex-toast-status' })

  const show = (type?: ToastProps['type']) => {
    GToast({
      type,
      action: 'insert',
      message: 'The Evil Rabbit jumped over the fence'
    })
  }

  const fn = () => GToast.success('The Evil Rabbit jumped over the fence')
</script>

<template>
  <div class="buttons">
    <g-button size="small" @click="show('success')" type="success">show success</g-button>
    <g-button size="small" @click="show('danger')" type="danger">show danger</g-button>
    <g-button size="small" @click="show('warning')" type="warning">show warning</g-button>
    <g-button size="small" @click="fn()">show function</g-button>
  </div>
</template>

<style lang="scss" scoped>
  .buttons {
    button + button {
      margin-left: 20px;
    }
  }
</style>
