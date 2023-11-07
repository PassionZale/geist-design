import { setStringNumberProp, setStringProp } from '../../_utils'

import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { RowProvide } from './interface'

export type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between'
export type RowAlign = 'top' | 'middle' | 'bottom'

export const Props = {
  /** 表格间距 */
  gutter: setStringNumberProp(),
  /**
   * 水平对齐方式
   *
   * @values 'start' | 'end' | 'center' | 'space-around' | 'space-between'
   */
  justify: setStringProp<RowJustify>('start'),
  /**
   * 垂直对齐方式
   *
   * @values 'top' | 'middle' | 'bottom'
   */
  align: setStringProp<RowAlign>('top')
} as const

export type RowProps = ExtractPropTypes<typeof Props>

export const ROW_INJECT_KEY: InjectionKey<RowProvide> = Symbol()
