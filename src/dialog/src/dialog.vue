<script setup lang="ts">
  import { computed, onMounted, watchEffect } from 'vue'
  import { Props } from './props'
  import { lockScroll } from '../../_utils'

  import type { DialogEmits } from './emits'

  defineOptions({ name: 'GDialog' })

  const props = defineProps(Props)

  const emit = defineEmits<DialogEmits>()

  const model = computed({
    get(): boolean {
      return props.modelValue
    },

    set(value: boolean) {
      emit('update:modelValue', value)
    }
  })

  watchEffect(() => {
    lockScroll(props.modelValue)
  })

  onMounted(() => {
    if (props.modelValue) {
      lockScroll(props.modelValue)
    }
  })

  const confirm = (result: boolean): void => {
    if (result) {
      props.beforeDone(() => {
        model.value = false

        emit('ok')
      })
    } else {
      model.value = false
      emit('close')
    }
  }

  const close = (): void => {
    if (!props.maskClose) return

    confirm(false)
  }
</script>

<template>
  <teleport to="body">
    <transition name="g-dialog-backdrop">
      <div v-show="model" class="g-dialog-root">
        <div class="g-dialog-backdrop"></div>
        <div
          v-if="maskClose"
          class="g-dialog-backdrop responsive"
          @click.self="close"
        ></div>
        <transition name="g-dialog-slide">
          <div
            v-if="model"
            class="g-dialog-wrapper"
            :style="{ width, minWidth: width || '' }"
          >
            <div class="g-dialog-content">
              <h2 v-if="title || $slots.header" class="header">
                <slot name="header">{{ title }}</slot>
              </h2>
              <div class="body">
                <slot></slot>
              </div>
            </div>
            <div class="g-dialog-footer">
              <slot name="footer">
                <button class="action" @click.stop="confirm(false)">{{ cancel }}</button>
                <button class="action" @click.stop="confirm(true)">{{ done }}</button>
              </slot>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>
