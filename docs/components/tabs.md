# 选项卡 Tabs

显示选项卡的内容。

<ex-code name="ex-tabs-basic">

切换以显示不同的模板。

</ex-code>

<ex-code name="ex-tabs-disabled">

禁用指定选项。

</ex-code>

<ex-code name="ex-tabs-icon">

你可以在 <g-code>geist-design-icons</g-code> 库获取更多的图标,
请参阅 <g-link color href="/components/icons">geist-design-icons 文档</g-link>。

</ex-code>

<ex-footer>

<h3>Tabs</h3>

| 属性                      | 描述     | 类型              | 推荐值 | 默认 |
| ------------------------- | -------- | ----------------- | ------ | ---- |
| **model-value / v-model** | 绑定的值 | `string / number` | -      | -    |

<h3>Tabs Item</h3>

| 属性                | 描述                          | 类型                  | 推荐值 | 默认    |
| ------------------- | ----------------------------- | --------------------- | ------ | ------- |
| **label**(必须属性) | 文本                          | `string`              | -      | -       |
| **name**(必须属性)  | 值，唯一性                    | `string` / `number`   | -      | -       |
| **disabled**        | 禁用选项卡                    | `Boolean`             | -      | `false` |
| **prefixIcon**      | 前缀图标 (详细请参阅上文示例) | `VNode` / `Component` | -      | -       |
| **suffixIcon**      | 后缀图标 (详细请参阅上文示例) | `VNode` / `Component` | -      | -       |

</ex-footer>
