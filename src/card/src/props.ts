import type { ExtractPropTypes } from 'vue'
import { setBooleanProp } from '../../_utils'

export const Props = {
  hoverable: setBooleanProp(),
  shadow: setBooleanProp()
} as const

export type CardProps = ExtractPropTypes<typeof Props>
