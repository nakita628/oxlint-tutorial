// classes.ts の適合版

// typescript/prefer-readonly: 再代入されない private は readonly にする
export class Config {
  private readonly name = 'config'

  public read(): string {
    return this.name
  }
}

// typescript/related-getter-setter-pairs: getter と setter の型をそろえる
export class Pair {
  private stored = 0

  public get value(): number {
    return this.stored
  }

  public set value(next: number) {
    this.stored = next
  }
}

// typescript/prefer-return-this-type: 戻り値は this 型にする
export class Builder {
  public add(): this {
    return this
  }
}

// typescript/prefer-readonly-parameter-types: 配列引数は ReadonlyArray にする

// typescript/unbound-method: アロー関数で包んで this を保つ
export class Handler {
  public value = 1

  public run(): number {
    return this.value
  }
}

export function bound(handler: Readonly<Handler>): () => number {
  return (): number => handler.run()
}

// typescript/prefer-readonly-parameter-types: 変更しない引数は readonly にする
export function readonlyParams(items: ReadonlyArray<number>): number {
  return items.length
}

// typescript/consistent-return: すべての経路で値を返す
export function consistentReturn(flag: boolean): number {
  if (flag) {
    return 1
  }
  return 0
}

// typescript/switch-exhaustiveness-check: すべての値を網羅する
type Mode = 'read' | 'write'

export function switchExhaustive(mode: Mode): string {
  switch (mode) {
    case 'read':
      return 'read'
    case 'write':
      return 'write'
    default:
      return 'unknown'
  }
}

// typescript/strict-void-return: void を期待する場所では値を返さない
export function strictVoidReturn(items: ReadonlyArray<number>): void {
  items.forEach((item) => {
    void (item * 2)
  })
}

// typescript/no-useless-default-assignment: 既定値を書かない
export function noUselessDefault(value?: number): number | undefined {
  return value
}

// typescript/no-deprecated: 非推奨 API を使わない
export function notDeprecated(value: string): string {
  return encodeURIComponent(value)
}
