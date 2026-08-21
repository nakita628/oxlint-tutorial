import { fromA } from './cycle-a.ts'

export const fromB = 2
export const total = fromA + fromB
