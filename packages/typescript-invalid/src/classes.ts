// クラス・オーバーロードまわりの違反サンプル

// typescript/no-extraneous-class: 静的メンバーだけのクラスは名前空間で十分
export class OnlyStatics {
  static readonly version = '1.0.0'
}

export class Members {
  // typescript/explicit-member-accessibility: public / private / protected を明示する
  name = 'members'

  // typescript/class-literal-property-style: リテラルを返すだけの getter はフィールドにする
  public get kind(): string {
    return 'members'
  }

  public rename(value: string): void {
    this.name = value
  }
}

// typescript/no-misused-new: interface に自分自身を返す `new` を書くのは誤り
export interface Constructable {
  new (): Constructable
}

// typescript/adjacent-overload-signatures: 同名のシグネチャは隣接させる
export declare function find(id: string): void
export declare function save(): void
export declare function find(id: number): void

// typescript/unified-signatures: 引数の型だけが違うシグネチャはユニオンで統合できる
export declare function handle(value: string): void
export declare function handle(value: number): void

export class Parameters {
  // typescript/parameter-properties: コンストラクタのパラメータプロパティを禁止する設定にしている
  public constructor(public readonly id: string) {}
}

export class Assigned {
  // typescript/no-unnecessary-parameter-property-assignment: パラメータプロパティへの再代入は不要
  public constructor(public readonly id: string) {
    this.id = id
  }
}

export class ThisAlias {
  public run(): void {
    // typescript/no-this-alias: this を変数に退避しない（アロー関数を使う）
    const self = this
    setTimeout(function () {
      void self
    }, 0)
  }
}

// typescript/no-unsafe-declaration-merging: class と interface の同名宣言マージは危険
export class Merged {}
export interface Merged {
  extra: string
}
