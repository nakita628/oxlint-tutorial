// misc.test.ts の適合版
// jest/no-mocks-import: __mocks__ からは直接 import しない
import { describe, expect, jest, test } from '@jest/globals'

describe('misc', () => {
  // jest/no-jasmine-globals: jest の API だけを使う
  test('no jasmine', () => {
    expect(1).toBe(1)
  })

  // jest/valid-describe-callback: describe のコールバックは引数なし
  describe('valid callback', () => {
    test('inner', () => {
      expect(1).toBe(1)
    })
  })

  // jest/valid-expect: expect の引数はひとつ
  test('valid expect', () => {
    expect(1).toBe(1)
  })

  // jest/no-standalone-expect: expect はテストの中だけで使う
  // jest/no-interpolation-in-snapshots: スナップショットに補間を使わない
  test('snapshot', () => {
    expect('a').toMatchInlineSnapshot(`"a"`)
  })

  // jest/prefer-snapshot-hint: 複数のスナップショットにはヒントを付ける
  test('multiple snapshots', () => {
    expect('a').toMatchSnapshot('first')
    expect('b').toMatchSnapshot('second')
  })

  // jest/prefer-expect-resolves: await expect(...).resolves を使う
  // jest/no-unneeded-async-expect-function: Promise を直接渡す
  test('resolves', async () => {
    await expect(Promise.resolve(1)).resolves.toBe(1)
  })

  // jest/valid-expect-in-promise: Promise は await する
  test('expect in promise', async () => {
    await Promise.resolve(1).then((value) => {
      expect(value).toBe(1)
    })
  })

  // jest/no-deprecated-functions: 現行の API を使う
  test('not deprecated', () => {
    jest.createMockFromModule('./helpers.ts')
    expect(1).toBe(1)
  })

  // jest/no-restricted-jest-methods: 禁止された jest メソッドは使わない
  test('allowed method', () => {
    expect(1).toBe(1)
  })
})
