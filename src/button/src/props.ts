import type { ExtractPropTypes } from 'vue'
import type { GeistIcon } from '../../_utils'
import { setBooleanProp, setStringProp, setObjectProp } from '../../_utils'

export type ButtonSize = 'mini' | 'small' | 'medium' | 'big' | 'huge'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'abort' | 'normal'

export const Props = {
  size: setStringProp<ButtonSize>('medium'),
  type: setStringProp<ButtonType>(),
  loading: setBooleanProp(),
  disabled: setBooleanProp(),
  shadow: setBooleanProp(),
  circular: setBooleanProp(),
  auto: setBooleanProp(),
  ghost: setBooleanProp(),
  effect: setBooleanProp(true),
  icon: setObjectProp<GeistIcon>(),
  iconRight: setObjectProp<GeistIcon>()
} as const

export type ButtonProps = ExtractPropTypes<typeof Props>
