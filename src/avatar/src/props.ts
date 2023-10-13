import type { ExtractPropTypes } from 'vue'
import { setBooleanProp, setStringProp } from '../../_utils'

export type AvatarSize = 'small' | 'medium' | 'big' | 'huge'

export type AvatarShape = 'circle' | 'square'

export const Props = {
  stacked: setBooleanProp(),
  src: setStringProp(),
  text: setStringProp(),
  size: setStringProp<AvatarSize>('medium'),
  shape: setStringProp<AvatarShape>('circle')
} as const

export type AvatarProps = ExtractPropTypes<typeof Props>
