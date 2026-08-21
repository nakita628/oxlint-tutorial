// import/first: import はファイルの先頭にまとめる
// import/no-duplicates: 同じモジュールからは 1 回だけ import する
// import/no-namespace / import/namespace: 名前空間 import を使わない
// import/no-named-default: `{ default as x }` を使わない
// import/consistent-type-specifier-style: 型は import type にまとめる
// import/no-empty-named-blocks: 空の名前付き import を書かない
// import/no-absolute-path / import/no-webpack-loader-syntax: 相対パスのみを使う
// import/extensions: 拡張子を省略しない
// import/max-dependencies: 依存モジュール数を抑える
// import/default: default export を持つモジュールからだけ default を import する
import type { Counter } from './types.ts'
import { fromA } from './cycle-a.ts'
import { blank } from './extensionless.ts'
import { increment } from './types.ts'

// import/newline-after-import: 最後の import の直後に空行を入れる
export const beforeImports = 1
export const afterImports = { fromA, blank, increment }
export type { Counter }
