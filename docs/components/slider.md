# 滑块 / Slider

提供数字范围内的滑动选择。

<ex-code name="ex-slider-basic">

默认效果

</ex-code>

<ex-code name="ex-slider-disabled"></ex-code>

<ex-code name="ex-slider-step"></ex-code>

<ex-code name="ex-slider-range">

如果滑块的范围是 1，你应该提供合适的步长。

</ex-code>

<ex-footer>

| 属性                     | 描述             | 类型      | 推荐值    | 默认    |
| ------------------------ | ---------------- | --------- | --------- | ------- |
| **modelValue / v-model** | 绑定值           | `number`  | `0 - 100` | `0`     |
| **step**                 | 步长             | `number`  | -         | `1`     |
| **show-dots**            | 显示步长的标识点 | `boolean` | -         | `false` |
| **disabled**             | 禁用滑块         | `boolean` | -         | `false` |
| **min**                  | 最小值           | `number`  | -         | `0`     |
| **max**                  | 最大值           | `number`  | -         | `100`   |

</ex-footer>
