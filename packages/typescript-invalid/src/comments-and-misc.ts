// コメント指示子・その他の違反サンプル

// typescript/ban-ts-comment: @ts-ignore などの抑制コメントを禁止
// @ts-ignore
export const ignored: number = 'not a number' as unknown as number

// typescript/prefer-ts-expect-error: @ts-ignore ではなく @ts-expect-error を使う
// @ts-ignore
export const alsoIgnored = 1

/* typescript/ban-tslint-comment: TSLint 用のコメントは不要 */
/* tslint:disable-next-line */
export const tslintComment = 1

// typescript/explicit-function-return-type, typescript/explicit-module-boundary-types:
// 戻り値の型を明示する
export function noReturnType(value: number) {
  return value * 2
}

// typescript/no-dynamic-delete: 動的キーの delete を禁止
export function dynamicDelete(source: Record<string, number>, key: string): void {
  delete source[key]
}

// typescript/prefer-for-of: インデックスしか使わない for は for-of で書ける
export function classicFor(values: readonly number[]): number {
  let total = 0
  for (let i = 0; i < values.length; i += 1) {
    total += values[i]
  }
  return total
}

// typescript/consistent-generic-constructors: 型引数はコンストラクタ側に書く
export const map: Map<string, number> = new Map()

// typescript/consistent-type-imports: 型のみの import は `import type` にする
import { Point } from './types.ts'

export type AliasedPoint = Point
