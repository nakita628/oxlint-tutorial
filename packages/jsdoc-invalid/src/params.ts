// @param まわりの違反サンプル

/**
 * 2 つの値を足す。
 */
// jsdoc/require-param: 引数の @param が書かれていない
export function add(a: number, b: number): number {
  return a + b
}

/**
 * 値を 2 倍にする。
 * @param {number}
 */
// jsdoc/require-param-name: @param に名前が無い
export function double(value: number): number {
  return value * 2
}

/**
 * 値を 3 倍にする。
 * @param value
 */
// jsdoc/require-param-type: @param に型が無い
export function triple(value: number): number {
  return value * 3
}

/**
 * 値を 4 倍にする。
 * @param {number} value
 */
// jsdoc/require-param-description: @param に説明が無い
export function quadruple(value: number): number {
  return value * 4
}

/**
 * 値を n 倍にする。
 * @param {number} [value=1] 倍率
 */
// jsdoc/no-defaults: JSDoc に既定値を書かない（TypeScript 側で表現する）
export function times(value = 1): number {
  return value
}
