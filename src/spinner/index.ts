import Spinner from './src/spinner.vue'

import { withInstallComponent } from '../_utils'

export const GSpinner = withInstallComponent(Spinner)

export type SpinnerInstance = InstanceType<typeof Spinner>

export * from './src/interface'

export default GSpinner
