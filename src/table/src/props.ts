/* eslint-disable @typescript-eslint/no-explicit-any */

import { setArrayProp, setBooleanProp, setStringProp } from '../../_utils'

import type { TableAlign, TableColumn, TableProps } from './interface'

export const Props = {
  /** 数据数组 */
  dataSource: setArrayProp<TableProps<any>['dataSource']>(),
  /** 表格列 */
  columns: setArrayProp<TableColumn<any>[]>(),
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
