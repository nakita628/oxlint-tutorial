// 配列操作まわりの違反サンプル

export function newArray(): Array<number> {
  // unicorn/no-new-array: new Array(3) は挙動が紛らわしい
  return new Array(3)
}

export function forEach(values: Array<number>): void {
  // unicorn/no-array-for-each: forEach ではなく for-of を使う
  values.forEach((value) => {
    void value
  })
}

export function reduceSum(values: Array<number>): Record<string, number> {
  // unicorn/no-array-reduce: reduce は読みにくい
  return values.reduce(
    (accumulator, value) => {
      accumulator[String(value)] = value
      return accumulator
    },
    {} as Record<string, number>,
  )
}

function toLength(value: string): number {
  return value.length
}

export function callbackReference(values: Array<string>): Array<number> {
  // unicorn/no-array-callback-reference: コールバックに関数参照を直接渡さない
  return values.map(toLength)
}

export function findFirst(values: Array<number>): number | undefined {
  // unicorn/prefer-array-find: filter()[0] ではなく find() を使う
  return values.filter((value) => value > 0)[0]
}

export function flatten(values: Array<Array<number>>): Array<number> {
  // unicorn/prefer-array-flat: [].concat(...x) ではなく flat()
  return [].concat(...values)
}

export function flatMapped(values: Array<number>): Array<number> {
  // unicorn/prefer-array-flat-map: map().flat() は flatMap()
  return values.map((value) => [value, value]).flat()
}

export function indexOfValue(values: Array<number>): number {
  // unicorn/prefer-array-index-of: findIndex + === は indexOf
  return values.findIndex((value) => value === 1)
}

export function hasPositive(values: Array<number>): boolean {
  // unicorn/prefer-array-some: find() の真偽判定は some()
  return !!values.find((value) => value > 0)
}

export function lastItem(values: Array<number>): number | undefined {
  // unicorn/prefer-at: values[values.length - 1] は values.at(-1)
  return values[values.length - 1]
}

export function joinValues(values: Array<number>): string {
  // unicorn/require-array-join-separator: join() の区切り文字を明示する
  return values.join()
}

export function includesValue(values: Array<number>): boolean {
  // unicorn/prefer-includes: indexOf() !== -1 は includes()
  return values.indexOf(1) !== -1
}

export function existenceCheck(values: Array<number>): boolean {
  // unicorn/consistent-existence-index-check: index > -1 ではなく index !== -1
  const index = values.indexOf(1)
  return index > -1
}

export function uselessLengthCheck(values: Array<number>): boolean {
  // unicorn/no-useless-length-check: length チェックは some/every に含まれる
  return values.length === 0 || values.every((value) => value > 0)
}

export function unreadableDestructuring(values: Array<number>): number {
  // unicorn/no-unreadable-array-destructuring: 空要素を並べた分割代入は読みにくい
  const [, , third] = values
  return third
}

export function emptyArraySpread(flag: boolean): Array<number> {
  // unicorn/consistent-empty-array-spread: 三項の両辺で型をそろえる
  return [...(flag ? [] : '')]
}

export function explicitLength(values: Array<number>): boolean {
  // unicorn/explicit-length-check: length を暗黙の真偽値として使わない
  return Boolean(values.length)
}

export function fillWithReference(): Array<Array<number>> {
  // unicorn/no-array-fill-with-reference-type: fill に参照型を渡すと全要素が共有される
  return Array.from({ length: 3 }).fill([]) as Array<Array<number>>
}

export function methodThisArgument(values: Array<number>): Array<number> {
  // unicorn/no-array-method-this-argument: map の第 2 引数（thisArg）は使わない
  return values.map(function (value) {
    return value * 2
  }, {})
}

export function reverseInPlace(values: Array<number>): Array<number> {
  // unicorn/no-array-reverse: reverse() は元の配列を破壊する
  return values.reverse()
}

export function sortInPlace(values: Array<number>): Array<number> {
  // unicorn/no-array-sort: sort() は元の配列を破壊する
  return values.sort((left, right) => left - right)
}

export function magicFlatDepth(values: Array<unknown>): Array<unknown> {
  // unicorn/no-magic-array-flat-depth: flat() の深さに数値リテラルを直接書かない
  return values.flat(2)
}

export function unnecessaryFlatDepth(values: Array<unknown>): Array<unknown> {
  // unicorn/no-unnecessary-array-flat-depth: 既定値と同じ深さは省略できる
  return values.flat(1)
}

export function unnecessarySpliceCount(values: Array<number>): Array<number> {
  // unicorn/no-unnecessary-array-splice-count: 末尾までなら第 2 引数は不要
  return values.splice(1, values.length)
}

export function unnecessarySliceEnd(values: Array<number>): Array<number> {
  // unicorn/no-unnecessary-slice-end: 末尾までなら第 2 引数は不要
  return values.slice(1, values.length)
}

export function lengthAsSliceEnd(values: Array<number>): Array<number> {
  // unicorn/no-length-as-slice-end: slice(1, values.length) は slice(1)
  return values.slice(1, values.length)
}

export function uselessCollectionArgument(): Set<number> {
  // unicorn/no-useless-collection-argument: 空配列を渡す必要は無い
  return new Set([])
}

export function uselessIteratorToArray(values: Set<number>): Array<number> {
  // unicorn/no-useless-iterator-to-array: iterator.toArray() を展開し直す必要は無い
  return [...values.values().toArray()]
}

export function confusingArrayWith(values: Array<number>): Array<number> {
  // unicorn/no-confusing-array-with: 負の添字や length を with に渡すと紛らわしい
  return values.with(-1, 9)
}

export function immediateMutation(): Array<number> {
  // unicorn/no-immediate-mutation: 生成直後の配列を破壊的に変更しない
  return [3, 1, 2].sort((left, right) => left - right)
}

export function singleCall(values: Array<number>): Array<number> {
  const result: Array<number> = []
  // unicorn/prefer-single-call: push はまとめて 1 回で呼ぶ
  result.push(values[0])
  result.push(values[1])
  return result
}

// unicorn/prefer-set-has: 何度も includes するなら Set にする
const knownValues = [1, 2, 3]

export const setHas = (value: number): boolean => knownValues.includes(value)

export function setSize(): number {
  // unicorn/prefer-set-size: [...set].length ではなく set.size
  return [...new Set([1, 2, 3])].length
}
