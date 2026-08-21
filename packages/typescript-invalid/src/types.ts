// 型定義まわりの違反サンプル

// typescript/no-explicit-any: any を使わない
export function anyParam(value: any): any {
  return value
}

// typescript/array-type: T[] ではなく Array<T> に統一する設定にしている
export type Names = string[]

// typescript/consistent-indexed-object-style: インデックスシグネチャより Record を使う
export type Dictionary = { [key: string]: number }

// typescript/consistent-type-definitions: type ではなく interface に統一する設定にしている
export type Point = { x: number; y: number }

// typescript/no-empty-interface: メンバーの無い interface
export interface EmptyInterface {}

// typescript/no-empty-object-type: {} 型は「null / undefined 以外の何でも」を意味する
export type Anything = {}

// typescript/prefer-function-type: 呼び出しシグネチャだけの interface は関数型で書ける
export interface CallbackLike {
  (value: number): string
}

// typescript/no-unsafe-function-type: Function 型は型安全でない
export type AnyFunction = Function

// typescript/no-wrapper-object-types: String / Number などのラッパー型を使わない
export type WrapperString = String

// typescript/ban-types: 設定で禁止した型を使っている
export type BannedObject = object

// typescript/no-restricted-types: 設定で禁止した型を使っている
export type RestrictedAlias = Symbol

// typescript/no-inferrable-types: 明らかに推論できる型注釈は冗長
export const inferrable: number = 1

// typescript/no-invalid-void-type: void はユニオンの構成要素にできない
export type MaybeVoid = number | void

// typescript/no-unnecessary-type-constraint: `extends any` は無意味
export function identity<T extends any>(value: T): T {
  return value
}

// typescript/method-signature-style: メソッド構文ではなくプロパティ構文に統一する設定にしている
export interface Service {
  run(value: number): string
}
