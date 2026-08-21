// 制御構文まわりの違反サンプル

export function lonelyIf(first: boolean, second: boolean): number {
  if (first) {
    // unicorn/no-lonely-if: 入れ子の単独 if は && でまとめる
    if (second) {
      return 1
    }
  }
  return 0
}

export function negatedCondition(flag: boolean): number {
  // unicorn/no-negated-condition: 否定条件 + else は読みにくい
  if (!flag) {
    return 1
  } else {
    return 2
  }
}

export function negationInEquality(left: boolean, right: boolean): boolean {
  // unicorn/no-negation-in-equality-check: !a === b は意図が伝わりにくい
  return !left === right
}

export function nestedTernary(value: number): string {
  // unicorn/no-nested-ternary: 三項演算子のネスト
  return value > 10 ? 'big' : value > 5 ? 'medium' : 'small'
}

export function preferTernary(value: number): string {
  // unicorn/prefer-ternary: 代入だけの if/else は三項演算子で書ける
  let result: string
  if (value > 0) {
    result = 'positive'
  } else {
    result = 'non-positive'
  }
  return result
}

export function logicalOverTernary(value: string | null): string {
  // unicorn/prefer-logical-operator-over-ternary: x ? x : y は x ?? y
  return value ? value : 'default'
}

export function switchBraces(value: number): string {
  switch (value) {
    // unicorn/switch-case-braces: case にはブレースを付ける
    case 1:
      return 'one'
    default:
      return 'other'
  }
}

export function switchBreakPosition(value: number): string {
  let result = 'other'
  switch (value) {
    // unicorn/switch-case-break-position: break はブロックの中に置く
    case 1: {
      result = 'one'
    }
    break
    default: {
      result = 'other'
    }
  }
  return result
}

export function uselessSwitchCase(value: number): string {
  switch (value) {
    // unicorn/no-useless-switch-case: default と同じ内容の case は不要
    case 1:
    default: {
      return 'other'
    }
  }
}

/* oxlint-disable */
// unicorn/no-abusive-eslint-disable: ルール名を指定しない disable コメントは乱暴
export const abusive = 1
