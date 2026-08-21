// エラー・非同期まわりの違反サンプル

export function throwError(): never {
  // unicorn/throw-new-error: new を付けて Error を投げる
  throw Error('boom')
}

export function errorMessage(): never {
  // unicorn/error-message: Error にはメッセージを渡す
  throw new Error()
}

export function typeError(value: unknown): void {
  // unicorn/prefer-type-error: 型チェックの失敗は TypeError を投げる
  if (typeof value !== 'string') {
    throw new Error('not a string')
  }
}

export function catchBinding(): boolean {
  try {
    JSON.parse('{}')
    return true
  } catch (error) {
    // unicorn/prefer-optional-catch-binding: 使わない引数は省略する
    return false
  }
}

export function catchErrorName(): boolean {
  try {
    JSON.parse('{}')
    return true
  } catch (err) {
    // unicorn/catch-error-name: catch の引数名は error にする
    return err !== null
  }
}

export async function unnecessaryAwait(): Promise<number> {
  // unicorn/no-unnecessary-await: Promise でない値への await は不要
  return await 1
}

export async function singlePromise(): Promise<Array<number>> {
  // unicorn/no-single-promise-in-promise-methods: 要素 1 つの Promise.all は不要
  return Promise.all([Promise.resolve(1)])
}

export async function awaitInPromiseMethods(): Promise<Array<number>> {
  // unicorn/no-await-in-promise-methods: Promise.all の中で await しない
  return Promise.all([await Promise.resolve(1), Promise.resolve(2)])
}

export async function uselessPromiseResolve(): Promise<number> {
  // unicorn/no-useless-promise-resolve-reject: async 関数内の Promise.resolve は不要
  return Promise.resolve(1)
}

// unicorn/no-thenable: then という名前のメンバーは Promise と誤認される
export const thenable = {
  then(): number {
    return 1
  },
}

export function awaitExpressionMember(): Promise<number> {
  // unicorn/no-await-expression-member: (await x).y は一度変数に入れる
  return (async (): Promise<number> => (await Promise.resolve({ value: 1 })).value)()
}

// unicorn/consistent-assert: node:assert の assert は assert.ok() の形で使う
import assert from 'node:assert'

export function inconsistentAssert(value: number): void {
  assert(value === 1)
}

// unicorn/explicit-timer-delay: setTimeout の遅延時間を明示する
export function timerDelay(): void {
  setTimeout(() => {
    void 0
  })
}

// unicorn/prefer-top-level-await: main().then(...) ではなくトップレベル await を使う
async function main(): Promise<void> {
  await Promise.resolve()
}

main().then(() => undefined)
