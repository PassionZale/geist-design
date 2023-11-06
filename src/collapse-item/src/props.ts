import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'

export const Props = {
  /** 唯一标识符 */
  name: {
    ...setStringProp(),
    required: true
  },
  /** 阴影 */
  shadow: setBooleanProp()
} as const

export type CollapseItemProps = ExtractPropTypes<typeof Props>
