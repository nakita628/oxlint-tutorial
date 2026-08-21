// フック・モックまわりの違反サンプル

describe('hooks', () => {
  test('first', () => {
    expect(1).toBe(1)
  })

  // jest/prefer-hooks-on-top: フックはテストより前に置く
  // jest/prefer-hooks-in-order: beforeAll → beforeEach → afterEach → afterAll の順に書く
  afterEach(() => {
    void 0
  })
  beforeEach(() => {
    void 0
  })

  // jest/no-duplicate-hooks: 同じフックを複数回定義しない
  beforeEach(() => {
    void 0
  })

  // jest/no-done-callback: done コールバックではなく Promise を返す
  test('done callback', (done) => {
    done()
  })

  // jest/prefer-spy-on: プロパティへの直接代入ではなく jest.spyOn
  test('spy', () => {
    const target = { run: (): number => 1 }
    target.run = jest.fn()
    expect(target.run).toHaveBeenCalledWith()
  })

  // jest/prefer-mock-promise-shorthand: mockImplementation より mockResolvedValue
  test('mock promise', () => {
    const mock = jest.fn().mockImplementation(() => Promise.resolve(1))
    expect(mock).toHaveBeenCalledWith()
  })

  // jest/prefer-mock-return-shorthand: mockImplementation より mockReturnValue
  test('mock return', () => {
    const mock = jest.fn().mockImplementation(() => 1)
    expect(mock).toHaveBeenCalledWith()
  })

  // jest/prefer-jest-mocked: as jest.Mock ではなく jest.mocked()
  test('mocked', () => {
    const fn = (() => 1) as unknown as jest.Mock
    expect(fn).toBeDefined()
  })

  // jest/no-untyped-mock-factory: jest.mock のファクトリには型引数を付ける
  jest.mock('./helpers.ts', () => ({ helper: (): number => 1 }))

  // jest/require-to-throw-message: toThrow にはメッセージを渡す
  test('throws', () => {
    expect(() => {
      throw new Error('boom')
    }).toThrow()
  })

  // jest/prefer-called-with: toHaveBeenCalled より toHaveBeenCalledWith
  test('called with', () => {
    const mock = jest.fn()
    mock(1)
    expect(mock).toHaveBeenCalled()
  })

  // jest/no-confusing-set-timeout: jest.setTimeout はトップレベルで一度だけ呼ぶ
  jest.setTimeout(1000)

  // jest/padding-around-test-blocks: テストブロックの前後に空行を入れる
  test('padding', () => {
    expect(1).toBe(1)
  })
  // jest/padding-around-after-all-blocks: afterAll の前後に空行を入れる
  afterAll(() => {
    void 0
  })
})

// jest/require-hook: セットアップ処理はフックの中で行う
const globalSetup = Date.now()
void globalSetup
