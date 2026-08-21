// structure.test.ts の適合版
import { describe, expect, test } from '@jest/globals'

describe('structure', () => {
  // jest/max-nested-describe: ネストは上限内に収める
  describe('level 2', () => {
    describe('level 3', () => {
      test('works', () => {
        expect(1).toBe(1)
      })
    })
  })

  // jest/no-identical-title: タイトルは重複させない
  test('first case', () => {
    expect(1).toBe(1)
  })

  test('second case', () => {
    expect(2).toBe(2)
  })

  // jest/no-focused-tests, jest/no-disabled-tests, jest/no-test-prefixes:
  // only / skip / fit は残さない
  test('normal case', () => {
    expect(1).toBe(1)
  })

  // jest/expect-expect: 必ず期待値を書く
  test('has assertions', () => {
    expect(1).toBe(1)
  })

  // jest/max-expects: expect は上限内に収める
  test('few expects', () => {
    expect(1).toBe(1)
    expect(2).toBe(2)
  })

  // jest/no-conditional-in-test, jest/no-conditional-expect: 条件分岐を使わない
  test('no conditional', () => {
    expect(Date.now()).toBeGreaterThan(0)
  })

  // jest/no-test-return-statement: 値を返さない
  test('no return', () => {
    expect(1).toBe(1)
  })

  // jest/valid-title: タイトルを空にしない
  test('has title', () => {
    expect(1).toBe(1)
  })

  // jest/prefer-todo: 未実装のテストは test.todo で表す
  test.todo('todo later')

  // jest/no-commented-out-tests: コメントアウトしたテストは残さない

  // jest/prefer-each: 繰り返しは test.each でまとめる
  test.each([1, 2, 3])('case %i', (value) => {
    expect(value).toBe(value)
  })
})

// jest/no-export: テストファイルからは export しない
