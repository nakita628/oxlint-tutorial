// 比較演算まわりの違反サンプル

export function equality(value: unknown, other: number): boolean {
  // eqeqeq: == ではなく === を使う
  if (value == other) {
    return true
  }

  // no-eq-null: null との == 比較を禁止
  if (value == null) {
    return true
  }

  // yoda: リテラルを左辺に置く「ヨーダ記法」を禁止
  if (42 === other) {
    return true
  }

  // no-self-compare: 自分自身との比較は意味がない
  if (other === other) {
    return true
  }

  // use-isnan: NaN との比較は Number.isNaN を使う
  if (other === NaN) {
    return true
  }

  // valid-typeof: typeof の比較先が不正な文字列
  if (typeof other === 'nunber') {
    return true
  }

  // no-compare-neg-zero: -0 との比較を禁止
  if (other === -0) {
    return true
  }

  // no-unneeded-ternary: cond ? true : false は冗長
  return other > 0 ? true : false
}

// no-constant-condition: 常に真になる条件式
export function constantCondition(): number {
  if (true) {
    return 1
  }
  return 2
}

// no-constant-binary-expression: 結果が定数になる比較
export function constantBinary(value: number): boolean {
  return [] === []
}

// no-cond-assign: 条件式の中で代入している
export function condAssign(value: number): boolean {
  let current = value
  // oxfmt が括弧を補うとルールが検出できなくなるため整形対象から外す
  // oxfmt-ignore
  if (current = 1) {
    return true
  }
  return false
}
