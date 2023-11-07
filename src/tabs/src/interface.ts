import type { Ref } from 'vue'

export type { TabsProps } from './props'

export interface TabsItem {
  label: string
  name: string | number
  disabled: boolean | null
  prefixIcon: object | null
  suffixIcon: object | null
}

export interface TabsProvide {
  activeName: Ref<number | string>
  registerTabsItem: (tabsItem: TabsItem) => void
}
