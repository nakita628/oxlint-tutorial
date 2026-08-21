// declarations.ts の適合版

export function declarations(): number {
  // no-var / prefer-const: 再代入しないものは const
  const legacy = 1
  const neverReassigned = 2

  // init-declarations / no-multi-assign: 宣言と同時に、ひとつずつ初期化する
  const first = 3
  const second = 3

  // no-undefined: undefined リテラルではなく null を使う
  const nothing = null

  // no-plusplus: ++ ではなく += 1
  let counter = 0
  counter += 1

  return legacy + neverReassigned + first + second + counter + (nothing === null ? 0 : 1)
}

// no-unused-vars: 宣言した変数はきちんと使う
export function usedLocal(): string {
  const used = 'used'
  return used
}

// no-unassigned-vars: 宣言時に値を入れる
export function assigned(): string {
  const assignedValue = 'value'
  return assignedValue
}

// no-useless-assignment: 使われる値だけを代入する
export function usefulAssignment(): number {
  const value = 2
  return value
}

// no-underscore-dangle: アンダースコアで始めない
export function noUnderscoreDangle(): number {
  const privateValue = 1
  return privateValue
}

// no-use-before-define: 使う前に定義しておく
const definedFirst = 1

export function useAfterDefine(): number {
  return definedFirst
}

// block-scoped-var: var を使わず、スコープの合った const / let を使う
export function blockScoped(flag: boolean): number {
  let inner = 0
  if (flag) {
    inner = 1
  }
  return inner
}

// no-shadow-restricted-names: undefined などの名前は使わない
export function noShadowRestricted(): number {
  const localValue = 1
  return localValue
}

// no-label-var: ラベルを使わずに書く
export function noLabelVar(): number {
  const loopResult = 1
  return loopResult
}
