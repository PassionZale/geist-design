import Snippet from './src/snippet.vue'

import { withInstallComponent } from '../_utils'

export const GSnippet = withInstallComponent(Snippet)

export type SnippetInstance = InstanceType<typeof Snippet>

export * from './src/interface'

export default GSnippet
