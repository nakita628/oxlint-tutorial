// 追加で厳しくするルールの違反サンプル

// vitest/no-hooks: このディレクトリではフックの使用を禁止している
beforeEach(() => {
  void 0
})

describe('strict', () => {
  // vitest/prefer-expect-assertions: expect.assertions() を先頭で宣言する
  // vitest/require-test-timeout: テストにはタイムアウトを明示する
  test('no assertion count', () => {
    expect(1).toBe(1)
  })

  // vitest/no-large-snapshots: 大きすぎるスナップショットを残さない
  test('large snapshot', () => {
    expect('value').toMatchInlineSnapshot(`
      "line01
      line02
      line03
      line04
      line05
      line06
      line07
      line08"
    `)
  })
})
