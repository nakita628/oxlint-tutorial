// 比較まわりの違反サンプル

export function constComparisons(value: number): boolean {
  // oxc/const-comparisons: 常に true / false になる比較
  return value > 5 && value < 3
}

export function doubleComparisons(left: number, right: number): boolean {
  // oxc/double-comparisons: `a < b || a === b` は `a <= b` と書ける
  return left < right || left === right
}

export function badComparisonSequence(a: number, b: number, c: number): boolean {
  // oxc/bad-comparison-sequence: `a < b < c` は意図どおりに動かない
  return a < b < c
}

export function badCharAtComparison(value: string): boolean {
  // oxc/bad-char-at-comparison: charAt() の結果は 1 文字なので複数文字と比較できない
  return value.charAt(0) === 'ab'
}

export function badObjectLiteralComparison(value: Record<string, number>): boolean {
  // oxc/bad-object-literal-comparison: オブジェクトリテラルとの比較は常に false
  return value === {}
}

export function erasingOp(value: number): number {
  // oxc/erasing-op: 常に 0 になる演算
  return value * 0
}

export function approxConstant(): number {
  // oxc/approx-constant: Math.PI などの定数を手打ちしている
  return 3.14159265358979
}
