<script setup lang="ts">
  import { GToast } from 'geist-design'

  defineOptions({ name: 'ex-toast-duration' })

  const show = (duration?: number): void => {
    GToast({
      type: duration ? 'success' : 'danger',
      message: duration ? 'Auto hide after 1.5s' : 'Visible forever',
      duration: duration || 0
    })
  }
</script>

<template>
  <div class="buttons">
    <g-button size="small" @click="show(1500)" type="success">Duration 1500</g-button>
    <g-button size="small" @click="show()" type="danger">Duration 0</g-button>
  </div>
</template>

<style lang="scss" scoped>
  .buttons {
    button + button {
      margin-left: 20px;
    }
  }
</style>
