import { setArrayProp, setBooleanProp } from '../../_utils'

import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { CheckboxGroupProvide } from './interface'

export type CheckboxGroupModelValue = (string | number | boolean)[]

export const Props = {
  /** 绑定的值 */
  modelValue: setArrayProp<CheckboxGroupModelValue>(),
  /** 是否禁用 */
  disabled: setBooleanProp()
} as const

export type CheckboxGroupProps = ExtractPropTypes<typeof Props>

export const CHECKBOX_GROUP_INJECT_KEY: InjectionKey<CheckboxGroupProvide> = Symbol()
