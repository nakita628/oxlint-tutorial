// 構造まわりの違反サンプル

export function missingThrow(): void {
  // oxc/missing-throw: new Error(...) を作っただけで throw していない
  new Error('boom')
}

export function onlyUsedInRecursion(value: number, unusedDepth: number): number {
  // oxc/only-used-in-recursion: 再帰呼び出しにしか使われていない引数
  if (value <= 0) {
    return 0
  }
  return onlyUsedInRecursion(value - 1, unusedDepth)
}

export function accumulatingSpread(values: Array<Array<number>>): Array<number> {
  // oxc/no-accumulating-spread: ループ内でスプレッドを積み上げると O(n^2) になる
  let result: Array<number> = []
  for (const value of values) {
    result = [...result, ...value]
  }
  return result
}

export function mapSpread(): Array<Record<string, number>> {
  const items = [{ a: 1 }, { a: 2 }, { a: 3 }]
  // oxc/no-map-spread: map 内のスプレッドはコピーコストが高い
  return items.map((item) => ({ ...item, b: item.a * 2 }))
}

export function branchesSharingCode(flag: boolean): number {
  // oxc/branches-sharing-code: if / else の両方の分岐が同じコードで始まっている
  if (flag) {
    const shared = 1
    return shared + 1
  } else {
    const shared = 1
    return shared + 2
  }
}

// oxc/no-this-in-exported-function: export した関数の中の this は undefined になりがち
export function thisInExportedFunction(): unknown {
  return this
}

// oxc/no-const-enum: const enum は isolatedModules と相性が悪い
export const enum Flag {
  On = 1,
  Off = 0,
}
