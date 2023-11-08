import type { ExtractPropTypes, PropType } from 'vue'
import { setBooleanProp } from '../../_utils'

export const Props = {
  /** 显示一条分割线 */
  line: setBooleanProp(),
  /** 以标题模式显示文本 */
  title: setBooleanProp(),
  /** 以副标题模式显示文本 */
  subTitle: setBooleanProp(),
  /** 以强调的主色彩显示文本 */
  primary: setBooleanProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 自定义参数 */
  command: {
    type: [String, Number, Object] as unknown as PropType<string | number | object>
  }
} as const

export type PopoverItemProps = ExtractPropTypes<typeof Props>
