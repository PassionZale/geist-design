import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setNumberProp, setStringProp } from '../../_utils'

export type TextAreaTypes = 'primary' | 'success' | 'danger' | 'warning'

export const Props = {
  /** 绑定值 */
  modelValue: setStringProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 输入框的行 */
  rows: setNumberProp(3),
  /**
   * 输入框类型
   *
   * @values 'primary' | 'success' | 'danger' | 'warning'
   */
  type: setStringProp<TextAreaTypes>('primary')
} as const

export type TextareaProps = ExtractPropTypes<typeof Props>
