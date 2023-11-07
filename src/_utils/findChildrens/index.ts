import type { ComponentPublicInstance, VNode } from 'vue'

/**
 * 通过名称获取指定的子组件
 *
 * @param { ComponentPublicInstance } parentProxy
 * @param { string } childName
 * @returns ComponentPublicInstance[]
 * 
 * @example findChildrens(GTabProxy, 'GTabItem') => GTabItem[]
 */
export function findChildrens(
  parentProxy: ComponentPublicInstance,
  childName: string
): ComponentPublicInstance[] {
  const found: ComponentPublicInstance[] = []

  const root = parentProxy.$.subTree

  const matcher = new RegExp(`^${childName}`)

  walk(root, (child: ComponentPublicInstance): void => {
    if (matcher.test(child.$options.name as string)) {
      found.push(child)
    }
  })

  return found
}

function walk(vnode: VNode, cb: (componentProxy: ComponentPublicInstance) => void): void {
  if (!vnode) return

  if (vnode.component) {
    if (vnode.component.proxy) cb(vnode.component.proxy)

    walk(vnode.component.subTree, cb)
  } else if (vnode.shapeFlag & 16) {
    const vnodes = vnode.children as VNode[]

    for (let i = 0; i < vnodes.length; i++) {
      walk(vnodes[i], cb)
    }
  }
}
