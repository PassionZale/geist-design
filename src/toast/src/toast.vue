<script setup lang="ts">
  import { getCurrentInstance } from 'vue'
  import { Props } from './props'
  import { GButton } from '../..'

  import type { ComponentInternalInstance } from 'vue'

  defineOptions({ name: 'GToastTemplate' })

  defineProps(Props)

  const instance = getCurrentInstance() as ComponentInternalInstance

  const uid = instance.uid
</script>

<template>
  <div :id="`g-toast-${uid}`" class="g-toast-container">
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
