// constructor-super / no-this-before-super: super() の呼び出しに関する違反
class Base {
  public value = 1
}

export class MissingSuper extends Base {
  public constructor() {
    // no-this-before-super: super() より前に this を参照している
    this.value = 2
    super()
  }
}
