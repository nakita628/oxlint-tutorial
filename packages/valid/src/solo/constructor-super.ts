// constructor-super: 派生クラスのコンストラクタでは super() を呼ぶ
class Base {
  public value = 1
}

export class WithSuper extends Base {
  public label: string

  public constructor(label: string) {
    super()
    this.label = label
  }
}
