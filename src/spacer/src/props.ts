import type { ExtractPropTypes } from 'vue'
import { setNumberProp } from '../../_utils'

export const Props = {
  /** 宽度 */
  x: setNumberProp(1),
  /** 高度 */
  y: setNumberProp(1)
} as const

export type SpacerProps = ExtractPropTypes<typeof Props>
