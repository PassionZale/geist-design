import Dialog from './src/dialog.vue'

import { withInstallComponent } from '../_utils'

export const GDialog = withInstallComponent(Dialog)

export type DialogInstance = InstanceType<typeof Dialog>

export * from './src/interface'

export default GDialog
