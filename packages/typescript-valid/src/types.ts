// types.ts の適合版

// typescript/no-explicit-any: unknown を使い、必要な場所で絞り込む
export function unknownParam(value: unknown): unknown {
  return value
}

// typescript/array-type: Array<T> 表記に統一
export type Names = Array<string>

// typescript/consistent-indexed-object-style: Record を使う
export type Dictionary = Record<string, number>

// typescript/consistent-type-definitions: オブジェクト型は interface
export interface Point {
  x: number
  y: number
}

// typescript/no-empty-interface: メンバーを持たせる
export interface NotEmptyInterface {
  id: string
}

// typescript/no-empty-object-type: 何でも受けたいなら unknown
export type Anything = unknown

// typescript/prefer-function-type: 関数型で書く
export type CallbackLike = (value: number) => string

// typescript/no-unsafe-function-type: シグネチャを明示した関数型を使う
export type AnyFunction = (...args: Array<unknown>) => unknown

// typescript/no-wrapper-object-types: プリミティブ型を使う
export type WrapperString = string

// typescript/ban-types: 禁止された型は使わない
export type AllowedObject = Record<string, unknown>

// typescript/no-restricted-types: 禁止された型は使わない
export type RestrictedAlias = symbol

// typescript/no-inferrable-types: 推論に任せる
export const inferrable = 1

// typescript/no-invalid-void-type: void をユニオンに混ぜない
export type MaybeVoid = number | undefined

// typescript/no-unnecessary-type-constraint: 制約が不要なら書かない
export function identity<T>(value: T): T {
  return value
}

// typescript/method-signature-style: プロパティ構文で書く
export interface Service {
  run: (value: number) => string
}
