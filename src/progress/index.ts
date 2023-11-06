import Progress from './src/progress.vue'

import { withInstallComponent } from '../_utils'

export const GProgress = withInstallComponent(Progress)

export type ProgressInstance = InstanceType<typeof Progress>

export * from './src/interface'

export default GProgress
