// mocking.test.ts の適合版
// vitest/hoisted-apis-on-top: vi.mock はトップレベルに置く
// vitest/prefer-import-in-mock: モジュール指定は import() で書く
// vitest/no-mocks-import: __mocks__ からは直接 import しない
import { describe, expect, test, vi } from 'vitest'

vi.mock(import('./helpers.ts'), async () => {
  const helpers = await import('./helpers.ts')
  return helpers
})

describe('mocking', () => {
  // vitest/consistent-vitest-vi: vi.* に統一
  test('uses vi', () => {
    const mock = vi.fn<() => void>()
    mock()
    expect(mock).toHaveBeenCalledExactlyOnceWith()
  })

  // vitest/no-standalone-expect: expect はテストの中だけで使う
  // vitest/no-interpolation-in-snapshots: 補間を使わない
  // vitest/prefer-snapshot-hint: 複数のスナップショットにはヒントを付ける
  test('snapshot', () => {
    expect('a').toMatchInlineSnapshot(`"a"`)
  })

  test('multiple snapshots', () => {
    expect('a').toMatchSnapshot('first')
    expect('b').toMatchSnapshot('second')
  })

  // vitest/prefer-expect-resolves, vitest/no-unneeded-async-expect-function:
  // Promise を直接渡して await する
  test('resolves', async () => {
    await expect(Promise.resolve(1)).resolves.toBe(1)
  })

  // vitest/require-local-test-context-for-concurrent-snapshots:
  // concurrent ではテストコンテキストの expect を使う
  test.concurrent('concurrent snapshot', async ({ expect }) => {
    expect('a').toMatchInlineSnapshot(`"a"`)
  })

  // vitest/require-awaited-expect-poll: expect.poll は await する
  test('expect poll', async () => {
    await expect.poll(() => 1).toBe(1)
  })

  // vitest/valid-describe-callback: describe のコールバックは引数なし
  describe('valid callback', () => {
    test('inner', () => {
      expect(1).toBe(1)
    })
  })

  // vitest/valid-expect: expect の引数はひとつ
  test('valid expect', () => {
    expect(1).toBe(1)
  })

  // vitest/valid-expect-in-promise: Promise は await する
  test('expect in promise', async () => {
    await Promise.resolve(1).then((value) => {
      expect(value).toBe(1)
    })
  })

  // vitest/no-restricted-vi-methods: 禁止された vi メソッドは使わない
  test('allowed vi method', () => {
    expect(1).toBe(1)
  })
})

// vitest/consistent-test-filename: ファイル名は *.test.ts にそろえる
