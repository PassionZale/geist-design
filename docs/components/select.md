# 下拉框 / Select

显示下拉列表选框。

<ex-code name="ex-select-basic"></ex-code>

<ex-code name="ex-select-size"></ex-code>

<ex-code name="ex-select-simple">

无图标的样式。

</ex-code>

<ex-code name="ex-select-disabled">

你可以在 <g-code>Select</g-code> 中禁用全部，或是在 <g-code>Option</g-code> 禁用单个。

</ex-code>

<ex-footer>

<h3>Select</h3>

| 属性                     | 描述             | 类型              | 推荐值                      | 默认    |
| ------------------------ | ---------------- | ----------------- | --------------------------- | ------- |
| **modelValue / v-model** | 绑定值           | `string / number` | -                           | -       |
| **size**                 | 框体大小         | `string`          | `mini` / `small` / `medium` | -       |
| **disabled**             | 禁用整个选项框体 | `boolean`         | -                           | `false` |
| **simple**               | 是否禁用图标     | `boolean`         | -                           | `false` |

<h3>Option</h3>

| 属性         | 描述           | 类型               | 推荐值 | 默认    |
| ------------ | -------------- | ------------------ | ------ | ------- |
| **value**    | 值             | `string  / number` | -      | -       |
| **label**    | 文本           | `string`           | -      | -       |
| **disabled** | 是否禁用此选项 | `boolean`          | -      | `false` |

</ex-footer>
