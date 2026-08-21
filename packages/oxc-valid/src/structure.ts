// structure.ts の適合版

export function missingThrow(): never {
  // oxc/missing-throw: 作った Error は throw する
  throw new Error('boom')
}

export function onlyUsedInRecursion(value: number): number {
  // oxc/only-used-in-recursion: 使わない引数は削除する
  if (value <= 0) {
    return 0
  }
  return onlyUsedInRecursion(value - 1)
}

export function accumulatingSpread(values: Array<Array<number>>): Array<number> {
  // oxc/no-accumulating-spread: push でまとめる
  const result: Array<number> = []
  for (const value of values) {
    result.push(...value)
  }
  return result
}

export function mapSpread(): Array<Record<string, number>> {
  const items = [{ a: 1 }, { a: 2 }, { a: 3 }]
  // oxc/no-map-spread: 必要なプロパティだけを持つ新しいオブジェクトを作る
  return items.map((item) => ({ a: item.a, b: item.a * 2 }))
}

export function branchesSharingCode(flag: boolean): number {
  // oxc/branches-sharing-code: 共通部分は分岐の外に出す
  const shared = 1
  if (flag) {
    return shared + 1
  }
  return shared + 2
}

// oxc/no-this-in-exported-function: this を使わずに引数で受け取る
export function thisInExportedFunction(context: unknown): unknown {
  return context
}

// oxc/no-const-enum: 通常の enum を使う
export enum Flag {
  On = 1,
  Off = 0,
}
