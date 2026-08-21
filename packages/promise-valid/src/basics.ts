// basics.ts の適合版

declare function loadUser(id: string): Promise<{ name: string }>

export async function alwaysReturn(id: string): Promise<string> {
  // promise/always-return: 値を返す（await にすればそもそも then が不要）
  const user = await loadUser(id)
  return user.name
}

export async function catchOrReturn(id: string): Promise<string> {
  // promise/catch-or-return: try/catch でエラーを処理する
  try {
    const user = await loadUser(id)
    return user.name
  } catch {
    return 'unknown'
  }
}

export async function preferAwaitToThen(id: string): Promise<string> {
  // promise/prefer-await-to-then: await を使う
  const user = await loadUser(id)
  return user.name
}

export async function preferCatch(id: string): Promise<string> {
  // promise/prefer-catch: エラー処理は catch 側に寄せる
  try {
    const user = await loadUser(id)
    return user.name
  } catch {
    return 'unknown'
  }
}

export async function noNesting(id: string): Promise<string> {
  // promise/no-nesting: await を並べればネストしない
  try {
    const user = await loadUser(id)
    const inner = await loadUser(user.name)
    return inner.name
  } catch {
    return 'unknown'
  }
}

export async function noReturnWrap(id: string): Promise<string> {
  // promise/no-return-wrap: 値をそのまま返す
  try {
    const user = await loadUser(id)
    return user.name
  } catch {
    return 'unknown'
  }
}

export async function noReturnInFinally(id: string): Promise<{ name: string }> {
  // promise/no-return-in-finally: finally では後始末だけを行う
  try {
    return await loadUser(id)
  } finally {
    void 'cleanup'
  }
}

export async function avoidNew(): Promise<number> {
  // promise/avoid-new: すでに Promise を返す API をそのまま使う
  return await Promise.resolve(1)
}
