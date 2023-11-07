# 布局 / Layout

以简易的方式构建页面布局。

<ex-code name="ex-layout-row">

组件 <g-code>Row</g-code> 可以创建一个行容器。

</ex-code>

<ex-code name="ex-layout-column">

组件 <g-code>Col</g-code> 可以创建不同宽度的列容器。

</ex-code>

<ex-code name="ex-layout-spacing">

组件 <g-code>Row</g-code> 支持 <g-code>gutter</g-code> 属性设置列之间的间隔。

</ex-code>

<ex-code name="ex-layout-compose">

组合基本的 1/24 列完成布局。

</ex-code>

<ex-code name="ex-layout-alignment">

使用 <g-code>justify</g-code> 与 <g-code>align</g-code> 属性以不同方式对齐列。

</ex-code>

<ex-footer>

<h3>Row</h3>

| 属性        | 描述         | 类型     | 推荐值                                                | 默认    |
| ----------- | ------------ | -------- | ----------------------------------------------------- | ------- |
| **gutter**  | 表格间距     | `string / number` | -                                                     | 0       |
| **justify** | 水平对齐方式 | `string` | `start / end / center / space-around / space-between` | `start` |
| **align**   | 垂直对齐方式 | `string` | `top / middle / bottom`                               | `top`   |

<h3>Col</h3>

| 属性     | 描述             | 类型     | 推荐值 | 默认 |
| -------- | ---------------- | -------- | ------ | ---- |
| **span** | 列占有的网格大小 | `number` | 1 - 24 | 24   |

</ex-footer>
