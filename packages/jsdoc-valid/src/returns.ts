// returns.ts の適合版

/**
 * 名前を返す。
 * @returns {string} 名前
 */
export function getName(): string {
  return 'oxlint'
}

/**
 * 年齢を返す。
 * @returns {number} 年齢
 */
export function getAge(): number {
  return 1
}

/**
 * 常に失敗する検証。
 * @returns {never} 返らない
 * @throws {Error} 常に投げる
 */
export function validate(): never {
  throw new Error('invalid')
}

/**
 * 連番を生成する。
 * @yields {number} 次の番号
 */
export function* counter(): Generator<number> {
  yield 1
}

/**
 * 連番を生成する。
 * @yields {number} 次の番号
 */
export function* counter2(): Generator<number> {
  yield 2
}
