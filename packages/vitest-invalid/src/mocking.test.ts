// モック・並行実行まわりの違反サンプル
// vitest/no-mocks-import: __mocks__ を直接 import しない
import { readFile } from '../__mocks__/fs.ts'

void readFile

describe('mocking', () => {
  test('uses vi', () => {
    // vitest/consistent-vitest-vi: vitest.* ではなく vi.* に統一する設定にしている
    const mock = vitest.fn()
    expect(mock).toHaveBeenCalledWith()
  })

  // vitest/no-standalone-expect: describe 直下の expect は実行されない
  expect(1).toBe(1)

  // vitest/no-interpolation-in-snapshots: スナップショットにテンプレート補間を使わない
  test('snapshot', () => {
    expect('a').toMatchInlineSnapshot(`${'a'}`)
  })

  // vitest/prefer-snapshot-hint: 複数のスナップショットにはヒントを付ける
  test('multiple snapshots', () => {
    expect('a').toMatchSnapshot()
    expect('b').toMatchSnapshot()
  })

  // vitest/prefer-expect-resolves: expect(await x) ではなく await expect(x).resolves
  test('resolves', async () => {
    expect(await Promise.resolve(1)).toBe(1)
  })

  // vitest/no-unneeded-async-expect-function: Promise をそのまま渡せばよい
  test('unneeded async', async () => {
    await expect(async () => await Promise.resolve(1)).resolves.toBe(1)
  })

  // vitest/require-local-test-context-for-concurrent-snapshots:
  // concurrent なテストではローカルの expect を使う
  test.concurrent('concurrent snapshot', async () => {
    expect('a').toMatchInlineSnapshot(`"a"`)
  })

  // vitest/require-awaited-expect-poll: expect.poll は await する
  test('expect poll', () => {
    expect.poll(() => 1).toBe(1)
  })

  // vitest/valid-describe-callback: describe のコールバックに引数は渡せない
  describe('invalid callback', (done) => {
    void done
  })

  // vitest/valid-expect: expect には 1 つの引数を渡す
  test('invalid expect', () => {
    expect(1, 2).toBe(1)
  })

  // vitest/valid-expect-in-promise: then の中の expect は await しないと実行されない
  test('expect in promise', () => {
    Promise.resolve(1).then((value) => {
      expect(value).toBe(1)
    })
  })

  // vitest/no-restricted-vi-methods: 設定で禁止した vi メソッド
  test('restricted vi method', () => {
    vi.useFakeTimers()
    expect(1).toBe(1)
  })
})

// vitest/hoisted-apis-on-top: vi.mock は条件分岐やテストの中に書かない
if (Date.now() > 0) {
  // vitest/prefer-import-in-mock: ファクトリ内では require ではなく import を使う
  vi.mock('./helpers.ts', () => {
    const helpers = require('./helpers.ts')
    return helpers
  })
}
