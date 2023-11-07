import Col from './src/col.vue'

import { withInstallComponent } from '../_utils'

export const GCol = withInstallComponent(Col)

export type ColInstance = InstanceType<typeof Col>

export * from './src/interface'

export default GCol
