import type { VNode, Component, Slot, Slots } from 'vue'

/**
 * @see h() https://cn.vuejs.org/api/render-function.html
 */
type Children = string | number | boolean | VNode | null | Children[]

export type TableRenderH = (
  type: string | Component,
  props?: object | null,
  children?: Children | Slot | Slots | Record<string, () => unknown>
) => VNode

export type TableAlign = 'left' | 'center' | 'right'

export type TableDefaultRow = Record<string, unknown>

export interface TableProps<T = TableDefaultRow> {
  dataSource: T[]
  columns: TableColumn<T>[]
  hoverable?: boolean
  align?: TableAlign
  emptyText?: string
}

export interface TableColumn<T = TableDefaultRow> {
  /** render columns item */
  title: string | TableTitleRender
  /** 列数据在数据源中对应的路径 */
  dataIndex?: string
  /** render sourceData item */
  render?: TableDataRender<T>
  /** 列的宽度 */
  width?: string | number
}

export type TableTitleRender = (h: TableRenderH, index: number) => VNode

export type TableDataRender<T = TableDefaultRow> = (
  h: TableRenderH,
  dataItem: T,
  index: number
) => VNode
