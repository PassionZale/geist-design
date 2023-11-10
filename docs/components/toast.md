# 通知 Toast

显示重要的全局通知信息。

<ex-code name="ex-toast-basic"></ex-code>

<ex-code name="ex-toast-action">

包含一个按钮与事件的通知。

</ex-code>

<ex-code name="ex-toast-status">

设置 <g-code>type</g-code> 字段可以自定不同状态，默认为 <g-code>normal</g-code>，

同时，也为 <g-code>GToast</g-code> 注册了 <g-code>success</g-code> <g-code>warning</g-code> <g-code>danger</g-code> 三种方法来调用。

</ex-code>

<ex-code name="ex-toast-duration">

指定时间后自动关闭。

</ex-code>

<ex-code name="ex-toast-handler"></ex-code>

<ex-footer title="Options">

| 属性         | 描述                                | 类型                                  | 推荐值 | 默认     |
| ------------ | ----------------------------------- | ------------------------------------- | ------ | -------- |
| **message**  | 提示语                              | `string`                              | -      | -        |
| **type**     | 类型                                | `success` `warning` `danger` `normal` | -      | `normal` |
| **duration** | 持续时间(ms)，设置为 `0` 则永久展示 | `number`                              | -      | `4500`   |
| **action**   | 按钮文案                            | `string`                              | -      | -        |
| **handler**  | 按钮回调                            | `function`                            | -      | -        |

</ex-footer>

<ex-footer title="Methods">

| 方法名       | 描述              | 类型                                                                 | 推荐值 | 默认 |
| ------------ | ----------------- | -------------------------------------------------------------------- | ------ | ---- |
| **success**  | 成功              | `(message: string) => ComponentInternalInstance`                     | -      | -    |
| **warning**  | 警告              | `(message: string) => ComponentInternalInstance`                     | -      | -    |
| **danger**   | 失败              | `(message: string) => ComponentInternalInstance`                     | -      | -    |
| **close**    | 关闭指定 `GToast` | `(instance: ComponentInternalInstance) => ComponentInternalInstance` | -      | -    |
| **closeAll** | 移除所有 `GToast` | `() => void`                                                         | -      | -    |

</ex-footer>
