import type { ExtractPropTypes, PropType } from 'vue'
import { setBooleanProp } from '../../_utils'

export type ToggleModelValue = string | number | boolean

export const Props = {
  /** 绑定值 */
  modelValue: {
    type: [String, Number, Boolean] as unknown as PropType<ToggleModelValue>
  },
  /** 是否禁用 */
  disabled: setBooleanProp()
} as const

export type ToggleProps = ExtractPropTypes<typeof Props>
