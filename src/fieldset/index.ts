import Fieldset from './src/fieldset.vue'

import { withInstallComponent } from '../_utils'

export const GFieldset = withInstallComponent(Fieldset)

export type FieldsetInstance = InstanceType<typeof Fieldset>

export * from './src/interface'

export default GFieldset
