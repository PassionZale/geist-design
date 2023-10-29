import type { ExtractPropTypes } from 'vue'
import { setBooleanProp } from '../../_utils'

export const Props = {
  /** key Shift */
  shift: setBooleanProp(),
  /** Key Alt Option */
  alt: setBooleanProp(),
  /** key Option */
  option: setBooleanProp(),
  /** key Command */
  command: setBooleanProp(),
  /** key Ctrl */
  ctrl: setBooleanProp(),
  /** 显示更小的尺寸 */
  small: setBooleanProp()
} as const

export type KeyboardProps = ExtractPropTypes<typeof Props>
