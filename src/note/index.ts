import Note from './src/note.vue'

import { withInstallComponent } from '../_utils'

export const GNote = withInstallComponent(Note)

export type NoteInstance = InstanceType<typeof Note>

export * from './src/interface'

export default GNote
