// enum まわりの違反サンプル

// typescript/prefer-enum-initializers: すべてのメンバーに値を明示する
export enum Direction {
  Up,
  Down,
}

// typescript/no-duplicate-enum-values: 同じ値のメンバーが重複している
export enum Status {
  Ok = 200,
  Success = 200,
}

// typescript/prefer-literal-enum-member: メンバーの初期値はリテラルにする
const base = 1
export enum Computed {
  A = base,
  B = base + 1,
}
