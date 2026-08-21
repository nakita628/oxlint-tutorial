// クラスまわりの違反サンプル

export class EmptyStatic {
  // no-empty-static-block: 空の static ブロック
  static {}
}

export class UnusedPrivate {
  // no-unused-private-class-members: 使われていない private メンバー
  #unused = 1

  public value = 2
}

// new-cap: コンストラクタとして呼ぶ関数名は大文字始まりにする
function factory(this: { value: number }): void {
  this.value = 1
}

export function newCap(): unknown {
  return new factory()
}

// no-new: 副作用のためだけに new しない
export function newForSideEffect(): void {
  new Date()
}
