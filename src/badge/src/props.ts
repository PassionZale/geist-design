import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringNumberProp, setStringProp } from '../../_utils'

export type BadgeStatus = 'success' | 'warning' | 'error'

export const Props = {
  count: setStringNumberProp(),
  maxCount: setStringNumberProp(),
  showZero: setBooleanProp(),
  dot: setBooleanProp(),
  status: setStringProp()
} as const

export type BadgeProps = ExtractPropTypes<typeof Props>
