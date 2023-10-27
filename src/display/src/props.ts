import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'

export const Props = {
  /** 内容的宽度 */
  width: setStringProp<string>('auto'),
  /** 说明文字 */
  caption: setStringProp(),
  /** 阴影 */
  shadow: setBooleanProp()
} as const

export type DisplayProps = ExtractPropTypes<typeof Props>
