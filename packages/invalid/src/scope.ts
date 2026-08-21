// スコープ・モジュールまわりの違反サンプル
import { templates } from './strings.ts'
// no-duplicate-imports: 同じモジュールを複数回 import している
import { uselessConcat } from './strings.ts'
// no-restricted-imports: 設定で禁止したモジュールを import している
import 'node:sys'

export function shadowing(value: number): number {
  // no-shadow: 外側と同じ名前を再宣言している
  const templates = value
  return templates + uselessConcat().length
}

export function useOuter(name: string): string {
  return templates(name)
}

export function paramReassign(value: number): number {
  // no-param-reassign: 引数への再代入
  value = value + 1
  return value
}

// no-undef: 宣言されていない変数を参照している
export function undefinedGlobal(): unknown {
  return notDeclaredAnywhere
}

// no-restricted-globals: 設定で禁止したグローバルを参照している
export function restrictedGlobal(): unknown {
  return event
}

// no-restricted-exports: 設定で禁止した名前で export している
export const then = 1

// id-denylist: 設定で禁止した識別子名を使っている
export function denylisted(data: number): number {
  return data
}
