// 制御構文まわりの違反サンプル

export function controlFlow(items: readonly number[], flag: boolean): number {
  // curly: 単一文でもブロックを付ける
  if (flag) return 0

  // no-lonely-if: else の中の単独 if は else if にする
  if (flag) {
    return 1
  } else {
    if (items.length > 0) {
      return 2
    }
  }

  // no-negated-condition: 否定条件 + else は読みにくい
  if (!flag) {
    return 3
  } else {
    return 4
  }
}

export function elseReturn(flag: boolean): number {
  // no-else-return: if で return しているなら else は不要
  if (flag) {
    return 1
  } else {
    return 2
  }
}

export function lonelyBlock(value: number): number {
  let result = value
  if (value > 0) {
    // no-lone-blocks: ブロックの中の入れ子ブロックは冗長
    {
      result = result * 2
    }
  }
  return result
}

export function labeled(items: readonly number[]): void {
  // no-labels: ラベル付き文を禁止
  outer: for (const item of items) {
    if (item > 0) {
      break outer
    }
  }
}

export function extraLabel(items: readonly number[]): number {
  let total = 0
  // no-extra-label: ネストしていないループのラベルは不要
  loop: for (const item of items) {
    total += item
    continue loop
  }
  return total
}

export function unusedLabel(): number {
  // no-unused-labels: 使われていないラベル
  unused: {
    return 1
  }
}

export function sequences(flag: boolean): number {
  let counter = 0
  // no-sequences: カンマ演算子を禁止（括弧で囲むと許容されるため、ここでは囲まない）
  ;((counter += 1), (counter += 2))
  if (flag) {
    return ((counter += 3), counter)
  }
  return counter
}

export function switchDefault(value: number): string {
  switch (value) {
    // default-case-last: default 節は最後に置く
    default:
      return 'other'
    case 1:
      return 'one'
  }
}

export function missingDefault(value: number): string {
  // default-case: default 節が無い
  switch (value) {
    case 1:
      return 'one'
  }
  return 'other'
}

export function fallthrough(value: number): string {
  let result = 'none'
  switch (value) {
    // no-fallthrough: break が無く次の case に落ちる
    case 1:
      result = 'one'
    case 2:
      result = 'two'
      break
    default:
      result = 'other'
  }
  return result
}

export function caseDeclarations(value: number): number {
  switch (value) {
    // no-case-declarations: case 節の中で宣言している
    case 1:
      const one = 1
      return one
    default:
      return 0
  }
}

export function guardForIn(source: Record<string, number>): number {
  let total = 0
  // guard-for-in: for-in は hasOwnProperty などでガードする
  for (const key in source) {
    total += source[key]
  }
  return total
}

export function continueLoop(items: readonly number[]): number {
  let total = 0
  for (const item of items) {
    // no-continue: continue を禁止
    if (item < 0) {
      continue
    }
    total += item
  }
  return total
}

export function unreachable(): number {
  return 1
  // no-unreachable: 到達不能コード
  const dead = 2
}

export function unreachableLoop(items: readonly number[]): number {
  // no-unreachable-loop: 必ず 1 回で抜けるループ
  for (const item of items) {
    return item
  }
  return 0
}

export function unmodifiedLoopCondition(): number {
  let index = 0
  const limit = 10
  // no-unmodified-loop-condition: 条件に使う変数が更新されない
  while (limit > 5) {
    index += 1
    break
  }
  return index
}

export function forDirection(): number {
  let total = 0
  // for-direction: 条件と更新式の向きが逆で終了しない
  for (let index = 0; index < 10; index -= 1) {
    total += 1
    break
  }
  return total
}

export function returnAssign(value: number): number {
  let result = value
  // no-return-assign: return 文の中で代入している
  return (result = value + 1)
}
