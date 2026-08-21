// 関数まわりの違反サンプル

// max-params: 引数が多すぎる（この設定では 3 個まで）
export function tooManyParams(a: number, b: number, c: number, d: number): number {
  return a + b + c + d
}

// no-empty-function: 空関数を禁止
export function emptyFunction(): void {}

export class UselessCtor {
  // no-useless-constructor: 何もしないコンストラクタ
  constructor() {}
}

export function restParams(): number {
  // prefer-rest-params: arguments ではなくレストパラメータを使う
  // oxlint-disable-next-line eslint/prefer-spread
  return Array.prototype.slice.call(arguments).length
}

export function spreadCall(values: readonly number[]): number {
  const pick = (...args: number[]): number => Math.max(...args)
  // prefer-spread: apply ではなくスプレッド構文を使う
  return pick.apply(null, values as number[])
}

export function callbackStyle(values: readonly number[]): number[] {
  // prefer-arrow-callback / func-names: コールバックは名前付きアロー関数で書く
  return values.map(function (value) {
    return value * 2
  })
}

export function newFunc(): unknown {
  // no-new-func: Function コンストラクタは eval 相当
  return new Function('return 1')
}

export function uselessReturn(): void {
  const value = 1
  void value
  // no-useless-return: 末尾の意味のない return
  return
}

export function loopFunc(values: readonly number[]): Array<() => number> {
  const result: Array<() => number> = []
  let index = 0
  while (index < values.length) {
    // no-loop-func: ループ内から、ループ外の可変変数を参照する関数を作っている
    result.push(() => values[index])
    index += 1
  }
  return result
}

// func-name-matching: 代入先の名前と関数名が食い違っている
export const namedDifferently = function otherName(): number {
  return 1
}

// default-param-last: 既定値付き引数は最後に置く
export function defaultParamFirst(prefix = 'a', suffix: string): string {
  return prefix + suffix
}

// no-inner-declarations: ブロックの中で関数を宣言している
export function innerDeclaration(flag: boolean): number {
  if (flag) {
    function inner(): number {
      return 1
    }
    return inner()
  }
  return 0
}

// arrow-body-style: 値を返すだけのブロックは不要
export const arrowBody = (value: number): number => {
  return value * 2
}

// no-useless-call: call / apply を使う必要がない
export function uselessCall(): number {
  const compute = (value: number): number => value
  return compute.call(undefined, 1)
}

// no-extra-bind: this を使わない関数への bind は不要
export function extraBind(): () => number {
  return function (): number {
    return 1
  }.bind(null)
}

export class Accessors {
  private stored = ''

  // class-methods-use-this: this を使わないメソッドは static にできる
  public compute(value: number): number {
    return value * 2
  }

  // no-constructor-return: コンストラクタから値を返さない
  public constructor() {
    return { replaced: true } as unknown as Accessors
  }

  // grouped-accessor-pairs: 同じ名前の getter と setter が離れて書かれている
  public get label(): string {
    return this.stored
  }

  public other(): number {
    return 1
  }

  public set label(value: string) {
    this.stored = value
  }

  // no-setter-return: setter から値を返している
  public set broken(value: string) {
    this.stored = value
    return this.stored as unknown as void
  }
}

// accessor-pairs: setter だけがあって getter が無い
export const setterOnly = {
  set value(next: number) {
    void next
  },
}

// require-yield: yield の無いジェネレータ
export function* noYield(): Generator<number> {
  return
}
