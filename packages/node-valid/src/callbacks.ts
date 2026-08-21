// callbacks.ts の適合版

type Callback = (error: Error | undefined, value?: string) => void

export function callbackReturn(value: string | undefined, callback: Callback): void {
  // node/callback-return: コールバック呼び出しに return を付ける
  if (value === undefined) {
    return callback(new Error('missing'))
  }
  return callback(undefined, value)
}

export function handleCallbackErr(
  read: (callback: (err: Error | undefined, value: string) => void) => void,
): void {
  // node/handle-callback-err: err を必ず処理する
  read((err, value) => {
    if (err) {
      throw err
    }
    void value
  })
}
