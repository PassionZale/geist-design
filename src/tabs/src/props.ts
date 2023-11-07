import { setStringNumberProp } from '../../_utils'

import type { ExtractPropTypes, InjectionKey } from 'vue'

import type { TabsProvide } from './interface'

export const Props = {
  /** 绑定值 */
  modelValue: {
    ...setStringNumberProp(),
    required: true
  }
} as const

export type TabsProps = ExtractPropTypes<typeof Props>

export const TABS_INJECT_KEY: InjectionKey<TabsProvide> = Symbol()
