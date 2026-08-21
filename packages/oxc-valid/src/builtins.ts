// builtins.ts の適合版

export function badMinMax(value: number): number {
  // oxc/bad-min-max-func: 意味のある clamp になるように並べる
  return Math.min(100, Math.max(0, value))
}

export function badMatchAllArg(value: string): unknown {
  // oxc/bad-match-all-arg: g フラグを付ける
  return value.matchAll(/a/gu)
}

export function badReplaceAllArg(value: string): string {
  // oxc/bad-replace-all-arg: g フラグを付ける
  return value.replaceAll(/a/gu, 'b')
}

export function numberArgOutOfRange(value: number): string {
  // oxc/number-arg-out-of-range: 0〜100 の範囲にする
  return value.toFixed(2)
}

export function badArrayMethodOnArguments(...args: Array<unknown>): Array<unknown> {
  // oxc/bad-array-method-on-arguments: レストパラメータなら本物の配列
  return args.map((value) => value)
}

export function uninvokedArrayCallback(): Array<number> {
  // oxc/uninvoked-array-callback: Array.from なら callback が呼ばれる
  return Array.from({ length: 3 }, (_, index) => index)
}

export function badBitwiseOperator(options?: { retries: number }): number {
  // oxc/bad-bitwise-operator: 論理演算子を使う
  if (options && options.retries) {
    return options.retries
  }
  return 0
}

export function misrefactoredAssignOp(value: number): number {
  let total = value
  // oxc/misrefactored-assign-op: 意図どおりの代入演算子を使う
  total += 1
  return total
}
