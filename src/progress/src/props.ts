import type { ExtractPropTypes } from 'vue'
import { setArrayProp, setStringNumberProp, setStringProp } from '../../_utils'

export type ProgressFix = 'top' | 'bottom'

export interface ProgressColorItem {
  value: string | number
  color: string
}

export type ProgressType = 'default' | 'success' | 'danger' | 'warning' | 'secondary'

export const Props = {
  /** 当前进度值 */
  value: setStringNumberProp(0),
  /** 固定方式 */
  fix: setStringProp<ProgressFix>(),
  /** 背景色 */
  colors: setArrayProp<ProgressColorItem[]>(),
  /** 最大值 */
  max: setStringNumberProp(100),
  /** 类型 */
  type: setStringProp<ProgressType>('default')
} as const

export type ProgressProps = ExtractPropTypes<typeof Props>
