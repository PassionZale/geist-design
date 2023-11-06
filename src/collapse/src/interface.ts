import type { CollapseProps } from './props'

export type { CollapseProps } from './props'

/** 注入的依赖项类型 */
export type CollapseProvide = CollapseProps & {
  setChange: (changedValue: string[]) => void
}
