import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'

export type AvatarSize = 'small' | 'medium' | 'big' | 'huge'

export type AvatarShape = 'circle' | 'square'

export const Props = {
  /** 堆叠显示头像 */
  stacked: setBooleanProp(),
  /** 图片的 src 属性 */
  src: setStringProp(),
  /** 当缺少 src 时显示的文字 */
  text: setStringProp(),
  /**
   * 头像大小
   * 
   * @values small medium big huge
   */
  size: setStringProp<AvatarSize>('medium'),
  /**
   * 组件形状
   * 
   * @values circle square
   */
  shape: setStringProp<AvatarShape>('circle')
} as const

export type AvatarProps = ExtractPropTypes<typeof Props>
