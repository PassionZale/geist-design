import type { ExtractPropTypes } from 'vue'
import { setStringNumberProp } from '../../_utils'

export const Props = {
  /** 列占有的网格大小 */
  span: setStringNumberProp<string | number>(24)
} as const

export type ColProps = ExtractPropTypes<typeof Props>
