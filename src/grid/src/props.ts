import type { ExtractPropTypes } from 'vue'
import {
  setBooleanProp,
  setNumberProp,
  setBooleanNumberProp,
  setStringProp
} from '../../_utils'

export type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'space-between'
  | 'space-around'

export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export const Props = {
  /** 容器属性 */
  container: setBooleanProp(),
  /** 子组件间距 */
  spacing: setNumberProp(0),
  /** css 属性"align-content" */
  alignContent: setStringProp<AlignContent>('stretch'),
  /** css 属性"align-items" */
  alignItems: setStringProp<AlignItems>('stretch'),
  /** css 属性"justify-content" */
  justifyContent: setStringProp<JustifyContent>('flex-start'),
  /** css 属性"flex-direction" */
  direction: setStringProp<Direction>('row'),
  /** css 属性"flex-wrap" */
  wrap: setStringProp<Wrap>('wrap'),
  /** 栅格宽度，影响 lg 断点与更宽的屏幕 */
  lg: setBooleanNumberProp(),
  /** 栅格宽度，影响 xl 断点与更宽的屏幕 */
  xl: setBooleanNumberProp(),
  /** 栅格宽度，影响 md 断点与更宽的屏幕 */
  md: setBooleanNumberProp(),
  /** 栅格宽度，影响 xs 断点与更宽的屏幕 */
  xs: setBooleanNumberProp(),
  /** 栅格宽度，影响 sm 断点与更宽的屏幕 */
  sm: setBooleanNumberProp()
} as const

export type GridProps = ExtractPropTypes<typeof Props>
