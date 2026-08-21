// Promise まわり（型情報が必要なルール）の違反サンプル

declare function loadUser(id: string): Promise<{ name: string }>
declare function sync(): number

export function floating(): void {
  // typescript/no-floating-promises: Promise を放置している
  loadUser('1')
}

export async function awaitNonThenable(): Promise<number> {
  // typescript/await-thenable: Promise でない値を await している
  return await sync()
}

export function misusedPromise(values: Array<string>): Array<string> {
  // typescript/no-misused-promises: 真偽値が必要な場所に Promise を渡している
  return values.filter(async (value) => value.length > 0) as unknown as Array<string>
}

// typescript/promise-function-async: Promise を返す関数は async にする
export function returnsPromise(): Promise<number> {
  return Promise.resolve(1)
}

// typescript/require-await: await の無い async 関数
export async function noAwait(): Promise<number> {
  return sync()
}

// typescript/return-await: try の中では await を付けて返す
export async function returnAwait(): Promise<{ name: string }> {
  try {
    return loadUser('1')
  } catch {
    return { name: 'unknown' }
  }
}

// typescript/prefer-promise-reject-errors: reject には Error を渡す
export function rejectLiteral(): Promise<never> {
  return Promise.reject('failed')
}

// typescript/use-unknown-in-catch-callback-variable: catch の引数は unknown で受ける
export function catchCallback(): Promise<number> {
  return Promise.resolve(1).catch((error: Error) => {
    void error
    return 0
  })
}

// typescript/only-throw-error: Error 以外を throw しない
export function throwLiteral(): never {
  throw 'boom'
}
