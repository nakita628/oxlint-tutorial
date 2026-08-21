// node/no-top-level-await: トップレベル await を避け、関数の中で await する
export async function loadConfig(): Promise<{ retries: number }> {
  return await Promise.resolve({ retries: 3 })
}
