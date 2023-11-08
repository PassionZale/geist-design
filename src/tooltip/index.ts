import Tooltip from './src/tooltip.vue'

import { withInstallComponent } from '../_utils'

export const GTooltip = withInstallComponent(Tooltip)

export type TooltipInstance = InstanceType<typeof Tooltip>

export * from './src/interface'

export default GTooltip
