import Popover from './src/popover.vue'

import { withInstallComponent } from '../_utils'

export const GPopover = withInstallComponent(Popover)

export type PopoverInstance = InstanceType<typeof Popover>

export * from './src/interface'

export default GPopover
