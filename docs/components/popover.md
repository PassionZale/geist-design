# 下拉菜单 Popover

常用于导航的下拉菜单。

<ex-code name="ex-popover-basic">

只包含按钮。

</ex-code>

<ex-code name="ex-popover-align">

指定不同的对齐方式。

</ex-code>

<ex-code name="ex-popover-split">

构筑复杂的菜单。

</ex-code>

<ex-code name="ex-popover-command">

你可以获得所有按钮的点击事件。

</ex-code>

<ex-code name="ex-popover-hoverable">

以 <g-code>hover</g-code> 事件模式触发。

</ex-code>

<ex-footer>

<h3>Popover</h3>

| 属性               | 描述                                 | 类型              | 推荐值                      | 默认     |
| ------------------ | ------------------------------------ | ----------------- | --------------------------- | -------- |
| **align**          | 下拉菜单的对齐方式                   | `string`          | `left` / `right` / `center` | `center` |
| **hideOnClick**    | 点击背景隐藏菜单                     | `boolean`         | -                           | `true`   |
| **hoverable**      | `hover` 触发模式                     | `boolean`         | -                           | `false`  |
| **delay**          | 隐藏延时 (仅在 `hoverable` 模式生效) | `number`          | -                           | `300`    |
| **command**(event) | 点击菜单项的回调事件                 | `command => void` | -                           | -        |

<h3>Popover Item</h3>

| 属性         | 描述                   | 类型                       | 推荐值 | 默认    |
| ------------ | ---------------------- | -------------------------- | ------ | ------- |
| **line**     | 显示一条分割线         | `boolean`                  | -      | `false` |
| **title**    | 以标题模式显示文本     | `boolean`                  | -      | `false` |
| **subtitle** | 以副标题模式显示文本   | `boolean`                  | -      | `false` |
| **primary**  | 以强调的主色彩显示文本 | `boolean`                  | -      | `false` |
| **disabled** | 禁用当前行             | `boolean`                  | -      | `false` |
| **command**  | 自定义参数             | `string / number / object` | -      | -       |

</ex-footer>
