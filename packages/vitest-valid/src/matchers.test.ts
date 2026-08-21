// matchers.test.ts の適合版
// vitest/prefer-importing-vitest-globals: 'vitest' から import する
// vitest/no-import-node-test: node:test は使わない
import { describe, expect, expectTypeOf, test, vi } from 'vitest'

// vitest/require-top-level-describe: トップレベルは describe で包む
describe('matchers', () => {
  // vitest/consistent-test-it: test に統一
  // vitest/prefer-lowercase-title: タイトルは小文字始まり
  test('compares values', () => {
    // vitest/prefer-to-be: プリミティブの比較は toBe
    expect(1 + 1).toBe(2)
    // vitest/prefer-strict-equal: オブジェクトの比較は toStrictEqual
    expect({ a: 1 }).toStrictEqual({ a: 1 })
    // vitest/prefer-to-contain: 配列の包含は toContain
    expect([1, 2]).toContain(1)
    // vitest/prefer-to-have-length: 長さは toHaveLength
    expect([1, 2]).toHaveLength(2)
    // vitest/prefer-comparison-matcher: 大小比較は toBeGreaterThan
    expect(2).toBeGreaterThan(1)
  })

  test('checks truthiness', () => {
    // vitest/prefer-to-be-truthy / prefer-to-be-falsy
    expect(Boolean(1)).toBeTruthy()
    expect(Boolean(0)).toBeFalsy()
    // vitest/prefer-to-be-object: toBeObject() を使う
    expectTypeOf({}).toBeObject()
    // vitest/no-alias-methods: 正式名のマッチャーを使う
    expect(vi.fn<() => void>()).not.toHaveBeenCalled()
    // vitest/prefer-expect-type-of: 型の検証は expectTypeOf で行う
    expectTypeOf(1).toBeNumber()
  })
})
