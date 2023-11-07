<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({ name: 'ex-dialog-more' })

  const visible = ref(false)
</script>

<template>
  <g-button size="small" @click="visible = true">Show More Element</g-button>

  <g-dialog
    v-model="visible"
    title="Contribute To Geist Design"
    cancel="no thks."
    done="ok!"
  >
    <g-spacer :y="0.5" />
    <div>input your email:</div>
    <g-spacer :y="0.5" />
    <g-input size="small" model-value="whouu@qq.com" />
  </g-dialog>
</template>
