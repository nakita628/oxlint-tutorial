// コールバックまわりの違反サンプル

type Callback = (error: Error | undefined, value?: string) => void

export function callbackReturn(value: string | undefined, callback: Callback): void {
  // node/callback-return: コールバック呼び出しの前に return を付ける
  if (value === undefined) {
    callback(new Error('missing'))
  }
  callback(undefined, value)
}

export function handleCallbackErr(
  read: (callback: (err: Error | undefined, value: string) => void) => void,
): void {
  // node/handle-callback-err: err を受け取っているのに何も処理していない
  read((err, value) => {
    void value
  })
}
