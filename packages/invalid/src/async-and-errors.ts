// 非同期・例外まわりの違反サンプル

// require-await: await が無い async 関数
export async function noAwait(): Promise<number> {
  return 1
}

export async function awaitInLoop(urls: readonly string[]): Promise<number> {
  let total = 0
  for (const url of urls) {
    // no-await-in-loop: ループ内の await は直列実行になる
    const response = await fetch(url)
    total += response.status
  }
  return total
}

export function throwLiteral(): never {
  // no-throw-literal: Error 以外を throw しない
  throw 'something went wrong'
}

// no-empty: 空ブロックを禁止（allowEmptyCatch: false なので catch も対象）
export function emptyBlock(): void {
  try {
    JSON.parse('{}')
  } catch {}
}

export function alertAndConsole(): void {
  // no-alert: alert / confirm / prompt を禁止
  alert('hello')
  // no-console: console.* を禁止
  console.log('hello')
  // no-debugger: debugger 文を禁止
  debugger
}

// no-async-promise-executor: executor を async にしない
export function asyncExecutor(): Promise<number> {
  return new Promise(async (resolve) => {
    resolve(await Promise.resolve(1))
  })
}

// no-promise-executor-return: executor から値を返さない
export function executorReturn(): Promise<number> {
  return new Promise((resolve) => resolve(1))
}

// prefer-promise-reject-errors: reject には Error を渡す
export function rejectLiteral(): Promise<never> {
  return Promise.reject('failed')
}

// no-useless-catch: 受け取ったエラーをそのまま投げ直すだけの catch
export function uselessCatch(): number {
  try {
    return 1
  } catch (error) {
    throw error
  }
}

// preserve-caught-error: 新しいエラーを投げるときは cause で元のエラーを残す
export function losesCause(): number {
  try {
    return JSON.parse('{}') as number
  } catch {
    throw new Error('parse failed')
  }
}

// no-unsafe-finally: finally の中で return しない
export function unsafeFinally(): number {
  try {
    return 1
  } finally {
    return 2
  }
}

// no-ex-assign: catch の引数に再代入しない
export function exAssign(): string {
  try {
    return 'ok'
  } catch (error) {
    error = new Error('replaced')
    return String(error)
  }
}

// no-eval: eval を使わない
export function useEval(): unknown {
  return eval('1 + 1')
}

// no-implied-eval: setTimeout に文字列を渡さない
export function impliedEval(): void {
  setTimeout('console.log(1)', 0)
}
