// オブジェクト・クラスまわりの違反サンプル
import { EventEmitter } from 'node:events'

// unicorn/no-static-only-class: static メンバーだけのクラスは不要
export class StaticOnly {
  static run(): number {
    return 1
  }
}

export class ThisAssignment {
  public value = 1

  public run(): number {
    // unicorn/no-this-assignment: this を変数に代入しない
    const self = this
    return self.value
  }
}

// unicorn/prefer-event-target: EventEmitter ではなく EventTarget を使う
export class Emitter extends EventEmitter {}

// unicorn/prefer-class-fields: コンストラクタでの定数代入はクラスフィールドで書ける
export class Constants {
  public label: string

  public constructor() {
    this.label = 'constant'
  }
}

// unicorn/no-accessor-recursion: getter が自分自身を参照している
export const recursive = {
  get value(): number {
    return this.value
  },
}

// unicorn/custom-error-definition: 独自エラーは name を正しく設定する
export class CustomError extends Error {
  public constructor(message: string) {
    super(message)
    this.name = 'WrongName'
  }
}

// unicorn/no-useless-error-capture-stack-trace: Error 継承時の captureStackTrace は不要
export class TracedError extends Error {
  public constructor(message: string) {
    super(message)
    Error.captureStackTrace(this, TracedError)
  }
}

export function fromEntries(pairs: Array<[string, number]>): Record<string, number> {
  // unicorn/prefer-object-from-entries: reduce での組み立てではなく Object.fromEntries()
  return pairs.reduce(
    (accumulator, [key, value]) => ({ ...accumulator, [key]: value }),
    {} as Record<string, number>,
  )
}

export function prototypeMethods(value: object): string {
  // unicorn/prefer-prototype-methods: {}.toString ではなく Object.prototype.toString
  return {}.toString.call(value)
}

declare function sum(...args: Array<number>): number

export function reflectApply(): number {
  // unicorn/prefer-reflect-apply: fn.apply() ではなく Reflect.apply()
  return sum.apply(null, [1, 2])
}

export function uselessSpread(): Array<number> {
  // unicorn/no-useless-spread: 配列リテラルへのスプレッドは不要
  return [...[1, 2, 3]]
}

export function uselessFallback(base: Record<string, number> | null): Record<string, number> {
  // unicorn/no-useless-fallback-in-spread: スプレッド内の `|| {}` は不要
  return { ...(base || {}) }
}

export function objectAsDefault(options = { retries: 3 }): number {
  // unicorn/no-object-as-default-parameter: オブジェクトを既定値にしない
  return options.retries
}

export function structuredCloneValue(value: Record<string, number>): Record<string, number> {
  // unicorn/prefer-structured-clone: JSON の往復ではなく structuredClone()
  return JSON.parse(JSON.stringify(value)) as Record<string, number>
}

export function nullValue(): null {
  // unicorn/no-null: null ではなく undefined を使う
  return null
}

export function uselessUndefined(): undefined {
  // unicorn/no-useless-undefined: 明示的な undefined の return は不要
  return undefined
}

// unicorn/empty-brace-spaces: 空ブロックの中に空白を入れない
export function emptyBraces(): void {
  if (Date.now() < 0) {
  }
}

// unicorn/consistent-function-scoping: 外側の変数を使わない関数は外に出す
export function outerScope(values: Array<number>): Array<number> {
  const double = (value: number): number => value * 2
  return values.map((value) => double(value))
}

// unicorn/max-nested-calls: 呼び出しのネストが深い
export function nestedCalls(value: number): number {
  return Math.abs(Math.max(Math.min(Math.trunc(value), 1), 0))
}

// unicorn/prefer-default-parameters: 既定値は引数側で書く
export function defaultParameters(value?: number): number {
  const resolved = value ?? 1
  return resolved
}

// unicorn/no-unreadable-iife: 本体が式のままの即時実行関数は読みにくい
export const iife = ((value: number) => (value > 0 ? value : 0))(1)
