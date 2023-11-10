import type { VNode, Component, Slot, Slots } from 'vue'

export type { TableProps } from './props'

/**
 * @see h() https://cn.vuejs.org/api/render-function.html
 */
type Children = string | number | boolean | VNode | null | Children[]

export type TableRenderH = (
  type: string | Component,
  props?: object | null,
  children?: Children | Slot | Slots | Record<string, () => unknown>
) => VNode

export type TableTitleRender = (
  h: TableRenderH,
  column: TableColumn,
  index: number
) => VNode

export type TableDataRender = (
  h: TableRenderH,
  dataItem: Record<string, unknown>,
  index: number
) => VNode

export type TableSourceData<T = Record<string, unknown>> = T[]

export interface TableColumn {
  /** render columns item */
  title: string | TableTitleRender
  /** 列数据在数据源中对应的路径 */
  dataIndex?: string
  /** render sourceData item */
  render?: TableDataRender
  /** 列的宽度 */
  width?: string | number
}
