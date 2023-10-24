import type { ExtractPropTypes } from 'vue'

export const Props = {} as const

export type BadgeProps = ExtractPropTypes<typeof Props>
