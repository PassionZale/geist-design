import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringNumberProp } from '../../_utils'

export const Props = {
  /** 值 */
  value: {
    ...setStringNumberProp(),
    required: true
  },
  /** 显示的文本 */
  label: setStringNumberProp(),
  /** 是否禁用 */
  disabled: setBooleanProp()
} as const

export type OptionProps = ExtractPropTypes<typeof Props>
