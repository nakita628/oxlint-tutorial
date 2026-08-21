// tags.ts の適合版

/**
 * 値を返す。
 * @returns {number} 値
 */
export function knownTag(): number {
  return 1
}

/**
 * 値を返す。
 * @access public
 * @returns {number} 値
 */
export function goodAccess(): number {
  return 2
}

/**
 * 抽象的な処理。
 * @abstract
 * @returns {number} 値
 */
export function emptyTag(): number {
  return 3
}

/**
 * 実行できるもの。
 */
export interface Runnable {
  run: () => void
}

/**
 * Runnable の実装。
 * @implements {Runnable}
 */
export class Task implements Runnable {
  /**
   * 実行する。
   * @returns {void} 何も返さない
   */
  public run(): void {
    void 0
  }
}

/**
 * 空でない JSDoc ブロック。
 */
export const blank = 1
