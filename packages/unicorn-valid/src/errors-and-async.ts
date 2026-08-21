// errors-and-async.ts の適合版
import assert from 'node:assert'

export function throwError(): never {
  // unicorn/throw-new-error: new Error を投げる
  throw new Error('boom')
}

export function errorMessage(): never {
  // unicorn/error-message: メッセージを渡す
  throw new Error('something went wrong')
}

export function typeError(value: unknown): void {
  // unicorn/prefer-type-error: 型チェック失敗は TypeError
  if (typeof value !== 'string') {
    throw new TypeError('not a string')
  }
}

export function catchBinding(): boolean {
  try {
    JSON.parse('{}')
    return true
  } catch {
    // unicorn/prefer-optional-catch-binding: 使わない引数は省略する
    return false
  }
}

export function catchErrorName(): boolean {
  try {
    JSON.parse('{}')
    return true
  } catch (error) {
    // unicorn/catch-error-name: catch の引数名は error
    return error !== undefined
  }
}

export async function unnecessaryAwait(): Promise<number> {
  // unicorn/no-unnecessary-await: Promise でない値は await しない
  return 1
}

export async function singlePromise(): Promise<Array<number>> {
  // unicorn/no-single-promise-in-promise-methods: 1 つなら await するだけでよい
  const value = await Promise.resolve(1)
  return [value]
}

export async function awaitInPromiseMethods(): Promise<Array<number>> {
  // unicorn/no-await-in-promise-methods: Promise.all の中では await しない
  return Promise.all([Promise.resolve(1), Promise.resolve(2)])
}

export async function uselessPromiseResolve(): Promise<number> {
  // unicorn/no-useless-promise-resolve-reject: 値をそのまま返す
  return 1
}

// unicorn/no-thenable: then という名前を避ける
export const thenable = {
  resolveValue(): number {
    return 1
  },
}

export async function awaitExpressionMember(): Promise<number> {
  // unicorn/no-await-expression-member: いったん変数に入れる
  const result = await Promise.resolve({ value: 1 })
  return result.value
}

// unicorn/consistent-assert: assert.ok() の形で使う
export function consistentAssert(value: number): void {
  assert.ok(value === 1)
}

// unicorn/explicit-timer-delay: 遅延時間を明示する
export function timerDelay(): void {
  setTimeout(() => {
    void 0
  }, 0)
}

// unicorn/prefer-top-level-await: トップレベル await を使う
await Promise.resolve()
