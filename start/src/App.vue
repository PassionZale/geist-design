<script setup lang="ts">
  import image from './assets/geist-design.svg'
  import { GIconAirplay } from '@whouu/geist-design-icons'
  import { GToast } from 'geist-design'
  import { ref, watchEffect } from 'vue'

  function handleToast1(): void {
    GToast.success('handleToast1')
  }

  function handleToast2(): void {
    GToast.danger('handleToast2')
  }

  function handleToast3(): void {
    GToast.closeAll()
  }

  const textareaValue = ref('textareaValue')

  watchEffect(() => console.log(textareaValue.value))

  const inputValue = ref('inputValue')

  watchEffect(() => console.log(inputValue.value))

  const collapseValue = ref([])

  watchEffect(() => console.log(collapseValue.value))
</script>

<template>
  <g-collapse v-model="collapseValue">
    <g-collapse-item name="1">
      <template #title>Question A</template>
      <template #subTitle>A-1</template>
      <p>
        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </g-collapse-item>
  </g-collapse>

  <g-textarea v-model="textareaValue"></g-textarea>

  <g-input v-model="inputValue"></g-input>

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
