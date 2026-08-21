// フック・モックまわりの違反サンプル

describe('hooks', () => {
  test('first', () => {
    expect(1).toBe(1)
  })

  // vitest/prefer-hooks-on-top: フックはテストより前に置く
  // vitest/prefer-hooks-in-order: beforeEach → afterEach → afterAll の順に書く
  afterEach(() => {
    void 0
  })
  beforeEach(() => {
    void 0
  })

  // vitest/no-duplicate-hooks: 同じフックを複数回定義しない
  beforeEach(() => {
    void 0
  })

  // vitest/prefer-spy-on: プロパティへの直接代入ではなく vi.spyOn
  test('spy', () => {
    const target = { run: (): number => 1 }
    target.run = vi.fn()
    expect(target.run).toHaveBeenCalledWith()
  })

  // vitest/prefer-mock-promise-shorthand: mockImplementation より mockResolvedValue
  // vitest/require-mock-type-parameters: vi.fn() には型引数を付ける
  test('mock promise', () => {
    const mock = vi.fn().mockImplementation(() => Promise.resolve(1))
    expect(mock).toHaveBeenCalledWith()
  })

  // vitest/prefer-mock-return-shorthand: mockImplementation より mockReturnValue
  test('mock return', () => {
    const mock = vi.fn().mockImplementation(() => 1)
    expect(mock).toHaveBeenCalledWith()
  })

  // vitest/require-to-throw-message: toThrow にはメッセージを渡す
  test('throws', () => {
    expect(() => {
      throw new Error('boom')
    }).toThrow()
  })

  // vitest/prefer-called-with: toHaveBeenCalled より toHaveBeenCalledWith
  test('called with', () => {
    const mock = vi.fn()
    mock(1)
    expect(mock).toHaveBeenCalled()
  })

  // vitest/prefer-called-times: toHaveBeenCalledOnce() ではなく toHaveBeenCalledTimes(1)
  test('called once', () => {
    const mock = vi.fn()
    mock()
    expect(mock).toHaveBeenCalledOnce()
  })

  // vitest/prefer-called-exactly-once-with: 回数と引数は 1 つのマッチャーでまとめて検証する
  test('called exactly once with', () => {
    const mock = vi.fn()
    mock(1)
    expect(mock).toHaveBeenCalledOnce()
    expect(mock).toHaveBeenCalledWith(1)
  })

  // vitest/prefer-to-have-been-called-times: mock.calls の長さではなく専用マッチャー
  test('calls length', () => {
    const mock = vi.fn()
    mock()
    expect(mock.mock.calls).toHaveLength(1)
  })
  // vitest/padding-around-test-blocks: テストブロックの前後に空行を入れる
  test('padding', () => {
    expect(1).toBe(1)
  })
  // vitest/padding-around-after-all-blocks: afterAll の前後に空行を入れる
  afterAll(() => {
    void 0
  })
})

// vitest/require-hook: セットアップ処理はフックの中で行う
const globalSetup = Date.now()
void globalSetup
