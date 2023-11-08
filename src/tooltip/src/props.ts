import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setNumberProp, setStringProp } from '../../_utils'

export type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

export const Props = {
  /** 显示内容 */
  content: setStringProp(),
  /** 弹出方向 */
  placement: setStringProp<TooltipPlacement>('bottom'),
  /** 点击模式 */
  clickable: setBooleanProp(),
  /** 延迟关闭时间ms */
  delay: setNumberProp(0)
} as const

export type TooltipProps = ExtractPropTypes<typeof Props>
