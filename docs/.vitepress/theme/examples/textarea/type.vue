<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-textarea-type' })

  const successValue = ref('success value')
  const dangerValue = ref('danger value')
  const warningValue = ref('warning value')
</script>

<template>
  <g-textarea v-model="successValue" type="success"></g-textarea>
  
  <g-spacer />

  <g-textarea v-model="dangerValue" type="danger"></g-textarea>

  <g-spacer />

  <g-textarea v-model="warningValue" type="warning"></g-textarea>
</template>
