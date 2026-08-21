// サーバー実装まわりの違反サンプル
import express from 'express'

const router = express.Router()

// oxc/no-async-endpoint-handlers: async ハンドラが reject しても Express は捕捉できない
router.get('/users', async (req, res) => {
  res.send(await Promise.resolve([]))
})

export { router }
