// constructor-super / no-this-before-super: super() を先に呼ぶ
class Base {
  public value = 1
}

export class Derived extends Base {
  public label: string

  public constructor(label: string) {
    super()
    this.label = label
    this.value = 2
  }
}
