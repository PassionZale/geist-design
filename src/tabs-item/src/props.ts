import type { ExtractPropTypes } from 'vue'
import { setStringProp, setStringNumberProp, setBooleanProp } from '../../_utils'

export const Props = {
  /** 选项卡标题 */
  label: {
    ...setStringProp(),
    required: true
  },
  /** 与选项卡绑定值 value 对应的标识符，表示选项卡别名 */
  name: {
    ...setStringNumberProp(),
    required: true
  },
  /** 是否禁用 */
  disabled: setBooleanProp()
} as const

export type TabsItemProps = ExtractPropTypes<typeof Props>
