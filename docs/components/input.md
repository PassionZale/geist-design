# 输入框 / Input

<ex-code name="ex-input-basic">

默认效果

</ex-code>

<ex-code name="ex-input-size">

输入框内置了不同尺寸，但你也可以自定样式。

</ex-code>

<ex-code name="ex-input-label"></ex-code>

<ex-code name="ex-input-clearable">

包含一个清除按钮。

</ex-code>

<ex-code name="ex-input-disabled"></ex-code>

<ex-code name="ex-input-status"></ex-code>

<ex-code name="ex-input-icon">

你可以在 <g-code>geist-design-icons</g-code> 库获取更多的图标,
请参阅 <g-link color href="/components/icons">geist-design-icons 文档</g-link>。

</ex-code>

<ex-footer>

| 属性                      | 描述                                                                                              | 类型                  | 推荐值                                       | 默认      |
| ------------------------- | ------------------------------------------------------------------------------------------------- | --------------------- | -------------------------------------------- | --------- |
| **model-value / v-model** | 绑定值                                                                                            | `string`              | -                                            | -         |
| **placeholder**           | 占位文字                                                                                          | `string`              | -                                            | -         |
| **clearable**             | 是否显示清除按钮                                                                                  | `boolean`             | -                                            | `false`   |
| **size**                  | 输入框大小                                                                                        | `string`              | `mini` / `small` / `medium` / `big`          | -         |
| **status**                | 输入框类型                                                                                        | `string`              | `primary` / `success` / `danger` / `warning` | `primary` |
| **form**                  | 表单值                                                                                            | `string`              | -                                            | -         |
| **type**                  | 原生的 HTML 属性                                                                                  | `string`              | -                                            | `text`    |
| **autocomplete**          | 原生属性，请参阅 [文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) 了解更多 | `string`              | `on` / `off`                                 | `off`     |
| **spellcheck**            | 原生属性                                                                                          | `boolean`             | -                                            | -         |
| **autofocus**             | 原生属性                                                                                          | `boolean`             | -                                            | `false`   |
| **readonly**              | 输入框是否为只读                                                                                  | `boolean`             | -                                            | `false`   |
| **disabled**              | 是否禁用                                                                                          | `boolean`             | -                                            | `false`   |
| **prefixLabel**           | 前缀文本                                                                                          | `string`              | -                                            | -         |
| **suffixLabel**           | 后缀文本                                                                                          | `string`              | -                                            | -         |
| **prefixIcon**            | 前缀图标 (详细请参阅上文示例)                                                                     | `VNode` / `Component` | -                                            | -         |
| **suffixIcon**            | 后缀图标 (详细请参阅上文示例)                                                                     | `VNode` / `Component` | -                                            | -         |

</ex-footer>
