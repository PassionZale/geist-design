<script setup lang="ts">
  import { Props } from './props'

  defineOptions({ name: 'GFieldset' })

  defineProps(Props)
</script>

<template>
  <div class="g-fieldset" :class="disabled && 'disabled'">
    <div class="g-fieldset-content">
      <slot></slot>
    </div>
    <div v-if="!$slots.footer" class="g-fieldset-footer">{{ footer }}</div>
    <div v-else class="g-fieldset-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
