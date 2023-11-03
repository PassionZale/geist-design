import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringNumberProp, setStringProp } from '../../_utils'

export const Props = {
  /** 图片地址 */
  src: setStringProp(),
  /** 图片宽度 */
  width: setStringNumberProp('auto'),
  /** 开启阴影模式 */
  shadow: setBooleanProp(),
  /** 标题 */
  caption: setStringProp()
} as const

export type ImageProps = ExtractPropTypes<typeof Props>
