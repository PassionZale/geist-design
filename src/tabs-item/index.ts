import TabsItem from './src/tabs-item.vue'

import { withInstallComponent } from '../_utils'

export const GTabsItem = withInstallComponent(TabsItem)

export type TabsItemInstance = InstanceType<typeof TabsItem>

export * from './src/interface'

export default GTabsItem
