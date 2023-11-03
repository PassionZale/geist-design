import Grid from './src/grid.vue'

import { withInstallComponent } from '../_utils'

export const GGrid = withInstallComponent(Grid)

export type GridInstance = InstanceType<typeof Grid>

export * from './src/interface'

export default GGrid
