// objects-and-classes.ts の適合版

// unicorn/no-static-only-class: クラスにせず関数として公開する
export function run(): number {
  return 1
}

export class ThisAssignment {
  public value = 1

  public read(): number {
    // unicorn/no-this-assignment: this をそのまま使う
    return this.value
  }
}

// unicorn/prefer-event-target: EventTarget を継承する
export class Emitter extends EventTarget {}

// unicorn/prefer-class-fields: クラスフィールドで初期化する
export class Constants {
  public label = 'constant'
}

// unicorn/no-accessor-recursion: 別のフィールドを参照する
export const notRecursive = {
  stored: 1,
  get value(): number {
    return this.stored
  },
}

// unicorn/custom-error-definition: name は自分のクラス名にそろえる
export class CustomError extends Error {
  public constructor(message: string) {
    super(message)
    this.name = 'CustomError'
  }
}

// unicorn/no-useless-error-capture-stack-trace: captureStackTrace は書かない
export class TracedError extends Error {
  public constructor(message: string) {
    super(message)
    this.name = 'TracedError'
  }
}

export function fromEntries(pairs: Array<[string, number]>): Record<string, number> {
  // unicorn/prefer-object-from-entries: Object.fromEntries() を使う
  return Object.fromEntries(pairs)
}

export function prototypeMethods(value: object): string {
  // unicorn/prefer-prototype-methods: Object.prototype 経由で呼ぶ
  return Object.prototype.toString.call(value)
}

declare function sum(...args: Array<number>): number

export function reflectApply(): number {
  // unicorn/prefer-reflect-apply: Reflect.apply() を使う
  return Reflect.apply(sum, undefined, [1, 2])
}

export function uselessSpread(): Array<number> {
  // unicorn/no-useless-spread: そのまま配列リテラルを書く
  return [1, 2, 3]
}

export function uselessFallback(base: Record<string, number> | undefined): Record<string, number> {
  // unicorn/no-useless-fallback-in-spread: undefined のスプレッドは無害なのでそのまま書く
  return { ...base }
}

export function objectAsDefault(retries = 3): number {
  // unicorn/no-object-as-default-parameter: プリミティブを既定値にする
  return retries
}

export function structuredCloneValue(value: Record<string, number>): Record<string, number> {
  // unicorn/prefer-structured-clone: structuredClone() を使う
  return structuredClone(value)
}

export function nullValue(): undefined {
  // unicorn/no-null: null ではなく undefined を使う
  return undefined
}

export function uselessUndefined(): void {
  // unicorn/no-useless-undefined: 明示的な undefined を書かない
}

// unicorn/empty-brace-spaces: 空ブロックは作らない
export function emptyBraces(): boolean {
  return Date.now() > 0
}

// unicorn/consistent-function-scoping: 外側の変数を使わない関数はモジュール直下に置く
const double = (value: number): number => value * 2

export function outerScope(values: Array<number>): Array<number> {
  return values.map((value) => double(value))
}

// unicorn/max-nested-calls: 呼び出しのネストを浅くする
export function nestedCalls(value: number): number {
  const truncated = Math.trunc(value)
  const clamped = Math.min(truncated, 1)
  return Math.abs(Math.max(clamped, 0))
}

// unicorn/prefer-default-parameters: 既定値は引数側で書く
export function defaultParameters(value = 1): number {
  return value
}

// unicorn/no-unreadable-iife: 即時実行関数の本体はブロックで書く
export const iife = ((value: number): number => {
  return Math.max(value, 0)
})(1)
