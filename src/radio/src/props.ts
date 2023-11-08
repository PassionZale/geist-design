import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringNumberProp, setStringProp } from '../../_utils'

export const Props = {
  /** 绑定的值 */
  modelValue: setStringNumberProp(),
  /** */
  label: {
    ...setStringNumberProp(),
    required: true
  },
  /** 选中状态的值 */
  disabled: setBooleanProp(),
  /** 描述 */
  description: setStringProp()
} as const

export type RadioProps = ExtractPropTypes<typeof Props>
