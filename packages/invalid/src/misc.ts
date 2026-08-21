// その他の違反サンプル

// no-unused-expressions: 値を捨てるだけの式文
export function unusedExpression(value: number): number {
  value + 1
  return value
}

// no-extra-boolean-cast: if の条件での Boolean() は不要
export function extraBooleanCast(value: unknown): number {
  if (Boolean(value)) {
    return 1
  }
  return 0
}

// no-iterator: 廃止された __iterator__ を使わない
export function legacyIterator(source: object): unknown {
  return (source as { __iterator__: unknown }).__iterator__
}

// no-self-assign: 自分自身への代入
export function selfAssign(value: number): number {
  let current = value
  current = current
  return current
}

// no-unsafe-negation: in の左辺を否定している
export function unsafeNegation(key: string, source: object): boolean {
  // oxfmt が括弧を補うとルールが検出できなくなるため整形対象から外す
  // oxfmt-ignore
  return !key in source
}

// no-unsafe-optional-chaining: ?. が undefined になると TypeError になる書き方
export function unsafeOptionalChaining(source?: { nested?: { value: number } }): number {
  return (source?.nested).value
}

// no-duplicate-case: 同じ case ラベルが重複している
export function duplicateCase(value: number): string {
  switch (value) {
    case 1:
      return 'one'
    case 1:
      return 'uno'
    default:
      return 'other'
  }
}

// no-dupe-else-if: else-if の条件が重複している
export function dupeElseIf(value: number): string {
  if (value === 1) {
    return 'one'
  } else if (value === 1) {
    return 'uno'
  }
  return 'other'
}

// no-warning-comments: TODO / FIXME を残さない
// TODO: あとで直す
export const warningComment = 1

// array-callback-return: map のコールバックが値を返していない
export function arrayCallbackReturn(values: readonly number[]): number[] {
  return values.map((value) => {
    void value
  }) as unknown as number[]
}

// no-unexpected-multiline: 改行のせいで意図しない関数呼び出しになっている
const multilineTarget = (): (() => number) => (): number => 1
// 改行の位置そのものが違反サンプルなので整形対象から外す
// oxfmt-ignore
export const unexpectedMultiline = multilineTarget()
()
