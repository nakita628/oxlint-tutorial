// exports.ts の適合版
// typescript/consistent-type-exports: 型のみの export は export type でまとめる
import type { Mode } from './type-only.ts'
import { runtimeValue } from './type-only.ts'

export type { Mode }

export const used = runtimeValue
