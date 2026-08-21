// no-import-assign: import した束縛に代入している
import { templates } from '../strings.ts'

templates = (): string => 'replaced'

export { templates }
