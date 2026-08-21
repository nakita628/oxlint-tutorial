// fs-and-env.ts の適合版
import fs from 'node:fs/promises'
import path from 'node:path'

export async function readAsync(): Promise<string> {
  // node/no-sync: 非同期 API を使う
  return await fs.readFile('package.json', 'utf8')
}

export function joinPath(): string {
  // node/no-path-concat: path.join() を使う
  return path.join(import.meta.dirname, 'config.json')
}

// node/no-process-env: 設定は 1 か所で受け取り、以降はこの値を使う
export function createConfig(nodeEnv: string): { nodeEnv: string } {
  return { nodeEnv }
}
