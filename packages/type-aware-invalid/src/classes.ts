// クラス・列挙まわり（型情報が必要なルール）の違反サンプル

// typescript/prefer-readonly: 再代入されない private フィールドは readonly にする
export class Config {
  private name = 'config'

  public read(): string {
    return this.name
  }
}

// typescript/related-getter-setter-pairs: getter と setter の型がそろっていない
export class Pair {
  private stored = 0

  public get value(): number {
    return this.stored
  }

  public set value(next: string) {
    this.stored = Number(next)
  }
}

// typescript/prefer-return-this-type: メソッドチェーンの戻り値は this 型にする
export class Builder {
  public add(): Builder {
    return this
  }
}

// typescript/unbound-method: メソッドを this から切り離して渡している
export class Handler {
  public value = 1

  public run(): number {
    return this.value
  }
}

export function unbound(handler: Handler): () => number {
  return handler.run
}

// typescript/prefer-readonly-parameter-types: 変更しない引数は readonly にする
export function readonlyParams(items: Array<number>): number {
  return items.length
}

// typescript/consistent-return: 値を返す経路と返さない経路が混在している
export function consistentReturn(flag: boolean): number | undefined {
  if (flag) {
    return 1
  }
  return
}

// typescript/switch-exhaustiveness-check: すべての値を網羅していない
type Mode = 'read' | 'write'

export function switchExhaustive(mode: Mode): string {
  switch (mode) {
    case 'read':
      return 'read'
  }
  return 'unknown'
}

// typescript/strict-void-return: void を期待する場所で値を返している
export function strictVoidReturn(items: Array<number>): void {
  items.forEach((item) => item * 2)
}

// typescript/no-useless-default-assignment: 既定値 undefined は不要
export function uselessDefault(value = undefined): unknown {
  return value
}

// typescript/no-deprecated: 非推奨の API を使っている
export function deprecated(value: string): string {
  return escape(value)
}
