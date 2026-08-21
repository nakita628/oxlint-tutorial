// 言語機能の使用を制限するルールの適合版

// oxc/no-async-await: async / await を使わず Promise チェーンで書く
export function asyncFunction(): Promise<number> {
  return Promise.resolve(1)
}

// oxc/no-optional-chaining: ?. を使わず && で書く
export function optionalChaining(source?: { value: number }): number | undefined {
  return source && source.value
}

// oxc/no-rest-spread-properties: レスト / スプレッドを使わず Object.assign で書く
export function restSpread(source: Record<string, number>): Record<string, number> {
  const copy = Object.assign({}, source)
  delete copy.first
  return copy
}
