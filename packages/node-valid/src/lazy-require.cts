// node/global-require: require はトップレベルで呼ぶ
const fs = require('node:fs')

export function loadConfig(callback: (error: Error | undefined, value?: string) => void): void {
  fs.readFile('config.json', 'utf8', callback)
}
