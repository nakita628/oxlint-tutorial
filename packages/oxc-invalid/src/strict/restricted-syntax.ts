// 言語機能の使用を制限するルールの違反サンプル

// oxc/no-async-await: async / await の使用を禁止する設定にしている
export async function asyncFunction(): Promise<number> {
  return await Promise.resolve(1)
}

// oxc/no-optional-chaining: ?. の使用を禁止する設定にしている
export function optionalChaining(source?: { value: number }): number | undefined {
  return source?.value
}

// oxc/no-rest-spread-properties: オブジェクトのレスト / スプレッドを禁止する設定にしている
export function restSpread(source: Record<string, number>): Record<string, number> {
  const { first, ...rest } = source
  void first
  return { ...rest }
}
