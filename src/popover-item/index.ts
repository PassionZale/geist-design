import PopoverItem from './src/popover-item.vue'

import { withInstallComponent } from '../_utils'

export const GPopoverItem = withInstallComponent(PopoverItem)

export type PopoverItemInstance = InstanceType<typeof PopoverItem>

export * from './src/interface'

export default GPopoverItem
