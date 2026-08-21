// params.ts の適合版

/**
 * 2 つの値を足す。
 * @param {number} a 左の値
 * @param {number} b 右の値
 * @returns {number} 合計
 */
export function add(a: number, b: number): number {
  return a + b
}

/**
 * 値を 2 倍にする。
 * @param {number} value 元の値
 * @returns {number} 2 倍した値
 */
export function double(value: number): number {
  return value * 2
}

/**
 * 値を 3 倍にする。
 * @param {number} value 元の値
 * @returns {number} 3 倍した値
 */
export function triple(value: number): number {
  return value * 3
}

/**
 * 値を 4 倍にする。
 * @param {number} value 元の値
 * @returns {number} 4 倍した値
 */
export function quadruple(value: number): number {
  return value * 4
}

/**
 * 値をそのまま返す。既定値は TypeScript 側で表現する。
 * @param {number} value 倍率
 * @returns {number} 倍率
 */
export function times(value = 1): number {
  return value
}
