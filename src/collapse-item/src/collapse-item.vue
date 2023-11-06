<script setup lang="ts">
  import { computed, inject } from 'vue'
  import { GIconChevronDown } from '@whouu/geist-design-icons'
  import { Props } from './props'
  import { COLLAPSE_PROPS_KEY } from '../../collapse/src/props'
  import { TransitionExpand } from '../../_utils'

  import type { CollapseProvide } from '../../collapse'

  defineOptions({ name: 'GCollapseItem' })

  const props = defineProps(Props)

  /** 获取父组件注入的依赖项 */
  const parentInject: CollapseProvide | null = inject(COLLAPSE_PROPS_KEY, null)

  const isActive = computed({
    get(): boolean {
      return !!parentInject?.modelValue.find(name => name === props.name)
    },

    set(value: boolean) {
      if (parentInject) {
        const changedValue = value
          ? [...new Set(parentInject.modelValue.concat([props.name]))]
          : parentInject.modelValue.filter(name => name !== props.name)

        parentInject.setChange(changedValue)
      }
    }
  })
</script>

<template>
  <div class="g-collapse" :class="{ shadow }">
    <div>
      <div class="g-collapse-title" @click="isActive = !isActive">
        <h3>
          <slot name="title"></slot>
        </h3>
        <g-icon-chevron-down class="icon" :class="{ reverse: isActive }" />
      </div>

      <div class="g-collapse-subtitle">
        <slot name="subTitle"></slot>
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
