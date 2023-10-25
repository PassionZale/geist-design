import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'

export type LinkTarget = '_self' | '_blank' | '_parent' | '_top'

export const Props = {
  /** 链接地址 */
  href: setStringProp<string>('javascript: void 0;'),
  /** 显示更多的图标 */
  more: setBooleanProp(),
  /** 粗体显示 */
  bold: setBooleanProp(),
  /** 隐藏图标 */
  pure: setBooleanProp(),
  /** 链接显示颜色 */
  color: setBooleanProp(),
  /** 
   * 跳转方式
   * 
   * @values _self _blank _parent _top
   */
  target: setStringProp<LinkTarget>('_blank'),
  /** 链接的 `rel` 属性 */
  rel: setStringProp<string>('noopener noreferrer')
} as const

export type LinkProps = ExtractPropTypes<typeof Props>
