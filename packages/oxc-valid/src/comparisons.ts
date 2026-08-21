// comparisons.ts の適合版

export function constComparisons(value: number): boolean {
  // oxc/const-comparisons: 成立しうる範囲で比較する
  return value > 3 && value < 5
}

export function doubleComparisons(left: number, right: number): boolean {
  // oxc/double-comparisons: <= にまとめる
  return left <= right
}

export function badComparisonSequence(a: number, b: number, c: number): boolean {
  // oxc/bad-comparison-sequence: && でつなぐ
  return a < b && b < c
}

export function badCharAtComparison(value: string): boolean {
  // oxc/bad-char-at-comparison: 1 文字と比較する
  return value.charAt(0) === 'a'
}

export function badObjectLiteralComparison(value: Record<string, number>): boolean {
  // oxc/bad-object-literal-comparison: キーの数で判定する
  return Object.keys(value).length === 0
}

export function erasingOp(value: number): number {
  // oxc/erasing-op: 消えてしまわない演算にする
  return value * 2
}

export function approxConstant(): number {
  // oxc/approx-constant: 組み込み定数を使う
  return Math.PI
}
