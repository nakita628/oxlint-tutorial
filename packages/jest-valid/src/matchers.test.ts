// matchers.test.ts の適合版
// jest/prefer-importing-jest-globals: グローバルに頼らず @jest/globals から import する
import { describe, expect, jest, test } from '@jest/globals'

// jest/require-top-level-describe: トップレベルは describe で包む
describe('matchers', () => {
  // jest/consistent-test-it: test に統一
  // jest/prefer-lowercase-title: タイトルは小文字始まり
  test('adds numbers', () => {
    // jest/prefer-to-be: プリミティブの比較は toBe
    expect(1 + 1).toBe(2)
    // jest/prefer-strict-equal: オブジェクトの比較は toStrictEqual
    expect({ a: 1 }).toStrictEqual({ a: 1 })
    // jest/prefer-to-contain: 配列の包含は toContain
    expect([1, 2]).toContain(1)
    // jest/prefer-to-have-length: 長さは toHaveLength
    expect([1, 2]).toHaveLength(2)
    // jest/prefer-comparison-matcher: 大小比較は toBeGreaterThan
    expect(2).toBeGreaterThan(1)
  })

  // jest/max-expects: 1 テストあたりの expect は上限内に収める
  test('checks mocks', () => {
    const mock = jest.fn()
    mock(1)
    // jest/no-alias-methods, jest/prefer-to-have-been-called,
    // jest/prefer-to-have-been-called-times, jest/prefer-called-with:
    // 正式名のマッチャーを使い、引数まで検証する
    expect(mock).toHaveBeenCalledWith(1)
    // jest/no-restricted-matchers: 禁止されたマッチャーは使わない
    expect(1).toBe(1)
  })
})
