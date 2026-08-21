// 組み込み API の誤用サンプル

export function badMinMax(value: number): number {
  // oxc/bad-min-max-func: min/max の組み合わせが常に定数になる
  return Math.min(0, Math.max(100, value))
}

export function badMatchAllArg(value: string): unknown {
  // oxc/bad-match-all-arg: matchAll には g フラグ付きの正規表現が必要
  return value.matchAll(/a/u)
}

export function badReplaceAllArg(value: string): string {
  // oxc/bad-replace-all-arg: replaceAll に非 g フラグの正規表現は使えない
  return value.replaceAll(/a/u, 'b')
}

export function numberArgOutOfRange(value: number): string {
  // oxc/number-arg-out-of-range: toFixed の引数は 0〜100
  return value.toFixed(101)
}

export function badArrayMethodOnArguments(): unknown {
  // oxc/bad-array-method-on-arguments: arguments は配列ではない
  // oxlint-disable-next-line eslint/prefer-rest-params
  return arguments.map((value: unknown) => value)
}

export function uninvokedArrayCallback(): Array<number> {
  // oxc/uninvoked-array-callback: Array(n) の要素は空なので callback が呼ばれない
  return new Array(3).map((_, index) => index)
}

export function badBitwiseOperator(options?: { retries: number }): number {
  // oxc/bad-bitwise-operator: 論理演算のつもりで & を使っている（短絡評価されない）
  if (options & options.retries) {
    return options.retries
  }
  return 0
}

export function misrefactoredAssignOp(value: number): number {
  let total = value
  // oxc/misrefactored-assign-op: `a += a + b` のような書き換えミス
  total += total + 1
  return total
}
