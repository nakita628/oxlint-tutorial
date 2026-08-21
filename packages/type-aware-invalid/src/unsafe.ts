// any まわり（型情報が必要なルール）の違反サンプル

declare const anyValue: any
declare function takeNumber(value: number): void

// typescript/no-unsafe-assignment: any を代入している
export const assigned: number = anyValue

// typescript/no-unsafe-member-access: any のプロパティにアクセスしている
export const member = anyValue.nested

// typescript/no-unsafe-call: any を関数として呼んでいる
export const called = anyValue()

// typescript/no-unsafe-argument: any を引数として渡している
export function unsafeArgument(): void {
  takeNumber(anyValue)
}

// typescript/no-unsafe-return: any を返している
export function unsafeReturn(): number {
  return anyValue
}

// typescript/no-unsafe-type-assertion: 型を無理やり広げるアサーション
export function unsafeAssertion(value: unknown): string {
  return value as string
}

// typescript/no-unsafe-unary-minus: 数値でない値に単項マイナスを付けている
declare const text: string

export const unsafeUnaryMinus = -text
