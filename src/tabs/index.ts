import Tabs from './src/tabs.vue'

import { withInstallComponent } from '../_utils'

export const GTabs = withInstallComponent(Tabs)

export type TabsInstance = InstanceType<typeof Tabs>

export * from './src/interface'

export default GTabs
