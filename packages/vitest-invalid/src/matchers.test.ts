// マッチャーまわりの違反サンプル
// vitest/prefer-importing-vitest-globals: describe / test / expect は 'vitest' から import する
// vitest/no-import-node-test: node:test からは import しない
import { test as nodeTest } from 'node:test'

void nodeTest

// vitest/require-top-level-describe: トップレベルは describe で包む
describe('Matchers', () => {
  // vitest/prefer-lowercase-title: タイトルは小文字始まり
  // vitest/consistent-test-it: it ではなく test に統一する設定にしている
  it('Compares values', () => {
    // vitest/prefer-to-be: toEqual ではなく toBe
    expect(1 + 1).toEqual(2)
    // vitest/prefer-strict-equal: toEqual ではなく toStrictEqual
    expect({ a: 1 }).toEqual({ a: 1 })
    // vitest/prefer-to-contain: includes() の結果ではなく toContain
    expect([1, 2].includes(1)).toBe(true)
    // vitest/prefer-to-have-length: length の比較ではなく toHaveLength
    expect([1, 2].length).toBe(2)
    // vitest/prefer-comparison-matcher: 比較結果ではなく toBeGreaterThan
    expect(2 > 1).toBe(true)
    // vitest/prefer-equality-matcher: === の結果ではなく toBe
    expect(1 === 1).toBe(true)
  })

  it('Checks truthiness', () => {
    // vitest/prefer-to-be-truthy: toBe(true) ではなく toBeTruthy()
    expect(Boolean(1)).toBe(true)
    // vitest/prefer-to-be-falsy: toBe(false) ではなく toBeFalsy()
    expect(Boolean(0)).toBe(false)
    // vitest/prefer-to-be-object: toBeInstanceOf(Object) ではなく toBeObject()
    expectTypeOf({}).toBeInstanceOf(Object)
    // vitest/no-alias-methods: toBeCalled ではなく toHaveBeenCalled
    expect(vi.fn()).not.toBeCalled()
    // vitest/no-restricted-matchers: 設定で禁止したマッチャー
    expect(1).toBeDefined()
    // vitest/prefer-expect-type-of: 型の検証には expectTypeOf を使う
    expect(typeof 1).toBe('number')
  })
})
