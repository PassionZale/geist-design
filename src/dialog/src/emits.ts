export interface DialogEmits {
  /**
   * v-model
   *
   * @event update:modelValue
   * @param {boolean} event
   */
  (eventName: 'update:modelValue', event: boolean): void
  /**
   * 关闭按钮点击的回调
   */
  (eventName: 'close'): void
  /**
   * 确认按钮点击的回调
   */
  (eventName: 'ok'): void
}
