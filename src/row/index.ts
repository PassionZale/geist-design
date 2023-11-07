import Row from './src/row.vue'

import { withInstallComponent } from '../_utils'

export const GRow = withInstallComponent(Row)

export type RowInstance = InstanceType<typeof Row>

export * from './src/interface'

export default GRow
