<script setup lang="ts">
  import { computed, inject, reactive, toRefs, onMounted } from 'vue'
  import { Props } from './props'
  import { TABS_INJECT_KEY } from '../../tabs/src/props'

  import type { TabsProvide } from '../../tabs'

  defineOptions({ name: 'GTabsItem' })

  const props = defineProps(Props)

  const tabItem = reactive({ ...toRefs(props) })

  const parentInject: TabsProvide | null = inject(TABS_INJECT_KEY, null)

  const isActive = computed(() => {
    return parentInject ? parentInject.activeName.value === props.name : false
  })

  onMounted(() => {
    if (parentInject) {
      parentInject.registerTabsItem(tabItem)
    }
  })
</script>

<template>
  <div v-show="isActive" class="g-tabs-content">
    <slot></slot>
  </div>
</template>
