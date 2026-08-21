// 変数宣言まわりの違反サンプル

export function declarations(): number {
  // no-var: var ではなく let / const を使う
  var legacy = 1

  // prefer-const: 再代入されない let は const にする
  let neverReassigned = 2

  // init-declarations: 宣言と同時に初期化する
  let first
  let second
  // no-multi-assign: 連鎖代入は読みにくい
  first = second = 3

  // no-undefined: undefined リテラルの直接使用を禁止
  const nothing = undefined

  // no-plusplus: ++ / -- を禁止
  let counter = 0
  counter++

  return legacy + neverReassigned + first + second + counter + (nothing ? 1 : 0)
}

// no-unused-vars: 使われていない変数
export function unusedLocal(): void {
  const neverUsed = 'unused'
}

// no-unassigned-vars: 一度も代入されない let
export function unassigned(): string | undefined {
  let neverAssigned: string | undefined
  return neverAssigned
}

// no-useless-assignment: 読まれないまま上書きされる代入
export function uselessAssignment(): number {
  let value = 1
  value = 2
  return value
}

// no-underscore-dangle: 先頭・末尾のアンダースコアを禁止
export function underscoreDangle(): number {
  const _private = 1
  return _private
}

// no-use-before-define: 定義より前に使っている
export function useBeforeDefine(): number {
  return definedLater
}

const definedLater = 1

// block-scoped-var: var をブロックスコープ変数のように使っている
export function blockScopedVar(flag: boolean): number {
  if (flag) {
    var inner = 1
  }
  return inner
}

// no-shadow-restricted-names: undefined などの名前を再定義しない
export function shadowRestricted(): number {
  const undefined = 1
  return undefined
}

// no-label-var: ラベル名と変数名が同じ
export function labelVar(): number {
  const loop = 1
  loop: for (let index = 0; index < 1; index += 1) {
    break loop
  }
  return loop
}
