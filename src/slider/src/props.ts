import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setNumberProp } from '../../_utils'

export const Props = {
  /** 绑定的值 */
  modelValue: setNumberProp(0),
  /** 步长 */
  step: setNumberProp(1),
  /** 显示步长的标识点 */
  showDots: setBooleanProp(),
  /** 禁用 */
  disabled: setBooleanProp(),
  /** 最小值 */
  min: setNumberProp(0),
  /** 最大值 */
  max: setNumberProp(100)
} as const

export type SliderProps = ExtractPropTypes<typeof Props>
