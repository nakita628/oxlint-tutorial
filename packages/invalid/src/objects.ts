// オブジェクト・配列まわりの違反サンプル

export function shorthand(value: number): { value: number } {
  // object-shorthand: { value: value } は { value } と書ける
  return { value: value }
}

export function arrayCtor(): number[] {
  // no-array-constructor: Array コンストラクタではなくリテラルを使う
  return new Array(1, 2, 3)
}

export function objectAssign(base: Record<string, number>): Record<string, number> {
  // prefer-object-spread: Object.assign({}, ...) はスプレッドで書ける
  return Object.assign({}, base, { extra: 1 })
}

export function assignOp(value: number): number {
  let total = value
  // operator-assignment: total = total + 1 は total += 1
  total = total + 1
  return total
}

export function nestedTernary(value: number): string {
  // no-nested-ternary: 三項演算子のネスト
  return value > 10 ? 'big' : value > 5 ? 'medium' : 'small'
}

export function uselessRename(source: { value: number }): number {
  // no-useless-rename: 同名へのリネームは無意味
  const { value: value } = source
  return value
}

// no-useless-computed-key: 計算プロパティ名にする必要が無い
export const computedKey = { ['name']: 'oxlint' }

// no-object-constructor: new Object() ではなくオブジェクトリテラル
export function objectConstructor(): object {
  return new Object()
}

// no-new-wrappers: プリミティブのラッパーを new しない
export function newWrapper(): String {
  return new String('a')
}

// no-sparse-arrays: 疎な配列リテラル
export const sparse = [1, , 3]

// no-empty-pattern: 空の分割代入パターン
export function emptyPattern({}: Record<string, number>): number {
  return 1
}

// prefer-destructuring: 分割代入で書ける
export function noDestructuring(source: { value: number }): number {
  const value = source.value
  return value
}

// prefer-object-has-own: Object.prototype.hasOwnProperty.call は Object.hasOwn で書ける
export function hasOwn(source: Record<string, number>, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(source, key)
}

// no-prototype-builtins: hasOwnProperty を直接呼ばない
export function prototypeBuiltins(source: Record<string, number>, key: string): boolean {
  return source.hasOwnProperty(key)
}

// no-proto: __proto__ を使わない
export function protoAccess(source: object): unknown {
  return (source as { __proto__: unknown }).__proto__
}

// no-extend-native: 組み込みのプロトタイプを拡張しない
export function extendNative(): void {
  Object.defineProperty(Array.prototype, 'last', { value: 1 })
}

// logical-assignment-operators: ||= で書ける
export function logicalAssignment(value: string): string {
  let result = value
  result = result || 'default'
  return result
}
