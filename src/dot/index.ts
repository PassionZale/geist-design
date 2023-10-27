import Dot from './src/dot.vue'

import { withInstallComponent } from '../_utils'

export const GDot = withInstallComponent(Dot)

export type DotInstance = InstanceType<typeof Dot>

export * from './src/interface'

export default GDot
