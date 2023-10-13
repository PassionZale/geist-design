<script setup lang="ts">
  import image from './assets/vue.svg'
</script>

<template>
  <g-avatar :src="image" size="small" />
  <g-avatar :src="image" />
  <g-avatar :src="image" size="big" />
  <g-avatar :src="image" size="huge" />
  <br />
  <g-avatar text="Ohqu" size="small"/>
  <g-avatar text="Ohqu" />
  <g-avatar text="Ohqu" size="big" />
  <g-avatar text="Ohqu" size="huge" />
</template>
