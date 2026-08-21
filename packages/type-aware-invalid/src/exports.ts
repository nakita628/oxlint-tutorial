// typescript/consistent-type-exports: 型のみの export は `export type` にまとめる
import type { Mode } from './type-only.ts'
import { runtimeValue } from './type-only.ts'

export { Mode }

export const used = runtimeValue
