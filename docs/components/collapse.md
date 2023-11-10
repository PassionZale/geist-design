# 折叠框 Collapse

可折叠的显示大量文本，通常也被称作手风琴。

<ex-code name="ex-collapse-basic"></ex-code>

<ex-code name="ex-collapse-accordion">

手风琴模式。

</ex-code>

<ex-code name="ex-collapse-shadow">

阴影。

</ex-code>

<ex-code name="ex-collapse-slots">

插槽。

</ex-code>

<ex-footer>

<h3>Collapse</h3>

| 属性                      | 描述       | 类型       | 推荐值 | 默认    |
| ------------------------- | ---------- | ---------- | ------ | ------- |
| **model-value / v-model** | 绑定值     | `string[]` | -      | -       |
| **accordion**             | 手风琴模式 | `boolean`  | -      | `false` |

<h3>Collapse Item</h3>

| 属性         | 描述           | 类型      | 推荐值 | 默认 |
| ------------ | -------------- | --------- | ------ | ---- |
| **name**     | 唯一标识       | `string`  | -      | -    |
| **title**    | 用于显示的标题 | `string`  | -      | -    |
| **shadow**   | 阴影效果       | `boolean` | -      | -    |
| **subTitle** | 标题详情       | `string`  | -      | -    |

<h3>Collapse Item Slots</h3>

| 属性         | 描述           | 类型 | 推荐值 | 默认 |
| ------------ | -------------- | ---- | ------ | ---- |
| **title**    | 用于显示的标题 | -    | -      | -    |
| **subTitle** | 标题详情       | -    | -      | -    |
| **default**  | 展开后的内容   | -    | -      | -    |

</ex-footer>
