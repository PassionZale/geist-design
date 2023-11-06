import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'

export const Props = {
  /** 唯一标识符 */
  name: {
    ...setStringProp(),
    required: true
  },
  /** 标题 */
  title: setStringProp(),
  /** 副标题 */
  subTitle: setStringProp(),
  /** 阴影 */
  shadow: setBooleanProp()
} as const

export type CollapseItemProps = ExtractPropTypes<typeof Props>
