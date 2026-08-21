// async-and-errors.ts の適合版

// require-await: await を含むので async が正当
export async function withAwait(): Promise<number> {
  const value = await Promise.resolve(1)
  return value
}

export async function awaitInLoop(urls: readonly string[]): Promise<number> {
  // no-await-in-loop: Promise.all で並列化する
  const responses = await Promise.all(urls.map((url) => fetch(url)))
  return responses.reduce((total, response) => total + response.status, 0)
}

export function throwError(): never {
  // no-throw-literal: Error オブジェクトを throw する
  throw new Error('something went wrong')
}

export function notEmptyBlock(): boolean {
  // no-empty: catch に必ず処理を書く
  try {
    JSON.parse('{}')
    return true
  } catch {
    return false
  }
}

export function noAlertNoConsole(): string {
  // no-alert / no-console / no-debugger: 使わない
  return 'hello'
}

// no-async-promise-executor: executor は同期関数にする
export function asyncExecutor(): Promise<number> {
  return Promise.resolve(1)
}

// no-promise-executor-return: executor では値を返さずに resolve だけ呼ぶ
export function executorReturn(): Promise<number> {
  return new Promise((resolve) => {
    resolve(1)
  })
}

// prefer-promise-reject-errors: reject には Error を渡す
export function rejectError(): Promise<never> {
  return Promise.reject(new Error('failed'))
}

// no-useless-catch: 何もしない catch は書かない
export function noUselessCatch(): number {
  return 1
}

// preserve-caught-error: cause で元のエラーを残す
export function keepsCause(): number {
  try {
    return JSON.parse('{}') as number
  } catch (error) {
    throw new Error('parse failed', { cause: error })
  }
}

// no-unsafe-finally: finally では後始末だけを行う
export function safeFinally(): number {
  try {
    return 1
  } finally {
    void 'cleanup'
  }
}

// no-ex-assign: catch の引数は書き換えない
export function exAssign(): string {
  try {
    return 'ok'
  } catch (error) {
    return String(error)
  }
}

// no-eval / no-implied-eval: 文字列を評価しない
export function noEval(): number {
  return 1 + 1
}

export function noImpliedEval(): void {
  setTimeout(() => {
    void 'tick'
  }, 0)
}
