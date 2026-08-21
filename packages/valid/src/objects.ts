// objects.ts の適合版

export function shorthand(value: number): { value: number } {
  // object-shorthand: 短縮記法
  return { value }
}

export function arrayCtor(): number[] {
  // no-array-constructor: 配列リテラル
  return [1, 2, 3]
}

export function objectAssign(base: Record<string, number>): Record<string, number> {
  // prefer-object-spread: スプレッド構文
  return { ...base, extra: 1 }
}

export function assignOp(value: number): number {
  let total = value
  // operator-assignment: += を使う
  total += 1
  return total
}

export function nestedTernary(value: number): string {
  // no-nested-ternary: ネストせずに早期 return で書く
  if (value > 10) {
    return 'big'
  }
  if (value > 5) {
    return 'medium'
  }
  return 'small'
}

export function uselessRename(source: { value: number }): number {
  // no-useless-rename: リネームせずそのまま取り出す
  const { value } = source
  return value
}

// no-useless-computed-key: 通常のプロパティ名で書く
export const computedKey = { name: 'oxlint' }

// no-object-constructor: オブジェクトリテラルを使う
export function objectConstructor(): object {
  return {}
}

// no-new-wrappers: プリミティブをそのまま使う
export function newWrapper(): string {
  return 'a'
}

// no-sparse-arrays: 穴を空けない
export const sparse = [1, 2, 3]

// no-empty-pattern: 実際に使うプロパティを取り出す
export function emptyPattern({ value }: { value: number }): number {
  return value
}

// prefer-destructuring: 分割代入で書く
export function withDestructuring(source: { value: number }): number {
  const { value } = source
  return value
}

// prefer-object-has-own: Object.hasOwn を使う
export function hasOwn(source: Record<string, number>, key: string): boolean {
  return Object.hasOwn(source, key)
}

// no-prototype-builtins: Object.hasOwn 経由で判定する
export function prototypeBuiltins(source: Record<string, number>, key: string): boolean {
  return Object.hasOwn(source, key)
}

// no-proto: Object.getPrototypeOf を使う
export function protoAccess(source: object): unknown {
  return Object.getPrototypeOf(source)
}

// no-extend-native: 組み込みを拡張せず、関数として提供する
export function lastItem(values: readonly number[]): number | null {
  return values.length > 0 ? values[values.length - 1] : null
}

// logical-assignment-operators: ||= を使う
export function logicalAssignment(value: string): string {
  let result = value
  result ||= 'default'
  return result
}
