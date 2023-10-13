import type { App, Component } from 'vue'

export type SFCWithInstall<T> = T & {
  withInstallComponent(app: App): void
}

/**
 * 注册组件
 *
 * @param { Object } component 组件实例
 * @returns { Object } 组件实例
 */
export const withInstallComponent = <T extends Component>(
  component: T
): SFCWithInstall<T> => {
  ;(component as Record<string, unknown>).install = (app: App): void => {
    const { name } = component
    name && app.component(name, component)
  }
  return component as SFCWithInstall<T>
}
