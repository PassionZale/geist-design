import type { ExtractPropTypes } from 'vue'
import { setBooleanProp } from '../../_utils'

export const Props = {
  /** 显示 `shell` 代码 */
  bash: setBooleanProp(),
  /** 显示代码块 */
  block: setBooleanProp(),
  /** 强制单行显示 */
  inline: setBooleanProp()
} as const

export type CodeProps = ExtractPropTypes<typeof Props>
