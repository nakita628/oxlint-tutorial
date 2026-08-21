// Promise の基本的な使い方の違反サンプル

declare function loadUser(id: string): Promise<{ name: string }>

export function alwaysReturn(id: string): Promise<void> {
  // promise/always-return: then の中では必ず値を返すか throw する
  return loadUser(id).then((user) => {
    void user.name
  })
}

export function catchOrReturn(id: string): void {
  // promise/catch-or-return: catch も return もしていない Promise
  loadUser(id).then((user) => user.name)
}

export function preferAwaitToThen(id: string): Promise<string> {
  // promise/prefer-await-to-then: then ではなく await を使う
  return loadUser(id).then((user) => user.name)
}

function onFulfilled(user: { name: string }): string {
  return user.name
}

function onRejected(): string {
  return 'unknown'
}

export function preferCatch(id: string): void {
  // promise/prefer-catch: then の第 2 引数ではなく catch() を使う
  loadUser(id).then(onFulfilled, onRejected)
}

export function noNesting(id: string): Promise<string> {
  // promise/no-nesting: then の中で then をネストしない
  return loadUser(id)
    .then((user) => loadUser(user.name).then((inner) => inner.name))
    .catch(() => 'unknown')
}

export async function noReturnWrap(id: string): Promise<string> {
  // promise/no-return-wrap: then の中で Promise.resolve を返さない
  return loadUser(id)
    .then((user) => Promise.resolve(user.name))
    .catch(() => 'unknown')
}

export function noReturnInFinally(id: string): Promise<{ name: string }> {
  // promise/no-return-in-finally: finally の中で return しない
  return loadUser(id).finally(() => {
    return 'ignored'
  })
}

export function avoidNew(): Promise<number> {
  // promise/avoid-new: すでに Promise を返す API があるなら new Promise は避ける
  return new Promise((resolve) => {
    resolve(1)
  })
}
