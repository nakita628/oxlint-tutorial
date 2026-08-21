export const beforeImports = 1
// import/first: import はファイルの先頭にまとめる
import { fromA } from './cycle-a.ts'
// import/no-duplicates: 同じモジュールを複数回 import している
import { sum } from './cycle-a.ts'
// import/no-namespace: 名前空間 import を避ける
import * as cycleB from './cycle-b.ts'
// import/namespace: 名前空間 import に存在しないメンバーを参照している
const missingMember = cycleB.notExported
// import/no-named-default: default を名前付きで import しない
import { default as mutable } from './mutable.ts'
// import/consistent-type-specifier-style: 型は import type にまとめる
import { increment, type Counter } from './types.ts'
// import/no-empty-named-blocks: 空の名前付き import は無意味
import {} from './side-effect.ts'
// import/no-unassigned-import: 副作用だけの import は避ける
import './side-effect.ts'
// import/no-absolute-path: 絶対パスの import は避ける
import '/etc/hostname'
// import/no-webpack-loader-syntax: ローダー構文を import に書かない
import 'raw-loader!./side-effect.ts'
// import/extensions: 拡張子を省略しない
import { blank } from './extensionless'
// import/default: default export を持たないモジュールから default を import している
import namedOnlyDefault from './named-only.ts'
// import/no-named-as-default: default を名前付き export と同じ名前で受け取っている
// import/newline-after-import: 最後の import の直後に空行が無い
// import/max-dependencies: 依存モジュール数が上限を超えている
import helper from './default-and-named.ts'
export const afterImports = { fromA, sum, cycleB, mutable, increment, blank, missingMember }
// import/no-named-as-default-member: default 経由で名前付き export を参照している
export const helperValue = helper.helper
export const extras = { namedOnlyDefault }
export type { Counter }
