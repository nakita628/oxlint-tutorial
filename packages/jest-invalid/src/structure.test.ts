// テスト構造まわりの違反サンプル

describe('outer', () => {
  describe('level 2', () => {
    describe('level 3', () => {
      describe('level 4', () => {
        // jest/max-nested-describe: describe のネストが深すぎる
        test('works', () => {
          expect(1).toBe(1)
        })
      })
    })
  })

  // jest/no-identical-title: 同じタイトルのテストが 2 つある
  test('duplicated', () => {
    expect(1).toBe(1)
  })
  test('duplicated', () => {
    expect(2).toBe(2)
  })

  // jest/no-focused-tests: フォーカスしたテストを残さない
  test.only('focused', () => {
    expect(1).toBe(1)
  })

  // jest/no-disabled-tests: スキップしたテストを残さない
  test.skip('skipped', () => {
    expect(1).toBe(1)
  })

  // jest/no-test-prefixes: fit / xit ではなく test.only / test.skip
  fit('prefixed', () => {
    expect(1).toBe(1)
  })

  // jest/expect-expect: expect が 1 つも無い
  test('no assertions', () => {
    void 1
  })

  // jest/max-expects: expect が多すぎる（既定は 5 個まで）
  test('too many expects', () => {
    expect(1).toBe(1)
    expect(2).toBe(2)
    expect(3).toBe(3)
    expect(4).toBe(4)
    expect(5).toBe(5)
    expect(6).toBe(6)
  })

  // jest/no-conditional-in-test, jest/no-conditional-expect: テスト内で条件分岐しない
  test('conditional', () => {
    if (Date.now() > 0) {
      expect(1).toBe(1)
    }
  })

  // jest/no-test-return-statement: テストから値を返さない
  test('returns', () => {
    return expect(1).toBe(1)
  })

  // jest/valid-title: タイトルは空にしない
  test('', () => {
    expect(1).toBe(1)
  })

  // jest/prefer-todo: 空のテストは test.todo で表す
  test('todo later', () => {})

  // jest/no-commented-out-tests: コメントアウトされたテストを残さない
  // test('commented out', () => {})

  // jest/prefer-each: ループでテストを生成せず test.each を使う
  for (const value of [1, 2, 3]) {
    test(`case ${value}`, () => {
      expect(value).toBe(value)
    })
  }
})

// jest/no-export: テストファイルから export しない
export const exported = 1
