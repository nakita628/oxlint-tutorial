// enums.ts の適合版

// typescript/prefer-enum-initializers: すべてのメンバーに値を明示
export enum Direction {
  Up = 'up',
  Down = 'down',
}

// typescript/no-duplicate-enum-values: 値を重複させない
export enum Status {
  Ok = 200,
  Created = 201,
}

// typescript/prefer-literal-enum-member: 初期値はリテラルで書く
export enum Computed {
  A = 1,
  B = 2,
}
