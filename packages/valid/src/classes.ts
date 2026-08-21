// classes.ts の適合版

export class NotEmptyStatic {
  public static readonly version = '1.0.0'

  // no-empty-static-block: static ブロックには処理を書く
  static {
    void NotEmptyStatic.version
  }
}

export class UsedPrivate {
  // no-unused-private-class-members: private メンバーはきちんと使う
  #used = 1

  public read(): number {
    return this.#used
  }
}

// new-cap: コンストラクタ名は大文字始まりにする
class Factory {
  public value = 1
}

export function newCap(): Factory {
  return new Factory()
}

// no-new: 生成した値は必ず使う
export function newForValue(): number {
  const now = new Date()
  return now.getTime()
}
