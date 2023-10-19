import type { ExtractPropTypes } from 'vue'
import { setBooleanProp } from '../../_utils'

export const Props = {
  bash: setBooleanProp(),
  block: setBooleanProp(),
  inline: setBooleanProp()
} as const

export type CodeProps = ExtractPropTypes<typeof Props>
