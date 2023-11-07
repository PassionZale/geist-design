import type { ExtractPropTypes } from 'vue'
import { setStringProp, setStringNumberProp, setBooleanProp } from '../../_utils'

export const Props = {
  /** 显示文字 */
  text: setStringProp<string>('show more'),
  /** 激活时显示的文字 */
  textUp: setStringNumberProp(),
  /** 默认是否展开 */
  expand: setBooleanProp(),
  /** 显示加载按钮 */
  loading: setBooleanProp()
} as const

export type MoreProps = ExtractPropTypes<typeof Props>
