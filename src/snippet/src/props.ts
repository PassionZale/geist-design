import type { ExtractPropTypes } from 'vue'
import { setStringArrayProp, setBooleanProp, setStringProp } from '../../_utils'

export type SnippetType =
  | 'default'
  | 'dark'
  | 'success'
  | 'warning'
  | 'error'
  | 'secondary'
  | 'lite'

export const Props = {
  /** 片段内的文字 */
  text: setStringArrayProp<string[]>(),
  /** 片段宽度 */
  width: setStringProp(),
  /** 片段类型 */
  type: setStringProp<SnippetType>('default'),
  /** 使用类型色填充背景 */
  filled: setBooleanProp(),
  /** 显示复制键 */
  copy: setBooleanProp(true)
} as const

export type SnippetProps = ExtractPropTypes<typeof Props>
