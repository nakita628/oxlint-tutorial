// control-flow.ts の適合版

export function lonelyIf(first: boolean, second: boolean): number {
  // unicorn/no-lonely-if: && でまとめる
  if (first && second) {
    return 1
  }
  return 0
}

export function negatedCondition(flag: boolean): number {
  // unicorn/no-negated-condition: 肯定条件で書く
  if (flag) {
    return 2
  }
  return 1
}

export function negationInEquality(left: boolean, right: boolean): boolean {
  // unicorn/no-negation-in-equality-check: !== で書く
  return left !== right
}

export function nestedTernary(value: number): string {
  // unicorn/no-nested-ternary: 早期 return で書く
  if (value > 10) {
    return 'big'
  }
  if (value > 5) {
    return 'medium'
  }
  return 'small'
}

export function preferTernary(value: number): string {
  // unicorn/prefer-ternary: 三項演算子で書く
  const result = value > 0 ? 'positive' : 'non-positive'
  return result
}

export function logicalOverTernary(value: string | undefined): string {
  // unicorn/prefer-logical-operator-over-ternary: ?? を使う
  return value ?? 'default'
}

export function switchBraces(value: number): string {
  switch (value) {
    // unicorn/switch-case-braces: case にブレースを付ける
    case 1: {
      return 'one'
    }
    default: {
      return 'other'
    }
  }
}

export function switchBreakPosition(value: number): string {
  let result = 'other'
  switch (value) {
    // unicorn/switch-case-break-position: break はブロックの中の末尾に置く
    case 1: {
      result = 'one'
      break
    }
    default: {
      result = 'other'
    }
  }
  return result
}

export function usefulSwitchCase(value: number): string {
  switch (value) {
    // unicorn/no-useless-switch-case: default と同じ内容の case は書かない
    case 1: {
      return 'one'
    }
    default: {
      return 'other'
    }
  }
}

// unicorn/no-abusive-eslint-disable: disable するならルール名を明記する
// 例: // oxlint-disable-next-line unicorn/no-null
export const abusive = 1
