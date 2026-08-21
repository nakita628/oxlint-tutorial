// マッチャーまわりの違反サンプル
// jest/prefer-importing-jest-globals: describe / test / expect は @jest/globals から import する

// jest/require-top-level-describe: テストは describe で包む
// jest/consistent-test-it: it ではなく test に統一する設定にしている
// jest/prefer-lowercase-title: タイトルは小文字で始める
it('Adds numbers', () => {
  // jest/prefer-to-be: toEqual ではなく toBe（プリミティブの比較）
  expect(1 + 1).toEqual(2)
  // jest/prefer-strict-equal: toEqual ではなく toStrictEqual
  expect({ a: 1 }).toEqual({ a: 1 })
  // jest/prefer-to-contain: includes() の結果ではなく toContain
  expect([1, 2].includes(1)).toBe(true)
  // jest/prefer-to-have-length: length の比較ではなく toHaveLength
  expect([1, 2].length).toBe(2)
  // jest/prefer-comparison-matcher: 比較結果ではなく toBeGreaterThan
  expect(2 > 1).toBe(true)
  // jest/prefer-equality-matcher: === の結果ではなく toBe
  expect(1 === 1).toBe(true)
})

it('Checks mocks', () => {
  // jest/no-alias-methods: toBeCalled ではなく toHaveBeenCalled
  expect(jest.fn()).not.toBeCalled()
  // jest/prefer-to-have-been-called: toHaveBeenCalledTimes(0) ではなく not.toHaveBeenCalled()
  expect(jest.fn()).toHaveBeenCalledTimes(0)
  // jest/prefer-to-have-been-called-times: mock.calls の長さではなく toHaveBeenCalledTimes
  expect(jest.fn().mock.calls).toHaveLength(0)
  // jest/no-restricted-matchers: 設定で禁止したマッチャー
  expect(1).toBeFalsy()
})
