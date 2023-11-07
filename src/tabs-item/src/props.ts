import type { ExtractPropTypes } from 'vue'
import {
  setStringProp,
  setStringNumberProp,
  setBooleanProp,
  setObjectProp
} from '../../_utils'

import type { GeistIcon } from '../../_utils'

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
  disabled: setBooleanProp(),
  /** 前缀图标 */
  prefixIcon: setObjectProp<GeistIcon>(),
  /** 后缀图标 */
  suffixIcon: setObjectProp<GeistIcon>()
} as const

export type TabsItemProps = ExtractPropTypes<typeof Props>
