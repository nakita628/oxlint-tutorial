// no-dupe-class-members: クラスメンバー名が重複している
export class Duplicated {
  public run(): number {
    return 1
  }

  public run(): number {
    return 2
  }
}
