# 多选框 / Checkbox

<ex-code name="ex-checkbox-basic">

单独使用时会直接返回 <g-code>true</g-code> 或是 <g-code>false</g-code>。

</ex-code>

<ex-code name="ex-checkbox-disabled">

禁用状态。

</ex-code>

<ex-code name="ex-checkbox-group">

使用一组时会返回 <g-code>Array</g-code> 类型。

</ex-code>

<ex-footer>

<h3> Checkbox Group </h3>

| 属性                     | 描述           | 类型      | 推荐值 | 默认    |
| ------------------------ | -------------- | --------- | ------ | ------- |
| **modelValue / v-model** | 一组值         | `array`   | -      | []      |
| **disabled**             | 是否禁用一个组 | `boolean` | -      | `false` |

<h3>Checkbox</h3>

| 属性                     | 描述       | 类型              | 推荐值 | 默认    |
| ------------------------ | ---------- | ----------------- | ------ | ------- |
| **modelValue / v-model** | 选中的值   | `boolean`         | -      | `false` |
| **label**                | 显示的标签 | `string / number` | -      | -       |
| **disabled**             | 是否禁用   | `boolean`         | -      | `false` |

</ex-footer>
