// テスト構造まわりの違反サンプル
// vitest/prefer-describe-function-title: import した関数名を文字列で書かない
import { helper } from './helpers.ts'

describe('helper', () => {
  describe('level 2', () => {
    describe('level 3', () => {
      describe('level 4', () => {
        // vitest/max-nested-describe: describe のネストが深すぎる
        test('works', () => {
          expect(helper()).toBe(1)
        })
      })
    })
  })

  // vitest/no-identical-title: 同じタイトルのテストが 2 つある
  test('duplicated', () => {
    expect(1).toBe(1)
  })
  test('duplicated', () => {
    expect(1).toBe(1)
  })

  // vitest/no-focused-tests: only を残さない
  test.only('focused', () => {
    expect(1).toBe(1)
  })

  // vitest/no-disabled-tests: skip を残さない
  test.skip('skipped', () => {
    expect(1).toBe(1)
  })

  // vitest/no-test-prefixes: fit / xit ではなく test.only / test.skip
  fit('prefixed', () => {
    expect(1).toBe(1)
  })

  // vitest/expect-expect: expect が 1 つも無い
  test('no assertions', () => {
    void 1
  })

  // vitest/max-expects: expect が多すぎる（既定は 5 個まで）
  test('too many expects', () => {
    expect(1).toBe(1)
    expect(2).toBe(2)
    expect(3).toBe(3)
    expect(4).toBe(4)
    expect(5).toBe(5)
    expect(6).toBe(6)
  })

  // vitest/no-conditional-in-test, vitest/no-conditional-expect: 条件分岐を使わない
  test('conditional', () => {
    if (Date.now() > 0) {
      expect(1).toBe(1)
    }
  })

  // vitest/no-conditional-tests: テストの定義自体を条件分岐で切り替えない
  if (Date.now() > 0) {
    test('conditionally defined', () => {
      expect(1).toBe(1)
    })
  }

  // vitest/no-test-return-statement: テストから値を返さない
  test('returns', () => {
    return expect(1).toBe(1)
  })

  // vitest/valid-title: タイトルは空にしない
  test('', () => {
    expect(1).toBe(1)
  })

  // vitest/warn-todo: todo を残さない
  test.todo('todo later')

  // vitest/no-commented-out-tests: コメントアウトされたテストを残さない
  // test('commented out', () => {})

  // vitest/consistent-each-for: each ではなく for に統一する設定にしている
  test.each([1, 2])('case %i', (value) => {
    expect(value).toBe(value)
  })

  // vitest/prefer-each: ループでテストを生成せず each / for を使う
  for (const value of [1, 2, 3]) {
    test(`loop ${value}`, () => {
      expect(value).toBe(value)
    })
  }
})
