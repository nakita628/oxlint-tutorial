// unsafe.ts の適合版

declare const knownValue: { nested: number; call: () => number }
declare function takeNumber(value: number): void

// typescript/no-unsafe-assignment: 型の付いた値を代入する
export const assigned: number = knownValue.nested

// typescript/no-unsafe-member-access: 型の付いたオブジェクトのプロパティを読む
export const member = knownValue.nested

// typescript/no-unsafe-call: 型の付いた関数を呼ぶ
export const called = knownValue.call()

// typescript/no-unsafe-argument: 型の合う値を渡す
export function safeArgument(): void {
  takeNumber(knownValue.nested)
}

// typescript/no-unsafe-return: 型の付いた値を返す
export function safeReturn(): number {
  return knownValue.nested
}

// typescript/no-unsafe-type-assertion: アサーションではなく型ガードで絞り込む
export function safeNarrowing(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

// typescript/no-unsafe-unary-minus: 数値にだけ単項マイナスを付ける
declare const count: number

export const safeUnaryMinus = -count
