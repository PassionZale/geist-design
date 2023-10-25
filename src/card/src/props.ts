import type { ExtractPropTypes } from 'vue'
import { setBooleanProp } from '../../_utils'

export const Props = {
  /** 打开 hover 效果 */
  hoverable: setBooleanProp(),
  /** 打开 shadow 效果 */
  shadow: setBooleanProp()
} as const

export type CardProps = ExtractPropTypes<typeof Props>
