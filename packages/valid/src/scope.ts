// scope.ts の適合版
// no-duplicate-imports: 同じモジュールからの import は 1 文にまとめる
// no-restricted-imports: 禁止されたモジュールは import しない
import { templates, uselessConcat } from './strings.ts'

export function shadowing(value: number): number {
  // no-shadow: 外側と衝突しない名前にする
  const localValue = value
  return localValue + uselessConcat().length
}

export function useOuter(name: string): string {
  return templates(name)
}

export function paramReassign(value: number): number {
  // no-param-reassign: 引数は書き換えずローカル変数に入れる
  const next = value + 1
  return next
}

// no-undef: 宣言済みのものだけを参照する（__APP_VERSION__ は globals で宣言済み）
export function declaredGlobal(): string {
  return __APP_VERSION__
}

// no-restricted-globals: 禁止されたグローバルは使わない
export function restrictedGlobal(target: EventTarget): EventTarget {
  return target
}

// no-restricted-exports: 禁止された名前では export しない
export const thenable = 1

// id-denylist: 禁止された識別子名は使わない
export function allowedNames(payload: number): number {
  return payload
}
