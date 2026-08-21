// モジュールまわりの違反サンプル
import defaultExport from './default-export.ts'
import { reexported } from './reexported.ts'

// unicorn/prefer-export-from: import してすぐ export するなら export from で書く
export { reexported }

export const used = defaultExport

// unicorn/require-module-attributes: 空の import attributes は書かない
export async function loadJson(): Promise<unknown> {
  return await import('./data.json', { with: {} })
}

// unicorn/require-module-specifiers: 空の名前付き import は書かない
import {} from './reexported.ts'

// unicorn/import-style: node:path はデフォルト import で使うべきところを名前空間 import にしている
import * as pathNamespace from 'node:path'

export const separator = pathNamespace.sep
