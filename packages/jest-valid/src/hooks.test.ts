// hooks.test.ts の適合版
import { afterAll, afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals'

// jest/no-confusing-set-timeout: jest.setTimeout はトップレベルで一度だけ呼ぶ
jest.setTimeout(1000)

// jest/no-untyped-mock-factory: モジュールのモックには型引数を付ける
jest.mock<typeof import('./helpers.ts')>('./helpers.ts', () => ({
  helper: (): number => 1,
}))

describe('hooks', () => {
  // jest/prefer-hooks-on-top, jest/prefer-hooks-in-order:
  // フックはテストより前に、beforeEach → afterEach → afterAll の順で書く
  beforeEach(() => {
    void 0
  })

  afterEach(() => {
    void 0
  })

  // jest/padding-around-after-all-blocks: afterAll の前後に空行を入れる
  afterAll(() => {
    void 0
  })

  // jest/padding-around-test-blocks: テストブロックの前後に空行を入れる
  test('first', () => {
    expect(1).toBe(1)
  })

  // jest/no-done-callback: done ではなく Promise を返す
  test('promise', async () => {
    await expect(Promise.resolve(1)).resolves.toBe(1)
  })

  // jest/prefer-spy-on: jest.spyOn を使う
  test('spy', () => {
    const target = { run: (): number => 1 }
    const spy = jest.spyOn(target, 'run')
    target.run()
    expect(spy).toHaveBeenCalledWith()
  })

  // jest/prefer-mock-promise-shorthand: mockResolvedValue を使う
  test('mock promise', () => {
    const mock = jest.fn<() => Promise<number>>().mockResolvedValue(1)
    mock()
    expect(mock).toHaveBeenCalledWith()
  })

  // jest/prefer-mock-return-shorthand: mockReturnValue を使う
  test('mock return', () => {
    const mock = jest.fn<() => number>().mockReturnValue(1)
    mock()
    expect(mock).toHaveBeenCalledWith()
  })

  // jest/prefer-jest-mocked: jest.mocked() を使う
  test('mocked', () => {
    const fn = jest.mocked((): number => 1)
    expect(fn).toBeDefined()
  })

  // jest/require-to-throw-message: toThrow にメッセージを渡す
  test('throws', () => {
    expect(() => {
      throw new Error('boom')
    }).toThrow('boom')
  })
})

// jest/require-hook: セットアップ処理はフックの中で行う
