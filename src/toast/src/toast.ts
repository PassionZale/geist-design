import { h, render } from 'vue'
import ToastConstructor from './toast.vue'

import type { ComponentPublicInstance, ComponentInternalInstance, VNode } from 'vue'
import type { ToastTypes } from './props'

/** Toast props */
interface ToastProps {
  /** 提示语 */
  message: string
  /**
   * 类型
   *
   * @values success warning error normal
   */
  type?: ToastTypes | 'normal'
  /** 持续时间 */
  duration?: number
  /** 按钮文案 */
  action?: string
  /** 按钮回调 */
  handler?: Function
}

/** Toast 参数 */
type ToastOptions = ToastProps | string

/**
 * Toast 默认调用方式
 *
 * @example Toast('message')
 * @example Toast({ message: 'message', action: '按钮文案', duration: 4500 })
 */
export type ToastBasicType = (options: ToastOptions) => ComponentPublicInstance

/** Toast 调用方式集合 */
type ToastOptionalTypeKeys = Exclude<ToastTypes, 'normal'>

/**
 * Toast 可选调用方式
 *
 * @example Toast.success('message')
 * @example Toast.warning('message')
 * @example Toast.danger('message')
 */
export type ToastOptionalType = {
  [key in ToastOptionalTypeKeys]: (message: string) => ComponentPublicInstance
} & {
  /** 销毁所有 Toast 实例 */
  closeAll: () => void
}

/** Toast 聚合函数 */
export type ToastType = ToastBasicType & ToastOptionalType

/** useToast 返回值 */
export interface UseToastReturn {
  Toast: ToastType
}

/**
 * 创建根节点
 *
 * @description 创建一个(若已存在，则直接返回) div.g-toast-area，并插入 body 中
 *
 * @returns { Element } 容器元素
 */
const createRootContainer = (): HTMLDivElement => {
  const area = document.querySelector('.g-toast-area')

  if (area) return area as HTMLDivElement

  const el = document.createElement('div')

  el.classList.add('g-toast-area')

  document.body.appendChild(el)

  return el
}

/**
 * 将传入的 toast options 转换为 toast props，兼容直接传入 string 的场景
 *
 * @param { Object | string } options
 * @returns { Object } 对象
 */
const mergeOptionsToProps = (options: ToastOptions): ToastProps => {
  if (typeof options === 'string') {
    return { message: options }
  }

  return options
}

export const useToast = (): UseToastReturn => {
  // eslint-disable-next-line prefer-const
  let seed: number = 1

  /**
   * 销毁指定 Toast 或全部 Toast
   *
   * @param { number } id 组件唯一标识
   * @param { boolean } all 是否移除全部 Toast
   * @returns
   */
  const destroyToast = (id: number, all?: boolean): void => {
    const el = all ? createRootContainer() : document.querySelector(`#g-toast-${id}`)

    if (!el) return

    el.setAttribute('style', 'opacity: 0; visibility: hidden')

    const timmer = setTimeout(() => {
      el?.parentElement?.removeChild(el)

      clearTimeout(timmer)
    }, 500)
  }

  /**
   * 创建 Toast 组件实例
   *
   * @param { Object } props
   * @returns { Object } 组件实例
   */
  const createToastInstance = (props: ToastProps): ComponentInternalInstance => {
    const vNode: VNode = h(ToastConstructor, {
      id: seed, // 添加 id
      ...props
    })

    // 获取根节点 div.g-toast-area
    const rootContainer = createRootContainer()

    // 创建一个空节点用于渲染 Toast vNode
    const container = document.createElement('div')

    // Toast sfc => Toast html
    render(vNode, container)

    // 添加 Toast html 至根节点
    rootContainer.appendChild(container.firstElementChild as HTMLDivElement)

    // 添加 .visible 展示 Toast
    const timer = setTimeout(() => {
      vNode.el?.classList.add('visible')
      clearTimeout(timer)
    }, 0)

    // duration 默认 4500ms
    let duration = 4500

    if (props.duration && !Number.isNaN(+props.duration)) {
      duration = props.duration
    }

    // duration 结束后移除自身
    const _timer = setTimeout(() => {
      destroyToast(seed)
      clearTimeout(_timer)
    }, duration)

    return vNode.component as ComponentInternalInstance
  }

  /**
   * 创建 Toast
   *
   * @param options
   * @returns
   */
  const createToast = (options: ToastOptions): ComponentPublicInstance => {
    const instance = createToastInstance(
      mergeOptionsToProps(options)
    ) as ComponentInternalInstance

    return instance.proxy as ComponentPublicInstance
  }

  const Toast: ToastBasicType = (options: ToastOptions): ComponentPublicInstance => {
    return createToast(options)
  }

  (Toast as unknown as ToastOptionalType).closeAll = (): void => destroyToast(0, true)

  /** Toast 快捷方法 */
  const TOAST_OPTIONAL_TYPE_KEYS: ToastOptionalTypeKeys[] = [
    'success',
    'warning',
    'danger'
  ]

  /**
   * 为 Toast 添加快捷方法
   *
   * @example GToast.success('success message')
   */
  TOAST_OPTIONAL_TYPE_KEYS.forEach(method => {
    (Toast as unknown as ToastOptionalType)[method] = (
      message: string
    ): ComponentPublicInstance => createToast({ message, type: method })
  })

  return { Toast } as UseToastReturn
}
