import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'

export const Props = {
  /** 链接地址 */
  href: setStringProp('javascript: void 0;'),
  /** 显示更多的图标 */
  more: setBooleanProp(),
  /** 粗体显示 */
  bold: setBooleanProp(),
  /** 隐藏图标 */
  pure: setBooleanProp(),
  /** 链接显示颜色 */
  color: setBooleanProp(),
  /** 跳转方式 */
  target: setStringProp('_blank'),
  /** 链接的 `rel` 属性 */
  rel: setStringProp('noopener noreferrer')
} as const

export type LinkProps = ExtractPropTypes<typeof Props>
