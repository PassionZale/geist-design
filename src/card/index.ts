import Card from './src/card.vue'

import { withInstallComponent } from '../_utils'

export const GCard = withInstallComponent(Card)

export type CardInstance = InstanceType<typeof Card>

export * from './src/interface'

export default GCard
