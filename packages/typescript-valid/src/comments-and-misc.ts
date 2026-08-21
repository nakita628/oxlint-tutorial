// comments-and-misc.ts の適合版

// typescript/ban-ts-comment, typescript/prefer-ts-expect-error: 抑制コメントを使わない
export const notIgnored = 1

// typescript/ban-tslint-comment: TSLint 用のコメントは書かない
export const noTslintComment = 1

// typescript/explicit-function-return-type, typescript/explicit-module-boundary-types:
// 戻り値の型を明示する
export function withReturnType(value: number): number {
  return value * 2
}

// typescript/no-dynamic-delete: delete ではなく新しいオブジェクトを作る
export function withoutKey(source: Record<string, number>, key: string): Record<string, number> {
  const rest: Record<string, number> = {}
  for (const name of Object.keys(source)) {
    if (name !== key) {
      rest[name] = source[name]
    }
  }
  return rest
}

// typescript/prefer-for-of: for-of で書く
export function classicFor(values: ReadonlyArray<number>): number {
  let total = 0
  for (const value of values) {
    total += value
  }
  return total
}

// typescript/consistent-generic-constructors: 型引数はコンストラクタ側に書く
export const map = new Map<string, number>()
