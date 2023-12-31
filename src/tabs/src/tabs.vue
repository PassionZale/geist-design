<script setup lang="ts">
  import { reactive, computed, provide } from 'vue'
  import { Props, TABS_INJECT_KEY } from './props'

  import type { TabsItem, TabsProvide } from './interface'
  import type { TabsEmits } from './emits'

  defineOptions({ name: 'GTabs' })

  const emit = defineEmits<TabsEmits>()

  const props = defineProps(Props)

  const items = reactive<TabsItem[]>([])

  const activeName = computed({
    get() {
      return props.modelValue
    },

    set(value: string | number) {
      emit('update:modelValue', value)
    }
  })

  const registerTabsItem = (tabsItem: TabsItem): void => {
    items.push(tabsItem)
  }

  const selectTabsItem = (item: TabsItem): void => {
    const { disabled, name } = item

    if (disabled) return

    activeName.value = name
  }

  provide<TabsProvide>(TABS_INJECT_KEY, {
    activeName,
    registerTabsItem
  })
</script>

<template>
  <div class="g-tabs-container">
    <div
      v-for="item in items"
      :key="item.name"
      class="g-tabs-item-wrapper"
      :class="{ disabled: item.disabled }"
      @click="selectTabsItem(item)"
    >
      <div class="g-tabs-item" :class="{ active: activeName === item.name }">
        <component
          :is="item.prefixIcon"
          v-if="item.prefixIcon"
          class="g-tabs-item-prefix-icon"
        />

        <div>{{ item.label }}</div>
        
        <component
          :is="item.suffixIcon"
          v-if="item.suffixIcon"
          class="g-tabs-item-suffix-icon"
        />
      </div>
    </div>
  </div>
  <slot></slot>
</template>
