// node/global-require: require はトップレベルで呼ぶ
export function loadConfig(): unknown {
  const fs = require('node:fs')
  return fs.readFileSync('config.json', 'utf8')
}
