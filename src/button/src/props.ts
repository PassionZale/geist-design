import type { ExtractPropTypes } from 'vue'
import type { GeistIcon } from '../../_utils'
import { setBooleanProp, setStringProp, setObjectProp } from '../../_utils'

export type ButtonSize = 'mini' | 'small' | 'medium' | 'big' | 'huge'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'abort' | 'normal'

export const Props = {
  /**
   * 按钮大小
   * 
   * @values mini small medium big huge
   */
  size: setStringProp<ButtonSize>('medium'),
  /**
   * 按钮类型
   * 
   * @values primary success warning danger abort normal
   */
  type: setStringProp<ButtonType>(),
  /** 是否在加载中 */
  loading: setBooleanProp(),
  /** 按钮是否禁用 */
  disabled: setBooleanProp(),
  /** 是否包含阴影 */
  shadow: setBooleanProp(),
  /** 是否为圆角更大的按钮 */
  circular: setBooleanProp(),
  /** 自适应宽度 */
  auto: setBooleanProp(),
  /** 背景与边框反色 */
  ghost: setBooleanProp(),
  /** 设置图标(左边) */
  icon: setObjectProp<GeistIcon>(),
  /** 设置图标(右边) */
  iconRight: setObjectProp<GeistIcon>()
} as const

export type ButtonProps = ExtractPropTypes<typeof Props>
