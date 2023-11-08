import { setBooleanProp, setNumberProp, setStringProp } from '../../_utils'

import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { PopoverProvide } from './interface'

export type PopoverAlign = 'left' | 'right' | 'center'

export const Props = {
  /**
   * 下拉菜单的对齐方式
   *
   * @values 'left' | 'right' | 'center'
   */
  align: setStringProp<PopoverAlign>('center'),
  /** 点击背景隐藏菜单 */
  hideOnClick: setBooleanProp(true),
  /** hover 时触发 */
  hoverable: setBooleanProp(),
  /** 隐藏延时 (仅在 `hoverable` 模式生效) */
  delay: setNumberProp(300)
} as const

export type PopoverProps = ExtractPropTypes<typeof Props>

export const POPOVER_INJECT_KEY: InjectionKey<PopoverProvide> = Symbol()
