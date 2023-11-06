import CollapseItem from './src/collapse-item.vue'

import { withInstallComponent } from '../_utils'

export const GCollapseItem = withInstallComponent(CollapseItem)

export type CollapseItemInstance = InstanceType<typeof CollapseItem>

export * from './src/interface'

export default GCollapseItem
