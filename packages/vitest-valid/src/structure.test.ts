// structure.test.ts の適合版
// vitest/prefer-describe-function-title: import した関数名と同じ文字列をタイトルにしない
import { describe, expect, test } from 'vitest'

import { helper } from './helpers.ts'

describe('structure', () => {
  // vitest/max-nested-describe: ネストは上限内に収める
  describe('level 2', () => {
    describe('level 3', () => {
      test('works', () => {
        expect(helper()).toBe(1)
      })
    })
  })

  // vitest/no-identical-title: タイトルは重複させない
  test('first case', () => {
    expect(1).toBe(1)
  })

  test('second case', () => {
    expect(2).toBe(2)
  })

  // vitest/no-focused-tests, no-disabled-tests, no-test-prefixes:
  // only / skip / fit は残さない
  test('normal case', () => {
    expect(1).toBe(1)
  })

  // vitest/expect-expect: 必ず期待値を書く
  test('has assertions', () => {
    expect(1).toBe(1)
  })

  // vitest/max-expects: expect は上限内に収める
  test('few expects', () => {
    expect(1).toBe(1)
    expect(2).toBe(2)
  })

  // vitest/no-conditional-in-test, no-conditional-expect, no-conditional-tests:
  // 条件分岐を使わない
  test('no conditional', () => {
    expect(Date.now()).toBeGreaterThan(0)
  })

  // vitest/no-test-return-statement: 値を返さない
  test('no return', () => {
    expect(1).toBe(1)
  })

  // vitest/valid-title: タイトルを空にしない
  test('has title', () => {
    expect(1).toBe(1)
  })

  // vitest/warn-todo, vitest/no-commented-out-tests: todo もコメントアウトも残さない

  // vitest/consistent-each-for: test は .for を使う
  test.for([1, 2])('case %i', (value) => {
    expect(value).toBe(value)
  })

  // vitest/prefer-each: 手書きのループではなく .for でまとめる
  test.for([1, 2, 3])('loop %i', (value) => {
    expect(value).toBe(value)
  })
})
