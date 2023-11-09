import Table from './src/table.vue'

import { withInstallComponent } from '../_utils'

export const GTable = withInstallComponent(Table)

export type TableInstance = InstanceType<typeof Table>

export * from './src/interface'

export default GTable
