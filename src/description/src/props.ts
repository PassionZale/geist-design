import type { ExtractPropTypes } from 'vue'
import { setStringProp } from '../../_utils'

export const Props = {
  /** 标题 */
  title: setStringProp(),
  /** 内容 */
  content: setStringProp()
} as const

export type DescriptionProps = ExtractPropTypes<typeof Props>
