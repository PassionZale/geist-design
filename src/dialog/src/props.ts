import type { ExtractPropTypes, PropType } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'

export type DialogBeforeDone = (done: Function) => void

export const Props = {
  /** 绑定值 */
  modelValue: setBooleanProp(),
  /** 点击背景是否可以关闭 */
  maskClose: setBooleanProp(true),
  /** 标题 */
  title: setStringProp(),
  /** 对话框宽度 */
  width: setStringProp(),
  /** 取消按钮的文字 */
  cancel: setStringProp<string>('cancel'),
  /** 确定按钮的文字 */
  done: setStringProp<string>('done'),
  /** 关闭前回调 */
  beforeDone: {
    type: Function as PropType<DialogBeforeDone>,
    default: (done: Function): void => done()
  }
} as const

export type DialogProps = ExtractPropTypes<typeof Props>
