// タグ名・アクセス指定まわりの違反サンプル

/**
 * 値を返す。
 * @returnz {number} 値
 */
// jsdoc/check-tag-names: 存在しないタグ名
export function unknownTag(): number {
  return 1
}

/**
 * 値を返す。
 * @access publik
 * @returns {number} 値
 */
// jsdoc/check-access: @access に指定できるのは package / private / protected / public
export function badAccess(): number {
  return 2
}

/**
 * 抽象的な処理。
 * @abstract これは書けない
 * @returns {number} 値
 */
// jsdoc/empty-tags: @abstract は内容を持てない
export function emptyTag(): number {
  return 3
}

/**
 * インターフェースを実装する。
 * @implements {Runnable}
 * @returns {number} 値
 */
// jsdoc/implements-on-classes: @implements はクラスにしか書けない
export function implementsOnFunction(): number {
  return 4
}

/** */
// jsdoc/no-blank-blocks: 中身が空の JSDoc ブロック
export const blank = 1
