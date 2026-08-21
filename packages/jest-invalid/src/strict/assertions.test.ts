// 追加で厳しくするルールの違反サンプル

// jest/no-hooks: このディレクトリではフックの使用を禁止している
beforeEach(() => {
  void 0
})

describe('strict', () => {
  // jest/prefer-expect-assertions: expect.assertions() を先頭で宣言する
  // jest/prefer-ending-with-an-expect: テストは expect で終える
  test('no assertion count', () => {
    expect(1).toBe(1)
    void 2
  })

  // jest/no-large-snapshots: 大きすぎるスナップショットを残さない
  test('large snapshot', () => {
    expect('value').toMatchInlineSnapshot(`
      "line01
      line02
      line03
      line04
      line05
      line06
      line07
      line08
      line09
      line10
      line11
      line12"
    `)
  })
})
