# 表格 / Table

以规则的表格显示数据集。

<ex-code name="ex-table-basic">

显示规则化的行和列。

</ex-code>

<ex-code name="ex-table-width">

你可以指定某几个列的宽度，剩下的列会自动适应调整宽度。

</ex-code>

<ex-code name="ex-table-align">

对其方式。

</ex-code>

<ex-code name="ex-table-empty">

空数据展示。

</ex-code>

<ex-code name="ex-table-header">

自定义表头显示。

</ex-code>

<ex-code name="ex-table-action">

自定义数据展示。

</ex-code>

<ex-footer>

| 属性           | 描述                     | 类型      | 推荐值                  | 默认       |
| -------------- | ------------------------ | --------- | ----------------------- | ---------- |
| **dataSource** | 数据数组                 | `Array`   | -                       | `[]`       |
| **columns**    | 表格列                   | `Array`   | -                       | `[]`       |
| **hoverable**  | hover 效果               | `boolean` | -                       | `false`    |
| **align**      | 对齐方式                 | `string`  | `left / center / right` | `left`     |
| **empty-text** | 数据数组为空时显示的文本 | `string`  | -                       | `暂无数据` |

<g-code>TableProps</g-code>

```ts
interface TableProps<T = TableDefaultRow> {
  dataSource: T[]
  columns: TableColumn<T>[]
  hoverable?: boolean
  align?: TableAlign
  emptyText?: string
}
```

```ts
interface TableColumn<T = TableDefaultRow> {
  /** render columns item */
  title: string | TableTitleRender
  /** 列数据在数据源中对应的路径 */
  dataIndex?: string
  /** render sourceData item */
  render?: TableDataRender<T>
  /** 列的宽度 */
  width?: string | number
}
```

<g-code>TableTitleRender</g-code>

```ts
type TableTitleRender = (
  h: TableRenderH,
  index: number
) => VNode
```

<g-code>TableDataRender</g-code>

```ts
type TableDataRender<T = TableDefaultRow> = (
  h: TableRenderH,
  dataItem: T,
  index: number
) => VNode
```

<g-code>TableRenderH</g-code>

```ts
/**
 * @see h() https://cn.vuejs.org/api/render-function.html
 */
type Children = string | number | boolean | VNode | null | Children[]

type TableRenderH = (
  type: string | Component,
  props?: object | null,
  children?: Children | Slot | Slots | Record<string, () => unknown>
) => VNode
```

</ex-footer>
