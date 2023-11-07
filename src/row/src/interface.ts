import type { ComputedRef } from 'vue'

export type { RowProps } from './props'

export interface RowProvide {
  readonly gutter: ComputedRef<number>
}
