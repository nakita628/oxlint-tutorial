// モジュール・名前空間まわりの違反サンプル
/// <reference path="./types.ts" />
// typescript/triple-slash-reference: import 文を使う

// typescript/no-require-imports, typescript/no-var-requires: require() ではなく import を使う
const nodePath = require('node:path')

// typescript/no-namespace: namespace ではなく ES モジュールを使う
export namespace Legacy {
  export const value = 1
}

// typescript/prefer-namespace-keyword: module ではなく namespace を使う
declare module Ambient {
  const value: number
}

// typescript/no-import-type-side-effects: 型だけの import は inline type ではなく import type に
import { type Names } from './types.ts'

export type Aliased = Names

// typescript/no-useless-empty-export: 他に export があるなら `export {}` は不要
export {}

export const path = nodePath
