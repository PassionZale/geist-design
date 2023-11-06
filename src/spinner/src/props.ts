import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'

export type SpinnerSize = 'mini' | 'small' | 'normal' | 'big'

export const Props = {
  /**
   * 大小
   * 
   * @values 'mini' | 'small' | 'normal' | 'big'
   */
  size: setStringProp<SpinnerSize>(),
  /** 自动使用大小 */
  auto: setBooleanProp()
} as const

export type SpinnerProps = ExtractPropTypes<typeof Props>
