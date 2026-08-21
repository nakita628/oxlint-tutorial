// classes.ts の適合版

// typescript/no-extraneous-class: 定数はモジュールの export で公開する
export const VERSION = '1.0.0'

export class Members {
  // typescript/explicit-member-accessibility: アクセス修飾子を明示
  public name = 'members'

  // typescript/class-literal-property-style: getter ではなく readonly フィールド
  public readonly kind: string = 'members'

  public rename(value: string): void {
    this.name = value
  }
}

// typescript/no-misused-new: コンストラクタ型は別の形で表現する
export interface ConstructableFactory {
  create: () => Members
}

// typescript/adjacent-overload-signatures: 同名シグネチャを隣接させる
export declare function find(id: string | number): void
export declare function save(): void

// typescript/unified-signatures: ユニオン型にまとめる
export declare function handle(value: string | number): void

export class Parameters {
  // typescript/parameter-properties: フィールドを明示的に宣言して代入する
  public readonly id: string

  public constructor(id: string) {
    this.id = id
  }
}

export class ThisAlias {
  public run(): void {
    // typescript/no-this-alias: アロー関数なら this をそのまま使える
    setTimeout((): void => {
      void this
    }, 0)
  }
}

// typescript/no-unsafe-declaration-merging: クラスに直接プロパティを持たせる
export class Merged {
  public extra = ''
}
