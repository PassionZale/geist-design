import type { ExtractPropTypes } from 'vue'
import { setStringProp } from '../../_utils'

export type DotTypes = 'primary' | 'danger' | 'success' | 'warning'

export const Props = {
  /**
   * 点的类型
   * 
   * @values primary danger success warning
   */
  type: setStringProp<DotTypes>('primary'),
  /** 标签文字 */
  label: setStringProp()
} as const

export type DotProps = ExtractPropTypes<typeof Props>
