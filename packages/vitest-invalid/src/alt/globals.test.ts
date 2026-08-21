// import 方針とマッチャー方針を切り替えたグループの違反サンプル
// vitest/no-importing-vitest-globals: このグループではグローバルを使う設定にしている
import { describe, expect, test, vi } from 'vitest'

describe('alt', () => {
  test('boolean matchers', () => {
    // vitest/prefer-strict-boolean-matchers: toBeTruthy() ではなく toBe(true)
    expect(Boolean(1)).toBeTruthy()
  })

  // vitest/prefer-called-once: toHaveBeenCalledTimes(1) より toHaveBeenCalledOnce()
  test('called once', () => {
    const mock = vi.fn()
    mock()
    expect(mock).toHaveBeenCalledTimes(1)
  })

  // vitest/prefer-todo: 空のテストは test.todo で表す
  test('todo later', () => {})
})
