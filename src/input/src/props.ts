import type { ExtractPropTypes } from 'vue'
import {
  setBooleanProp,
  setStringNumberProp,
  setStringProp,
  setObjectProp
} from '../../_utils'

import type { GeistIcon } from '../../_utils'

export type InputSizes = 'mini' | 'small' | 'medium' | 'big'
export type InputStatus = 'primary' | 'success' | 'warning' | 'danger'

export const Props = {
  /** 绑定值 */
  modelValue: setStringNumberProp(),
  /** 是否显示清除按钮 */
  clearable: setBooleanProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 前缀文本 */
  prefixLabel: setStringProp(),
  /** 后缀文本 */
  suffixLabel: setStringProp(),
  /** 前缀图标 */
  prefixIcon: setObjectProp<GeistIcon>(),
  /** 后缀图标 */
  suffixIcon: setObjectProp<GeistIcon>(),
  /**
   * 尺寸
   *
   * @values 'mini' | 'small' | 'medium' | 'big'
   */
  size: setStringProp<InputSizes>(),
  /**
   * 状态
   *
   * @values 'primary' | 'success' | 'warning' | 'danger'
   */
  status: setStringProp<InputStatus>('primary'),
  /** 原生的 HTML 属性 */
  type: setStringProp()
} as const

export type InputProps = ExtractPropTypes<typeof Props>
