// functions.ts の適合版

type Params = { alpha: number; bravo: number; charlie: number; delta: number }

// max-params: 引数はオブジェクトにまとめて 1 個にする
export function fewParams({ alpha, bravo, charlie, delta }: Params): number {
  return alpha + bravo + charlie + delta
}

// no-empty-function: 空にせず、意味のある処理を書く
export function notEmptyFunction(values: readonly number[]): number {
  return values.length
}

export class UsefulCtor {
  public readonly value: number

  // no-useless-constructor: 実際に処理があるコンストラクタ
  public constructor(value: number) {
    this.value = value
  }
}

export function restParams(...args: readonly number[]): number {
  // prefer-rest-params: arguments ではなくレストパラメータ
  return args.length
}

export function spreadCall(values: readonly number[]): number {
  const pick = (...args: number[]): number => Math.max(...args)
  // prefer-spread: apply ではなくスプレッド構文
  return pick(...values)
}

export function callbackStyle(values: readonly number[]): number[] {
  // prefer-arrow-callback / func-names: アロー関数で書く
  return values.map((value) => value * 2)
}

export function newFunc(): number {
  // no-new-func: Function コンストラクタを使わず、そのまま書く
  return 1
}

export function usefulReturn(): number {
  // no-useless-return: 値を返す return だけを書く
  return 1
}

export function loopFunc(values: readonly number[]): Array<() => number> {
  // no-loop-func: ループ内で関数を作らず、map で組み立てる
  return values.map((value) => () => value)
}

// func-name-matching: 代入先の名前と関数名をそろえる
export const namedSame = function namedSame(): number {
  return 1
}

// default-param-last: 既定値付き引数は最後に置く
export function defaultParamLast(suffix: string, prefix = 'a'): string {
  return prefix + suffix
}

// no-inner-declarations: 関数はブロックの外で宣言する
const innerHelper = (): number => 1

export function innerDeclaration(flag: boolean): number {
  if (flag) {
    return innerHelper()
  }
  return 0
}

// arrow-body-style: 式のまま返す
export const arrowBody = (value: number): number => value * 2

// no-useless-call: そのまま呼ぶ
export function usefulCall(): number {
  const compute = (value: number): number => value
  return compute(1)
}

// no-extra-bind: this を使わないなら bind しない
export function noExtraBind(): () => number {
  return (): number => 1
}

export class Accessors {
  private stored = ''

  // class-methods-use-this: this を使うメソッドにする
  public compute(value: number): number {
    return value * this.stored.length
  }

  // no-constructor-return: コンストラクタからは値を返さない
  public constructor(stored: string) {
    this.stored = stored
  }

  // grouped-accessor-pairs / accessor-pairs: getter と setter を隣接させる
  public get label(): string {
    return this.stored
  }

  public set label(value: string) {
    this.stored = value
  }

  public other(): number {
    return this.stored.length
  }
}

// accessor-pairs: setter を書くなら getter も書く
export const accessorPair = {
  stored: 0,
  get value(): number {
    return this.stored
  },
  set value(next: number) {
    this.stored = next
  },
}

// require-yield: ジェネレータでは yield する
export function* withYield(): Generator<number> {
  yield 1
}
