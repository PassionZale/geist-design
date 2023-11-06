import Collapse from './src/collapse.vue'

import { withInstallComponent } from '../_utils'

export const GCollapse = withInstallComponent(Collapse)

export type CollapseInstance = InstanceType<typeof Collapse>

export * from './src/interface'

export default GCollapse
