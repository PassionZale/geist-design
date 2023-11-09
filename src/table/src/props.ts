import type { ExtractPropTypes } from 'vue'
import { setArrayProp, setBooleanProp, setStringProp } from '../../_utils'

import type { TableSourceData, TableColumn } from './interface'

export type TableAlign = 'left' | 'center' | 'right'

export const Props = {
  /** 数据数组 */
  dataSource: setArrayProp<TableSourceData>(),
  /** 表格列 */
  columns: setArrayProp<TableColumn[]>(),
  /** 表格行 hover 效果 */
  hoverable: setBooleanProp(true),
  /**
   * 对齐方式
   * 
   * @values 'left' | 'center' | 'right'
   */
  align: setStringProp<TableAlign>('left'),
  /** dataSource 为空时显示的文本 */
  emptyText: setStringProp<string>('暂无数据')
} as const

export type TableProps = ExtractPropTypes<typeof Props>
