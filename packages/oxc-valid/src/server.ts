// server.ts の適合版
import express from 'express'

const router = express.Router()

// oxc/no-async-endpoint-handlers: ハンドラは同期にして、
// 非同期処理はサービス層で完結させてから渡す
const users: Array<string> = []

router.get('/users', (req, res) => {
  res.send(users)
})

export { router }
