import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringNumberProp, setStringProp } from '../../_utils'

export type BadgeStatus = 'success' | 'warning' | 'error'

export const Props = {
  /** 显示的数字 */
  count: setStringNumberProp(),
  /** 最大值 */
  maxCount: setStringNumberProp(),
  /** 是否显示 0 */
  showZero: setBooleanProp(),
  /** 以圆点的方式显示 */
  dot: setBooleanProp(),
  /**
   * 组件状态
   * 
   * @values success warning error
   */
  status: setStringProp()
} as const

export type BadgeProps = ExtractPropTypes<typeof Props>
