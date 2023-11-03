import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'

export type NoteTypes = 'primary' | 'success' | 'error' | 'warning' | 'secondary'

export const Props = {
  /** 组件类型 */
  type: setStringProp<NoteTypes>('primary'),
  /** 显示文本 */
  label: setStringProp(),
  /** 背景与颜色相反填充 */
  filled: setBooleanProp()
} as const

export type NoteProps = ExtractPropTypes<typeof Props>
