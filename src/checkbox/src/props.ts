import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringNumberProp } from '../../_utils'

export const Props = {
  /** 绑定的值 */
  modelValue: setBooleanProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 选中状态的值 */
  label: setStringNumberProp()
} as const

export type CheckboxProps = ExtractPropTypes<typeof Props>
