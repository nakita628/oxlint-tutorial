// import/no-cycle: cycle-a.ts と cycle-b.ts が相互に import している
import { fromB } from './cycle-b.ts'

export const fromA = 1
export const sum = fromA + fromB
