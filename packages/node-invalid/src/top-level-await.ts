// node/no-top-level-await: トップレベル await はモジュールの評価を遅らせる
const config = await Promise.resolve({ retries: 3 })

export { config }
