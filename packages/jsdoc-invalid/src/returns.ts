// @returns / @throws / @yields まわりの違反サンプル

/**
 * 名前を返す。
 */
// jsdoc/require-returns: @returns が書かれていない
export function getName(): string {
  return 'oxlint'
}

/**
 * 年齢を返す。
 * @returns
 */
// jsdoc/require-returns-type, jsdoc/require-returns-description: 型も説明も無い
export function getAge(): number {
  return 1
}

/**
 * 検証する。
 * @throws
 */
// jsdoc/require-throws-type, jsdoc/require-throws-description: 型も説明も無い
export function validate(): never {
  throw new Error('invalid')
}

/**
 * 連番を生成する。
 */
// jsdoc/require-yields: ジェネレータなのに @yields が無い
export function* counter(): Generator<number> {
  yield 1
}

/**
 * 連番を生成する。
 * @yields
 */
// jsdoc/require-yields-type, jsdoc/require-yields-description: 型も説明も無い
export function* counter2(): Generator<number> {
  yield 2
}
