import type { ExtractPropTypes } from 'vue'
import { setStringProp } from '../../_utils'

export const Props = {
  /** 头像 */
  src: setStringProp(),
  /** 用户名 */
  name: setStringProp(),
  /** 文字形式的头像 */
  text: setStringProp(),
  /** 头像图片的 alt 属性 */
  altText: setStringProp()
} as const

export type UserProps = ExtractPropTypes<typeof Props>
