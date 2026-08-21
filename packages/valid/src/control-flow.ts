// control-flow.ts の適合版

export function controlFlow(items: readonly number[], flag: boolean): number {
  // curly: 必ずブロックを付ける
  if (flag) {
    return 0
  }

  // no-lonely-if: else if にまとめる
  if (items.length > 0) {
    return 2
  }

  // no-negated-condition: 肯定条件で書く
  if (flag) {
    return 4
  }

  return 3
}

export function elseReturn(flag: boolean): number {
  // no-else-return: else を使わない
  if (flag) {
    return 1
  }

  return 2
}

export function lonelyBlock(value: number): number {
  let result = value
  // no-lone-blocks: 入れ子ブロックを作らない
  if (value > 0) {
    result *= 2
  }
  return result
}

export function labeled(items: readonly number[]): boolean {
  // no-labels / no-extra-label / no-unused-labels: ラベルではなく some() を使う
  return items.some((item) => item > 0)
}

export function sequences(flag: boolean): number {
  // no-sequences: カンマ演算子を使わず、文を分ける
  let counter = 0
  counter += 1
  counter += 2
  if (flag) {
    counter += 3
  }
  return counter
}

export function switchDefault(value: number): string {
  switch (value) {
    // default-case / default-case-last: default 節を最後に必ず置く
    case 1:
      return 'one'
    default:
      return 'other'
  }
}

export function fallthrough(value: number): string {
  let result = 'none'
  switch (value) {
    // no-fallthrough / no-case-declarations: break を書き、case 内で宣言しない
    case 1:
      result = 'one'
      break
    case 2:
      result = 'two'
      break
    default:
      result += 'other'
  }
  return result
}

export function guardForIn(source: Record<string, number>): number {
  let total = 0
  // guard-for-in: Object.keys() を使えば for-in 自体が不要になる
  for (const key of Object.keys(source)) {
    total += source[key]
  }
  return total
}

export function continueLoop(items: readonly number[]): number {
  let total = 0
  // no-continue: filter で条件を表現する
  for (const item of items.filter((candidate) => candidate >= 0)) {
    total += item
  }
  return total
}

export function reachable(): number {
  // no-unreachable: 到達不能なコードを書かない
  const value = 2
  return value
}

export function loopAll(items: readonly number[]): number {
  // no-unreachable-loop: すべての要素を回す
  let total = 0
  for (const item of items) {
    total += item
  }
  return total
}

export function modifiedLoopCondition(): number {
  let index = 0
  // no-unmodified-loop-condition: 条件に使う変数を更新する
  while (index < 10) {
    index += 1
  }
  return index
}

export function forDirection(): number {
  let total = 0
  // for-direction: 条件と更新式の向きをそろえる
  for (let index = 0; index < 10; index += 1) {
    total += 1
  }
  return total
}

export function returnAssign(value: number): number {
  // no-return-assign: 代入と return を分ける
  const result = value + 1
  return result
}
