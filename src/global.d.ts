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
    GInput: typeof components.GInput
    GImage: typeof components.GImage
    GNote: typeof components.GNote
    GRate: typeof components.GRate
    GGrid: typeof components.GGrid
    GCollapse: typeof components.GCollapse
    GCollapseItem: typeof components.GCollapseItem
    GSpinner: typeof components.GSpinner
    GProgress: typeof components.GProgress
    GMore: typeof components.GMore
    GDialog: typeof components.GDialog
    GCol: typeof components.GCol
    GRow: typeof components.GRow
    GTabs: typeof components.GTabs
    GTabsItem: typeof components.GTabsItem
    GSlider: typeof components.GSlider
    GToggle: typeof components.GToggle
    GCheckbox: typeof components.GCheckbox
    GCheckboxGroup: typeof components.GCheckboxGroup
    GRadio: typeof components.GRadio
    GRadioGroup: typeof components.GRadioGroup
    GSelect: typeof components.GSelect
    GOption: typeof components.GOption
    GPopover: typeof components.GPopover
    GPopoverItem: typeof components.GPopoverItem
    GTooltip: typeof components.GTooltip
    GTable: typeof components.GTable
    /** PLOP_INJECT_EXPORT */
  }
}

export {}
