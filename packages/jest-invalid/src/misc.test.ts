// その他の違反サンプル
// jest/no-mocks-import: __mocks__ を直接 import しない
import { readFile } from '../__mocks__/fs.ts'

void readFile

describe('misc', () => {
  // jest/no-jasmine-globals: jasmine のグローバルを使わない
  test('jasmine', () => {
    jasmine.clock().install()
    expect(1).toBe(1)
  })

  // jest/valid-describe-callback: describe のコールバックに引数は渡せない
  describe('invalid callback', (done) => {
    void done
  })

  // jest/valid-expect: expect には 1 つの引数を渡す
  test('invalid expect', () => {
    expect(1, 2).toBe(1)
  })

  // jest/no-standalone-expect: describe 直下の expect は実行されない
  expect(1).toBe(1)

  // jest/no-interpolation-in-snapshots: スナップショットにテンプレート補間を使わない
  test('snapshot', () => {
    expect('a').toMatchInlineSnapshot(`${'a'}`)
  })

  // jest/prefer-snapshot-hint: 1 テストに複数のスナップショットがあるならヒントを付ける
  test('multiple snapshots', () => {
    expect('a').toMatchSnapshot()
    expect('b').toMatchSnapshot()
  })

  // jest/prefer-expect-resolves: expect(await x) ではなく await expect(x).resolves
  test('resolves', async () => {
    expect(await Promise.resolve(1)).toBe(1)
  })

  // jest/no-unneeded-async-expect-function: Promise をそのまま渡せばよい
  test('unneeded async', async () => {
    await expect(async () => await Promise.resolve(1)).resolves.toBe(1)
  })

  // jest/valid-expect-in-promise: then の中の expect は await しないと実行されない
  test('expect in promise', () => {
    Promise.resolve(1).then((value) => {
      expect(value).toBe(1)
    })
  })

  // jest/no-deprecated-functions: 非推奨の API を使わない
  test('deprecated', () => {
    jest.genMockFromModule('./helpers.ts')
    expect(1).toBe(1)
  })

  // jest/no-restricted-jest-methods: 設定で禁止した jest メソッド
  test('restricted method', () => {
    jest.useFakeTimers()
    expect(1).toBe(1)
  })
})
