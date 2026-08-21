// 式まわり（型情報が必要なルール）の違反サンプル

declare const source: Record<string, number>
declare const values: Array<string>
declare const maybe: { nested?: { value: number } } | undefined

// typescript/dot-notation: 文字列キーはドット記法で書ける
export const dotNotation = source['name']

// typescript/no-array-delete: 配列要素は delete しない
export function arrayDelete(items: Array<number>): void {
  delete items[0]
}

// typescript/no-base-to-string: オブジェクトをそのまま文字列化している
export function baseToString(): string {
  return `${{ value: 1 }}`
}

// typescript/no-confusing-void-expression: void を返す式をそのまま返している
export function confusingVoid(): void {
  return console.log('a')
}

// typescript/no-for-in-array: 配列に for-in を使わない
export function forInArray(items: Array<number>): number {
  let total = 0
  for (const index in items) {
    total += items[Number(index)]
  }
  return total
}

// typescript/no-implied-eval: setTimeout に文字列を渡さない
export function impliedEval(): void {
  setTimeout('console.log(1)', 0)
}

// typescript/no-meaningless-void-operator: すでに void の式に void を付けている
export function meaninglessVoid(): void {
  void console.log('a')
}

// typescript/no-misused-spread: 文字列をスプレッドしている
export function misusedSpread(): Array<string> {
  return [...'abc']
}

// typescript/prefer-find: filter()[0] ではなく find()
export function preferFind(): string | undefined {
  return values.filter((value) => value.length > 0)[0]
}

// typescript/prefer-includes: indexOf() !== -1 ではなく includes()
export function preferIncludes(): boolean {
  return values.indexOf('a') !== -1
}

// typescript/prefer-nullish-coalescing: || ではなく ??
export function preferNullish(value: string | undefined): string {
  return value || 'default'
}

// typescript/prefer-optional-chain: && の連鎖は ?. で書ける
export function preferOptionalChain(): number | undefined {
  return maybe && maybe.nested && maybe.nested.value
}

// typescript/prefer-reduce-type-parameter: as ではなく reduce の型引数を使う
export function preferReduceTypeParameter(): Array<string> {
  return values.reduce((accumulator, value) => [...accumulator, value], [] as Array<string>)
}

// typescript/prefer-regexp-exec: match() ではなく exec()
export function preferRegexpExec(value: string): RegExpMatchArray | null {
  return value.match(/a/u)
}

// typescript/prefer-string-starts-ends-with: 添字比較ではなく startsWith()
export function preferStartsWith(value: string): boolean {
  return value[0] === 'a'
}

// typescript/require-array-sort-compare: sort() には比較関数を渡す
export function requireSortCompare(items: Array<number>): Array<number> {
  return items.sort()
}

// typescript/restrict-template-expressions: テンプレートに任意の型を埋め込んでいる
export function restrictTemplate(value: unknown): string {
  return `${value}`
}

// typescript/strict-boolean-expressions: 文字列をそのまま条件に使っている
export function strictBoolean(value: string): boolean {
  if (value) {
    return true
  }
  return false
}

// typescript/no-unsafe-unary-minus は unsafe.ts で検証している
