// preserve-caught-error: cause で元のエラーを残す
export function parseJson(text: string): unknown {
  try {
    return JSON.parse(text)
  } catch (error) {
    throw new Error('parse failed', { cause: error })
  }
}
