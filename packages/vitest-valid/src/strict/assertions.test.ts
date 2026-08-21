// assertions.test.ts の適合版
import { describe, expect, test } from 'vitest'

// vitest/no-hooks: フックを使わず、テスト内でセットアップする
describe('strict', () => {
  // vitest/prefer-expect-assertions: expect.assertions() を宣言する
  // vitest/require-test-timeout: タイムアウトを明示する
  test('declares assertion count', () => {
    expect.assertions(1)
    expect(1).toBe(1)
  }, 1000)

  // vitest/no-large-snapshots: スナップショットは小さく保つ
  test('small snapshot', () => {
    expect.assertions(1)
    expect('value').toMatchInlineSnapshot(`"value"`)
  }, 1000)
})
