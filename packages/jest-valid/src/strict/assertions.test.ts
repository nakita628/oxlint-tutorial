// assertions.test.ts の適合版
import { describe, expect, test } from '@jest/globals'

// jest/no-hooks: フックを使わず、テスト内でセットアップする
describe('strict', () => {
  // jest/prefer-expect-assertions: expect.assertions() を宣言する
  // jest/prefer-ending-with-an-expect: テストは expect で終える
  test('declares assertion count', () => {
    expect.assertions(1)
    expect(1).toBe(1)
  })

  // jest/no-large-snapshots: スナップショットは小さく保つ
  test('small snapshot', () => {
    expect.assertions(1)
    expect('value').toMatchInlineSnapshot(`"value"`)
  })
})
