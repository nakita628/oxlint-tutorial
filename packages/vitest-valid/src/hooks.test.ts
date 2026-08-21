// hooks.test.ts の適合版
import { afterAll, afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

describe('hooks', () => {
  // vitest/prefer-hooks-on-top, prefer-hooks-in-order:
  // フックはテストより前に、beforeEach → afterEach → afterAll の順で書く
  beforeEach(() => {
    void 0
  })

  afterEach(() => {
    void 0
  })

  // vitest/padding-around-after-all-blocks: afterAll の前後に空行を入れる
  afterAll(() => {
    void 0
  })

  // vitest/padding-around-test-blocks: テストブロックの前後に空行を入れる
  test('first', () => {
    expect(1).toBe(1)
  })

  // vitest/prefer-spy-on: vi.spyOn を使う
  test('spy', () => {
    const target = { run: (): number => 1 }
    const spy = vi.spyOn(target, 'run')
    target.run()
    expect(spy).toHaveBeenCalledExactlyOnceWith()
  })

  // vitest/prefer-mock-promise-shorthand, vitest/require-mock-type-parameters:
  // mockResolvedValue を使い、vi.fn には型引数を付ける
  test('mock promise', () => {
    const mock = vi.fn<() => Promise<number>>().mockResolvedValue(1)
    void mock()
    expect(mock).toHaveBeenCalledExactlyOnceWith()
  })

  // vitest/prefer-mock-return-shorthand: mockReturnValue を使う
  test('mock return', () => {
    const mock = vi.fn<() => number>().mockReturnValue(1)
    mock()
    expect(mock).toHaveBeenCalledExactlyOnceWith()
  })

  // vitest/require-to-throw-message: toThrow にメッセージを渡す
  test('throws', () => {
    expect(() => {
      throw new Error('boom')
    }).toThrow('boom')
  })

  // vitest/prefer-called-with, prefer-called-exactly-once-with:
  // 呼び出し回数と引数をまとめて検証する
  test('called exactly once with', () => {
    const mock = vi.fn<(value: number) => void>()
    mock(1)
    expect(mock).toHaveBeenCalledExactlyOnceWith(1)
  })

  // vitest/prefer-called-times, prefer-to-have-been-called-times:
  // 回数は toHaveBeenCalledTimes() で検証する
  test('called times', () => {
    const mock = vi.fn<() => void>()
    mock()
    mock()
    expect(mock).toHaveBeenCalledTimes(2)
  })
})

// vitest/require-hook: セットアップ処理はフックの中で行う
