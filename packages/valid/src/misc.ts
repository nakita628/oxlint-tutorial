// misc.ts の適合版

// no-unused-expressions: 式の結果を必ず使う
export function usedExpression(value: number): number {
  const next = value + 1
  return next
}

// no-extra-boolean-cast: if の条件では変換しない
export function extraBooleanCast(value: unknown): number {
  if (value) {
    return 1
  }
  return 0
}

// no-iterator: Symbol.iterator を使う
export function modernIterator(source: Iterable<number>): number[] {
  return [...source]
}

// no-self-assign: 意味のある代入だけを書く
export function selfAssign(value: number): number {
  const current = value + 1
  return current
}

// no-unsafe-negation: 否定の範囲を括弧で明示する
export function unsafeNegation(key: string, source: object): boolean {
  return !(key in source)
}

// no-unsafe-optional-chaining: ?. の後も安全に辿る
export function optionalChaining(source?: { nested?: { value: number } }): number {
  return source?.nested?.value ?? 0
}

// no-duplicate-case: case ラベルを重複させない
export function duplicateCase(value: number): string {
  switch (value) {
    case 1:
      return 'one'
    case 2:
      return 'two'
    default:
      return 'other'
  }
}

// no-dupe-else-if: else-if の条件を重複させない
export function dupeElseIf(value: number): string {
  if (value === 1) {
    return 'one'
  } else if (value === 2) {
    return 'two'
  }
  return 'other'
}

// no-warning-comments: TODO / FIXME を残さない
export const warningComment = 1

// array-callback-return: map のコールバックは値を返す
export function arrayCallbackReturn(values: readonly number[]): number[] {
  return values.map((value) => value * 2)
}

// no-unexpected-multiline: 意図が伝わるように書く
const multilineTarget = (): (() => number) => (): number => 1
export const unexpectedMultiline = multilineTarget()()
