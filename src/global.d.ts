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
    GLink: typeof components.GLink
    GDot: typeof components.GDot
    GDescription: typeof components.GDescription
    GDisplay: typeof components.GDisplay
    GFieldset: typeof components.GFieldset
    GKeyboard: typeof components.GKeyboard
    GSnippet: typeof components.GSnippet
    GSpacer: typeof components.GSpacer
    GToast: typeof components.GToast
    GUser: typeof components.GUser
    GTag: typeof components.GTag
    GTextarea: typeof components.GTextarea
    /** PLOP_INJECT_EXPORT */
  }
}

export {}
