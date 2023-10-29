import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'

export const Props = {
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 组件的底部内容 */
  footer: setStringProp()
} as const

export type FieldsetProps = ExtractPropTypes<typeof Props>
