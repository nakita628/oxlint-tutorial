// constructor-super: 派生クラスのコンストラクタで super() を呼んでいない
class Base {
  public value = 1
}

export class Derived extends Base {
  public label: string

  public constructor(label: string) {
    this.label = label
  }
}
