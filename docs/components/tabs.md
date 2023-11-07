# 选项卡 / Tabs

显示选项卡的内容。

<ex-code name="ex-tabs-basic">

切换以显示不同的模板。

</ex-code>

<ex-code name="ex-tabs-disabled">

禁用指定选项。

</ex-code>

<ex-code name="ex-tabs-slots">

插槽。

</ex-code>

<ex-footer>

<h3>Tabs</h3>

| 属性                      | 描述     | 类型              | 推荐值 | 默认 |
| ------------------------- | -------- | ----------------- | ------ | ---- |
| **model-value / v-model** | 绑定的值 | `string / number` | -      | -    |

<h3>Tabs Item</h3>

| 属性                | 描述       | 类型      | 推荐值 | 默认    |
| ------------------- | ---------- | --------- | ------ | ------- |
| **label**(必须属性) | 文本       | `string`  | -      | -       |
| **value**(必须属性) | 值，唯一性 | `string`  | -      | -       |
| **disabled**        | 禁用选项卡 | `Boolean` | -      | `false` |

</ex-footer>
