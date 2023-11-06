import { setArrayProp, setBooleanProp } from '../../_utils'

import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { CollapseProvide } from './interface'

export const Props = {
  /** 绑定值 */
  modelValue: {
    ...setArrayProp<string[]>(),
    required: true
  },
  /** 手风琴模式 */
  accordion: setBooleanProp()
} as const

export type CollapseProps = ExtractPropTypes<typeof Props>

/** collapse 组件注入的依赖项 */
export const COLLAPSE_PROPS_KEY: InjectionKey<CollapseProvide> =
  Symbol('g-collapse-props-key')
