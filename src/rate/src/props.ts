import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setNumberProp } from '../../_utils'

export const Props = {
  /** 绑定值 */
  modelValue: setNumberProp(),
  /** 总数 */
  count: setNumberProp(5),
  /** 是否禁用 */
  disabled: setBooleanProp()
} as const

export type RateProps = ExtractPropTypes<typeof Props>
