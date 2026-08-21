// modules.ts の適合版
// unicorn/import-style: node:path はデフォルト import で使う
import path from 'node:path'

// unicorn/prefer-export-from: import してすぐ export するなら export from で書く
export { reexported } from './reexported.ts'
export { namedDefault as defaultExport } from './default-export.ts'

export function separator(): string {
  return path.sep
}

// unicorn/require-module-attributes: import attributes は中身まで書く
// unicorn/require-module-specifiers: 取り出す名前を明示する
export async function loadJson(): Promise<unknown> {
  return await import('./data.json', { with: { type: 'json' } })
}
