import { setBooleanProp, setStringNumberProp, setStringProp } from '../../_utils'

import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { SelectProvide } from './interface'

export type SelectSize = 'mini' | 'small' | 'medium'

export const Props = {
  /** 绑定值 */
  modelValue: setStringNumberProp(),
  /**
   * 尺寸
   *
   * @values 'mini' | 'small' | 'medium'
   */
  size: setStringProp<SelectSize>(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 隐藏 arrow icon */
  simple: setBooleanProp()
} as const

export type SelectProps = ExtractPropTypes<typeof Props>

export const SELECT_INJECT_KEY: InjectionKey<SelectProvide> = Symbol()
