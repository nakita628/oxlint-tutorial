// expressions.ts の適合版

declare const source: Readonly<Record<string, number>>
declare const values: ReadonlyArray<string>
declare const maybe: Readonly<{ nested?: Readonly<{ value: number }> }> | undefined

// typescript/dot-notation: ドット記法で書く
export const dotNotation = source.name

// typescript/no-array-delete: slice で取り除く
export function arrayDelete(items: ReadonlyArray<number>): ReadonlyArray<number> {
  return items.slice(1)
}

// typescript/no-base-to-string: 明示的に文字列化する
export function baseToString(): string {
  return JSON.stringify({ value: 1 })
}

// typescript/no-confusing-void-expression: void を返す式は文として書く
export function confusingVoid(): void {
  globalThis.console.info('a')
}

// typescript/no-for-in-array: for-of を使う
export function forInArray(items: ReadonlyArray<number>): number {
  let total = 0
  for (const item of items) {
    total += item
  }
  return total
}

// typescript/no-implied-eval: 関数を渡す
export function impliedEval(): void {
  setTimeout(() => {
    globalThis.console.info(1)
  }, 0)
}

// typescript/no-meaningless-void-operator: void を重ねない
export function meaninglessVoid(): void {
  globalThis.console.info('a')
}

// typescript/no-misused-spread: 文字列は split で配列にする
export function misusedSpread(): Array<string> {
  return 'abc'.split('')
}

// typescript/prefer-find: find() を使う
export function preferFind(): string | undefined {
  return values.find((value) => value.length > 0)
}

// typescript/prefer-includes: includes() を使う
export function preferIncludes(): boolean {
  return values.includes('a')
}

// typescript/prefer-nullish-coalescing: ?? を使う
export function preferNullish(value: string | undefined): string {
  return value ?? 'default'
}

// typescript/prefer-optional-chain: ?. を使う
export function preferOptionalChain(): number | undefined {
  return maybe?.nested?.value
}

// typescript/prefer-reduce-type-parameter: reduce の型引数を使う
export function preferReduceTypeParameter(): ReadonlyArray<string> {
  return values.reduce<ReadonlyArray<string>>((accumulator, value) => [...accumulator, value], [])
}

// typescript/prefer-regexp-exec: exec() を使う
export function preferRegexpExec(value: string): RegExpExecArray | null {
  return /a/u.exec(value)
}

// typescript/prefer-string-starts-ends-with: startsWith() を使う
export function preferStartsWith(value: string): boolean {
  return value.startsWith('a')
}

// typescript/require-array-sort-compare: 比較関数を渡す
export function requireSortCompare(items: ReadonlyArray<number>): ReadonlyArray<number> {
  return [...items].sort((left, right) => left - right)
}

// typescript/restrict-template-expressions: 文字列だけを埋め込む
export function restrictTemplate(value: string): string {
  return `value: ${value}`
}

// typescript/strict-boolean-expressions: 条件式には真偽値を書く
export function strictBoolean(value: string): boolean {
  return value.length > 0
}
