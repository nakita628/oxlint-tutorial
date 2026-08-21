// arrays.ts の適合版

export function newArray(): Array<number> {
  // unicorn/no-new-array: 長さ指定は Array.from({ length }) で書く
  return Array.from({ length: 3 }, () => 0)
}

export function forEach(values: Array<number>): void {
  // unicorn/no-array-for-each: for-of を使う
  for (const value of values) {
    void value
  }
}

export function reduceSum(values: Array<number>): Record<string, number> {
  // unicorn/no-array-reduce: for-of で組み立てる
  const accumulator: Record<string, number> = {}
  for (const value of values) {
    accumulator[String(value)] = value
  }
  return accumulator
}

function toLength(value: string): number {
  return value.length
}

export function callbackReference(values: Array<string>): Array<number> {
  // unicorn/no-array-callback-reference: アロー関数で包んで引数を明示する
  return values.map((value) => toLength(value))
}

export function findFirst(values: Array<number>): number | undefined {
  // unicorn/prefer-array-find: find() を使う
  return values.find((value) => value > 0)
}

export function flatten(values: Array<Array<number>>): Array<number> {
  // unicorn/prefer-array-flat: flat() を使う
  return values.flat()
}

export function flatMapped(values: Array<number>): Array<number> {
  // unicorn/prefer-array-flat-map: flatMap() を使う
  return values.flatMap((value) => [value, value])
}

export function indexOfValue(values: Array<number>): number {
  // unicorn/prefer-array-index-of: indexOf() を使う
  return values.indexOf(1)
}

export function hasPositive(values: Array<number>): boolean {
  // unicorn/prefer-array-some: some() を使う
  return values.some((value) => value > 0)
}

export function lastItem(values: Array<number>): number | undefined {
  // unicorn/prefer-at: at(-1) を使う
  return values.at(-1)
}

export function joinValues(values: Array<number>): string {
  // unicorn/require-array-join-separator: 区切り文字を明示する
  return values.join(',')
}

export function includesValue(values: Array<number>): boolean {
  // unicorn/prefer-includes: includes() を使う
  return values.includes(1)
}

export function existenceCheck(values: Array<number>): boolean {
  // unicorn/consistent-existence-index-check: !== -1 で判定する
  const index = values.indexOf(1)
  return index !== -1
}

export function uselessLengthCheck(values: Array<number>): boolean {
  // unicorn/no-useless-length-check: every() だけで十分
  return values.every((value) => value > 0)
}

export function readableDestructuring(values: Array<number>): number | undefined {
  // unicorn/no-unreadable-array-destructuring: at() で明示的に取り出す
  return values.at(2)
}

export function emptyArraySpread(flag: boolean): Array<number> {
  // unicorn/consistent-empty-array-spread: 三項の両辺とも配列にそろえる
  return [0, ...(flag ? [] : [1])]
}

export function explicitLength(values: Array<number>): boolean {
  // unicorn/explicit-length-check: 明示的に比較する
  return values.length > 0
}

export function fillWithValue(): Array<number> {
  // unicorn/no-array-fill-with-reference-type: fill にはプリミティブを渡す
  return Array.from({ length: 3 }).fill(0) as Array<number>
}

export function methodThisArgument(values: Array<number>): Array<number> {
  // unicorn/no-array-method-this-argument: thisArg を使わずアロー関数で書く
  return values.map((value) => value * 2)
}

export function reverseCopy(values: Array<number>): Array<number> {
  // unicorn/no-array-reverse: toReversed() で新しい配列を作る
  return values.toReversed()
}

export function sortCopy(values: Array<number>): Array<number> {
  // unicorn/no-array-sort: toSorted() で新しい配列を作る
  return values.toSorted((left, right) => left - right)
}

const flatDepth = 2

export function magicFlatDepth(values: Array<unknown>): Array<unknown> {
  // unicorn/no-magic-array-flat-depth: 深さには名前を付ける
  return values.flat(flatDepth)
}

export function unnecessaryFlatDepth(values: Array<unknown>): Array<unknown> {
  // unicorn/no-unnecessary-array-flat-depth: 既定値なら省略する
  return values.flat()
}

export function spliceFromIndex(values: Array<number>): Array<number> {
  // unicorn/no-unnecessary-array-splice-count: 末尾までなら第 2 引数を省略する
  return values.splice(1)
}

export function sliceFromIndex(values: Array<number>): Array<number> {
  // unicorn/no-unnecessary-slice-end, unicorn/no-length-as-slice-end: 第 2 引数を省略する
  return values.slice(1)
}

export function collectionArgument(): Set<number> {
  // unicorn/no-useless-collection-argument: 引数なしで生成する
  return new Set()
}

export function iteratorToArray(values: Set<number>): Array<number> {
  // unicorn/no-useless-iterator-to-array: スプレッドだけで配列にできる
  return [...values]
}

export function arrayWith(values: Array<number>): Array<number> {
  // unicorn/no-confusing-array-with: 正の添字を渡す
  return values.with(0, 9)
}

export function immutableSort(values: Array<number>): Array<number> {
  // unicorn/no-immediate-mutation: 生成した配列は破壊せず toSorted を使う
  return [...values].toSorted((left, right) => left - right)
}

export function singleCall(values: Array<number>): Array<number> {
  // unicorn/prefer-single-call / unicorn/no-immediate-mutation:
  // 初期化時にまとめて要素を入れる
  const result: Array<number> = [values[0], values[1]]
  return result
}

// unicorn/prefer-set-has: 繰り返し検索するなら Set にする
const knownValues = new Set([1, 2, 3])

export const setHas = (value: number): boolean => knownValues.has(value)

export function setSize(): number {
  // unicorn/prefer-set-size: set.size を使う
  return new Set([1, 2, 3]).size
}
