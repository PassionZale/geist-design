<script setup lang="ts">
  import { Props } from './props'
  import { GButton } from '../..'

  defineOptions({ name: 'GToastTemplate' })

  defineProps(Props)
</script>

<template>
  <div :id="`g-toast-${id}`" class="g-toast-container">
    <div class="g-toast" :class="type && type">
      <span class="message" :class="{ action }">{{ message }}</span>
      <g-button
        v-if="action"
        auto
        ghost
        size="mini"
        :type="type"
        @click="handler && handler()"
      >
        {{ action }}
      </g-button>
    </div>
  </div>
</template>
