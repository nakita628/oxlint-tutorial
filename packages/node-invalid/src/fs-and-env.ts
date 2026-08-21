// ファイル操作・環境変数まわりの違反サンプル
import fs from 'node:fs'
import path from 'node:path'

export function readSync(): string {
  // node/no-sync: 同期 API はイベントループを止める
  return fs.readFileSync('package.json', 'utf8')
}

export function joinPath(): string {
  return path.join(import.meta.dirname, 'config.json')
}

export function processEnv(): string | undefined {
  // node/no-process-env: process.env を直接参照しない
  return process.env.NODE_ENV
}
