<script setup lang="ts">
  import image from './assets/geist-design.svg'
  import { GIconAirplay } from '@whouu/geist-design-icons'
  import { GToast } from 'geist-design'

  function handleToast1 (): void {
    GToast.success('handleToast1')
  }

  function handleToast2 (): void {
    GToast.danger('handleToast2')
  }

  function handleToast3 (): void {
    GToast.closeAll()
  }
</script>

<template>
  <g-icon-airplay size="34" color="red" />
  <br />

  <g-avatar :src="image" size="small" />
  <g-avatar :src="image" />
  <g-avatar :src="image" size="big" />
  <g-avatar :src="image" size="huge" />
  <br />
  <g-avatar text="Ohqu" size="small" />
  <g-avatar text="Ohqu" />
  <g-avatar text="Ohqu" size="big" />
  <g-avatar text="Ohqu" size="huge" />

  <g-spacer />

  <div style="display: flex">
    <g-spacer />
    <g-button @click="handleToast1">toast1</g-button>
    <g-spacer />
    <g-button @click="handleToast2">toast2</g-button>
    <g-spacer />
    <g-button @click="handleToast3">toast3</g-button>
  </div>
</template>
