// types.ts の適合版

// typescript/no-duplicate-type-constituents: 重複を除く
export type Duplicated = string

// typescript/no-redundant-type-constituents: any を混ぜない
export type Redundant = number

// typescript/no-unnecessary-type-arguments: 既定値と同じ型引数は省略する
export type Container<T = string> = { value: T }
export type StringContainer = Container

// typescript/no-unnecessary-type-assertion: アサーションを書かない
export function noAssertion(value: string): string {
  return value
}

// typescript/no-unnecessary-type-conversion: すでに文字列なら変換しない
export function noConversion(value: string): string {
  return value
}

// typescript/no-unnecessary-type-parameters: 型引数は 2 か所以上で使う
export function typeParameter<T>(value: T): Array<T> {
  return [value]
}

// typescript/no-unnecessary-boolean-literal-compare: そのまま使う
export function booleanCompare(flag: boolean): boolean {
  return flag
}

// typescript/no-unnecessary-condition, typescript/strict-boolean-expressions:
// 結果が決まりきらない条件を、真偽値として書く
export function meaningfulCondition(value: string): boolean {
  return value.length > 0
}

// typescript/no-unnecessary-template-expression: そのまま返す
export function noTemplate(value: string): string {
  return value
}

// typescript/non-nullable-type-assertion-style: `!` で書く
export function nonNullableAssertion(value: string | undefined): string {
  return value!
}

// typescript/no-mixed-enums: 型をそろえる
export enum Mixed {
  Zero = 0,
  One = 1,
}

// typescript/no-unsafe-enum-comparison: enum 同士で比較する
export enum Level {
  Low = 1,
  High = 2,
}

export function compareEnum(level: Level): boolean {
  return level === Level.Low
}

// typescript/no-unnecessary-qualifier: 名前空間を使わず、そのまま export する
export type Value = number

export const value: Value = 1
