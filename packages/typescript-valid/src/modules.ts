// modules.ts の適合版
// typescript/triple-slash-reference: /// <reference> ではなく import を使う
// typescript/no-require-imports, typescript/no-var-requires: import 文を使う
import nodePath from 'node:path'

// typescript/no-import-type-side-effects, typescript/consistent-type-imports:
// 型だけの import は import type で書く
import type { Names } from './types.ts'

export type Aliased = Names

// typescript/no-namespace, typescript/prefer-namespace-keyword:
// namespace / module 宣言ではなく ES モジュールとして export する
export const value = 1

// typescript/no-useless-empty-export: 他に export があるので `export {}` は書かない
export const path = nodePath
