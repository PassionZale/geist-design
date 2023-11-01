import { setStringNumberProp, setFunctionProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { ButtonTypes } from '../../button/src/props'

export type ToastTypes = Exclude<ButtonTypes, 'primary' | 'abort'>

export const Props = {
  /** 唯一标识 */
  id: setStringNumberProp(),
  /** 提示语 */
  message: setStringProp(),
  /**
   * 类型
   *
   * @values success warning error normal
   */
  type: setStringProp<ToastTypes>('normal'),
  /** 按钮文案 */
  action: setStringProp(),
  /** 按钮回调 */
  handler: setFunctionProp()
} as const

export type ToastProps = ExtractPropTypes<typeof Props>
