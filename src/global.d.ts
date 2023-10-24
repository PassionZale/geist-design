import type * as components from './components'

/**
 * Volar 插件实现代码提示
 *
 */

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    GAvatar: typeof components.GAvatar
    GButton: typeof components.GButton
    GCard: typeof components.GCard
    GCode: typeof components.GCode
    GBadge: typeof components.GBadge
    /** PLOP_INJECT_EXPORT */
  }
}

export {}
