<script lang="ts" setup>
  import { computed, reactive } from 'vue'
  import { Props } from './props'
  import type { ButtonEmits } from './emits'

  defineOptions({ name: 'GButton' })

  defineEmits<ButtonEmits>()

  const props = defineProps(Props)

  const state = reactive<{ isFocus: boolean }>({
    isFocus: false
  })

  const showIcon = computed(() => props.icon && props.size !== 'mini' && !props.loading)

  const showIconRight = computed(
    () => props.iconRight && props.size !== 'mini' && !props.loading
  )

  const tabindex = computed(() => (props.disabled ? -1 : 0))

  const classes = computed(() => {
    let str = ''
    props.loading && (str += ' loading')
    props.disabled && (str += ' disabled')
    props.shadow && (str += ' shadow')
    props.circular && (str += ' circular')
    props.auto && (str += ' auto')
    props.ghost && (str += ' ghost')
    props.type && (str += ` ${props.type}`)
    props.size && (str += ` ${props.size}`)
    state.isFocus && (str += ' g-btn-tab-selected')
    return str.trim()
  })
</script>

<template>
  <button
    class="g-btn"
    :class="classes"
    :tabindex="tabindex"
    @click="$event => $emit('click', $event)"
    @keyup.tab="state.isFocus = true"
    @blur="state.isFocus = false"
  >
    <span v-if="loading" class="g-btn-loading-shim"><i></i><i></i><i></i></span>

    <span v-if="showIcon" class="g-btn-icon default">
      <component :is="icon" />
    </span>

    <slot></slot>

    <span v-if="showIconRight" class="g-btn-icon right">
      <component :is="iconRight" />
    </span>
  </button>
</template>
