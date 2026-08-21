// globals.test.ts の適合版
// vitest/no-importing-vitest-globals: このグループではグローバルをそのまま使う

describe('alt', () => {
  test('boolean matchers', () => {
    // vitest/prefer-strict-boolean-matchers: toBe(true) / toBe(false) を使う
    expect(Boolean(1)).toBe(true)
  })

  // vitest/prefer-called-once: toHaveBeenCalledOnce() を使う
  test('called once', () => {
    const mock = vi.fn<() => void>()
    mock()
    expect(mock).toHaveBeenCalledOnce()
  })

  // vitest/prefer-todo: 空のテストは test.todo で表す
  test.todo('todo later')
})
