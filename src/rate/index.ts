import Rate from './src/rate.vue'

import { withInstallComponent } from '../_utils'

export const GRate = withInstallComponent(Rate)

export type RateInstance = InstanceType<typeof Rate>

export * from './src/interface'

export default GRate
