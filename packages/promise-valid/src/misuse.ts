// misuse.ts の適合版

declare function loadUser(id: string): Promise<{ name: string }>

export function paramNames(): Promise<number> {
  // promise/param-names, promise/avoid-new, promise/no-multiple-resolved:
  // executor を書かずに済むなら new Promise 自体を使わない
  return Promise.resolve(1)
}

export function noNewStatics(): Promise<number> {
  // promise/no-new-statics: new を付けずに呼ぶ
  return Promise.resolve(1)
}

export async function validParams(): Promise<number> {
  // promise/valid-params: then を使わず await で受け取る
  return await Promise.resolve(1)
}

export async function callbackInPromise(): Promise<string> {
  // promise/no-callback-in-promise: コールバックではなく戻り値で返す
  const user = await loadUser('1')
  return user.name
}

export async function promiseInCallback(): Promise<string> {
  // promise/no-promise-in-callback: コールバックを使わず await に統一する
  const user = await loadUser('1')
  return user.name
}

export async function preferAwaitToCallbacks(): Promise<string> {
  // promise/prefer-await-to-callbacks: async/await で書く
  const user = await loadUser('1')
  return user.name
}

export function specOnly(): Promise<number> {
  // promise/spec-only: 仕様にあるメソッドだけを使う
  return Promise.resolve(1)
}
