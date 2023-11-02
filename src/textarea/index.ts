import Textarea from './src/textarea.vue'

import { withInstallComponent } from '../_utils'

export const GTextarea = withInstallComponent(Textarea)

export type TextareaInstance = InstanceType<typeof Textarea>

export * from './src/interface'

export default GTextarea
