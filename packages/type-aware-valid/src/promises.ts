// promises.ts の適合版

declare function loadUser(id: string): Promise<{ name: string }>
declare function sync(): number

// typescript/no-floating-promises: await して結果を使う
export async function notFloating(): Promise<string> {
  const user = await loadUser('1')
  return user.name
}

// typescript/await-thenable: Promise でない値は await しない
export function awaitThenable(): number {
  return sync()
}

// typescript/no-misused-promises: 真偽値が必要な場所には同期関数を渡す
export function misusedPromise(values: ReadonlyArray<string>): ReadonlyArray<string> {
  return values.filter((value) => value.length > 0)
}

// typescript/promise-function-async: Promise を返す関数は async にする
// typescript/return-await: 関数の最後の return では await を付けない
export async function returnsPromise(): Promise<number> {
  const value = await Promise.resolve(1)
  return value
}

// typescript/require-await: await を含める
export async function withAwait(): Promise<number> {
  const value = await Promise.resolve(sync())
  return value
}

// typescript/return-await: try の中では await して返す
export async function returnAwait(): Promise<{ name: string }> {
  try {
    return await loadUser('1')
  } catch {
    return { name: 'unknown' }
  }
}

// typescript/prefer-promise-reject-errors: reject には Error を渡す
export async function rejectError(): Promise<never> {
  const rejected = await Promise.reject(new Error('failed'))
  return rejected
}

// typescript/use-unknown-in-catch-callback-variable: catch の引数は unknown で受ける
export async function catchCallback(): Promise<number> {
  const value = await Promise.resolve(1).catch((error: unknown) => {
    void error
    return 0
  })
  return value
}

// typescript/only-throw-error: Error を throw する
export function throwError(): never {
  throw new Error('boom')
}
