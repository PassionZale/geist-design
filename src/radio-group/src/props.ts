import { setBooleanProp, setStringNumberProp } from '../../_utils'

import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { RadioGroupProvide } from './interface'

export const Props = {
  /** 绑定的值 */
  modelValue: setStringNumberProp(),
  /** 是否禁用 */
  disabled: setBooleanProp()
} as const

export type RadioGroupProps = ExtractPropTypes<typeof Props>

export const RADIO_GROUP_INJECT_KEY: InjectionKey<RadioGroupProvide> = Symbol()
