// 型の書き方（型情報が必要なルール）の違反サンプル

// typescript/no-duplicate-type-constituents: ユニオンに同じ型が重複している
export type Duplicated = string | string

// typescript/no-redundant-type-constituents: any とのユニオンは any に潰れる
export type Redundant = any | number

// typescript/no-unnecessary-type-arguments: 既定値と同じ型引数は省略できる
export type Container<T = string> = { value: T }
export type StringContainer = Container<string>

// typescript/no-unnecessary-type-assertion: 型が変わらないアサーション
export function unnecessaryAssertion(value: string): string {
  return value as string
}

// typescript/no-unnecessary-type-conversion: すでに文字列なので変換は不要
export function unnecessaryConversion(value: string): string {
  return String(value)
}

// typescript/no-unnecessary-type-parameters: 一度しか使わない型引数は不要
export function unnecessaryTypeParameter<T>(value: T): unknown {
  return value
}

// typescript/no-unnecessary-boolean-literal-compare: 真偽値との比較は不要
export function booleanCompare(flag: boolean): boolean {
  return flag === true
}

// typescript/no-unnecessary-condition: 常に真になる条件
export function unnecessaryCondition(value: string): boolean {
  if (value) {
    return true
  }
  return false
}

// typescript/no-unnecessary-template-expression: 文字列だけのテンプレート補間は不要
export function unnecessaryTemplate(value: string): string {
  return `${value}`
}

// typescript/non-nullable-type-assertion-style: `as NonNullable<T>` は `!` で書ける
export function nonNullableAssertion(value: string | undefined): string {
  return value as string
}

// typescript/no-mixed-enums: 数値と文字列を混在させない
export enum Mixed {
  Zero = 0,
  Name = 'name',
}

// typescript/no-unsafe-enum-comparison: enum と生の値を比較している
export enum Level {
  Low = 1,
  High = 2,
}

export function compareEnum(level: Level): boolean {
  return level === 1
}

// typescript/no-unnecessary-qualifier: 同一名前空間内での修飾は不要
export namespace Outer {
  export type Value = number
  export const value: Outer.Value = 1
}
