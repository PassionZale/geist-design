export interface PopoverEmits {
  /**
   * command
   *
   * @event command
   * @param {string | number | object} event
   */
  (eventName: 'command', event?: string | number | object): void
}
