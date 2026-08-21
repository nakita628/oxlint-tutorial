// Promise API の誤用サンプル

declare function loadUser(id: string): Promise<{ name: string }>

export function paramNames(): Promise<number> {
  // promise/param-names: executor の引数は resolve / reject という名前にする
  return new Promise((ok, ng) => {
    void ng
    ok(1)
  })
}

export function noNewStatics(): Promise<number> {
  // promise/no-new-statics: Promise.resolve は new を付けずに呼ぶ
  return new Promise.resolve(1)
}

export function validParams(): Promise<number> {
  // promise/valid-params: then は 1〜2 引数で呼ぶ
  return Promise.resolve(1).then()
}

export function multipleResolved(): Promise<number> {
  // promise/no-multiple-resolved: 同じ経路で複数回 resolve している
  return new Promise((resolve, reject) => {
    void reject
    resolve(1)
    resolve(2)
  })
}

export function callbackInPromise(callback: (value: string) => void): void {
  // promise/no-callback-in-promise: then の中でコールバックを呼ばない
  void loadUser('1').then((user) => callback(user.name))
}

export function promiseInCallback(
  read: (callback: (error: Error | undefined) => void) => void,
): void {
  // promise/no-promise-in-callback: コールバックの中で Promise を使わない
  read((error) => {
    void error
    void loadUser('1').then((user) => user.name)
  })
}

export function preferAwaitToCallbacks(
  read: (callback: (error: Error | undefined, value: string) => void) => void,
): void {
  // promise/prefer-await-to-callbacks: エラーファーストコールバックより async/await
  read((error, value) => {
    void error
    void value
  })
}

export function specOnly(): unknown {
  // promise/spec-only: 仕様に無い Promise の独自メソッドを使わない
  return (Promise as unknown as { done: (value: number) => unknown }).done(1)
}
