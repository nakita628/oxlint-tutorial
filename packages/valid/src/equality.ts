// equality.ts の適合版

export function equality(value: unknown, other: number): boolean {
  // eqeqeq: === を使う
  if (value === other) {
    return true
  }

  // no-eq-null: null の判定は === で書く
  if (value === null) {
    return true
  }

  // yoda: 変数を左辺に置く
  if (other === 42) {
    return true
  }

  // no-self-compare: 別の値と比較する
  if (other === 43) {
    return true
  }

  // use-isnan: NaN 判定は Number.isNaN
  if (Number.isNaN(other)) {
    return true
  }

  // valid-typeof: 正しい typeof の文字列
  if (typeof other === 'number') {
    return true
  }

  // no-compare-neg-zero: Object.is で -0 を判定する
  if (Object.is(other, -0)) {
    return true
  }

  // no-unneeded-ternary: 条件式をそのまま返す
  return other > 0
}

// no-constant-condition: 条件には変化しうる式を書く
export function constantCondition(flag: boolean): number {
  if (flag) {
    return 1
  }
  return 2
}

// no-constant-binary-expression: 意味のある比較を書く
export function constantBinary(value: number): boolean {
  return value === 1
}

// no-cond-assign: 条件式の外で代入する
export function condAssign(value: number): boolean {
  const current = value + 1
  if (current === 1) {
    return true
  }
  return false
}
