# 对话框 Dialog

可以包含多个元素的对话框。

<ex-code name="ex-dialog-basic">

组件 <g-code>Dialog</g-code> 组件默认包含 2 个按钮。

</ex-code>

<ex-code name="ex-dialog-custom">

你可以定制显示的内容。

</ex-code>

<ex-code name="ex-dialog-more">

添加更多的自定义组件。

</ex-code>

<ex-code name="ex-dialog-slots">

插槽允许你自定义头部及尾部。

</ex-code>

<ex-footer>

| 属性                      | 描述                 | 类型       | 推荐值 | 默认             |
| ------------------------- | -------------------- | ---------- | ------ | ---------------- |
| **model-value / v-model** | 绑定值               | `boolean`  | -      | `false`          |
| **width**                 | 对话框宽度           | `string`   | -      | -                |
| **title**                 | 标题                 | `string`   | -      | -                |
| **cancel**                | 取消按钮的文字       | `string`   | -      | `cancel`         |
| **done**                  | 确定按钮的文字       | `string`   | -      | `done`           |
| **beforeDone**            | 确定按钮触发前的回调 | `function` | -      | `done => done()` |
| **maskClose**             | 点击背景是否可以关闭 | `boolean`  | -      | `true`           |
| **header** slot           | 标题(插槽)           | -          | -      | -                |
| **footer** slot           | 底部（插槽）         | -          | -      | -                |

</ex-footer>

<ex-footer title="events">

| 事件名称  | 描述                                            | 回调参数     |
| --------- | ----------------------------------------------- | ------------ |
| **close** | 模态框关闭时的回调                              | `() => void` |
| **ok**    | 确认按钮点击的回调，若使用 `slot#footer` 则无效 | `() => void` |

</ex-footer>
