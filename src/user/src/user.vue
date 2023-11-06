<script setup lang="ts">
  import { GAvatar } from '../../avatar';
  import { Props } from './props'

  defineOptions({ name: 'GUser' })

  defineProps(Props)
</script>

<template>
  <div class="g-user" v-bind="$attrs">
    <g-avatar class="g-user-avatar" :src="src" :text="text" :alt="altText" />
    
    <div class="g-user-content">
      <span class="g-user-name">{{ name }}</span>
      <span class="g-user-description">
        <slot></slot>
      </span>
    </div>
  </div>
</template>
