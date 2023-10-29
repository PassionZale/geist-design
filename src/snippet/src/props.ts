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
  text: setStringArrayProp<string[]>(),
  width: setStringProp(),
  type: setStringProp<SnippetType>('default'),
  filled: setBooleanProp(),
  copy: setBooleanProp(true)
} as const

export type SnippetProps = ExtractPropTypes<typeof Props>
