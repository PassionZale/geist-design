import type { ExtractPropTypes } from 'vue'
import { setStringProp } from '../../_utils'

export type TagTypes = 'success' | 'warning' | 'danger'

export const Props = {
  /**
   * 组件类型
   * 
   * @values success warning danger
   */
  type: setStringProp<TagTypes>()
} as const

export type TagProps = ExtractPropTypes<typeof Props>
