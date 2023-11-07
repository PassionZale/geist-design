<script setup lang="ts">
  import { computed, inject } from 'vue'
  import { GIconChevronDown } from '@whouu/geist-design-icons'
  import { Props } from './props'
  import { COLLAPSE_INJECT_KEY } from '../../collapse/src/props'
  import { TransitionExpand } from '../../_utils'

  import type { CollapseProvide } from '../../collapse'

  defineOptions({ name: 'GCollapseItem' })

  const props = defineProps(Props)

  /** 获取父组件注入的依赖项 */
  const parentInject: CollapseProvide | null = inject(COLLAPSE_INJECT_KEY, null)

  const isActive = computed({
    get(): boolean {
      return !!parentInject?.modelValue.find(name => name === props.name)
    },

    set(value: boolean) {
      if (parentInject) {
        // 手风琴模式
        if (parentInject.accordion) {
          parentInject.setChange(value ? [props.name] : [])
        } else {
          const changedValue = value
            ? [...new Set(parentInject.modelValue.concat([props.name]))]
            : parentInject.modelValue.filter(name => name !== props.name)

          parentInject.setChange(changedValue)
        }
      }
    }
  })
</script>

<template>
  <div class="g-collapse" :class="{ shadow }">
    <div class="g-collapse-header" @click="isActive = !isActive">
      <div class="g-collapse-title">
        <h3>
          <slot name="title">{{ title }}</slot>
        </h3>
        <g-icon-chevron-down class="icon" :class="{ reverse: isActive }" />
      </div>

      <div class="g-collapse-subtitle">
        <slot name="subTitle">{{ subTitle }}</slot>
      </div>
    </div>

    <transition-expand>
      <div v-if="isActive" class="g-collapse-content">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </transition-expand>
  </div>
</template>
