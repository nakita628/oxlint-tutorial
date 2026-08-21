# oxlint-tutorial

[oxlint](https://oxc.rs/docs/guide/usage/linter) の機能を、
**違反しないコード（valid）** と **意図的に違反させたコード（invalid）** のペアで確認するリポジトリです。

oxlint v1.79.0 が持つ **870 ルールすべて** を `oxlint.config.ts` に列挙し、
そのうち **859 ルール（99%）** について違反サンプルを用意して、実際に検出されることを検証しています。
残り 11 ルールは「このリポジトリの構成では再現できない理由」を設定ファイルにコメントで明記しています。

コードの整形には同じ Oxc スタックの [oxfmt](https://oxc.rs/docs/guide/usage/formatter) を使っています。

- 設定ファイルは TypeScript 形式（`oxlint.config.ts` / `oxfmt.config.ts`）のみ
- サンプルコードは `.ts` / `.tsx` / `.cts` / `.vue`（`<script lang="ts">`）のみ
- GitHub Actions で「フォーマット済み」「valid はすべて成功」「invalid はすべて失敗」を CI として検証

## ルールカバレッジ

| プラグイン | 検証済み | 全ルール数 |
| ---------- | -------: | ---------: |
| eslint     |      183 |        187 |
| typescript |      109 |        110 |
| unicorn    |      138 |        138 |
| oxc        |       26 |         27 |
| import     |       32 |         33 |
| jsdoc      |       23 |         23 |
| jest       |       60 |         60 |
| vitest     |       73 |         73 |
| react      |       81 |         85 |
| react-perf |        4 |          4 |
| jsx-a11y   |       36 |         36 |
| nextjs     |       21 |         21 |
| promise    |       16 |         16 |
| node       |       11 |         11 |
| vue        |       46 |         46 |
| **合計**   |  **859** |    **870** |

プラグインごとの一覧は [`docs/RULES.md`](./docs/RULES.md)（`pnpm rules` で生成）を参照してください。

## ディレクトリ構成

```
.
├─ oxlint.config.ts          # 870 ルールすべてを日本語コメント付きで列挙した lint 設定
├─ oxfmt.config.ts           # フォーマッタ設定（全 27 フィールドを日本語コメント付きで記述）
├─ scripts/
│  ├─ verify.ts              # valid=0 件 / invalid≠0 件 + 全ルールの発火を検証
│  └─ rules-report.ts        # docs/RULES.md を生成
├─ docs/RULES.md             # ルールカバレッジ表（自動生成）
├─ .github/workflows/lint.yml
└─ packages/
   ├─ valid/            invalid/            # eslint プラグイン（JavaScript 全般）
   ├─ typescript-valid/ typescript-invalid/ # typescript プラグイン（型情報が不要なもの）
   ├─ type-aware-valid/ type-aware-invalid/ # typescript プラグイン（型情報が必要なもの）
   ├─ unicorn-valid/    unicorn-invalid/
   ├─ oxc-valid/        oxc-invalid/        # oxlint 独自ルール
   ├─ import-valid/     import-invalid/
   ├─ jsdoc-valid/      jsdoc-invalid/
   ├─ jest-valid/       jest-invalid/
   ├─ vitest-valid/     vitest-invalid/
   ├─ react-valid/      react-invalid/
   ├─ react-perf-valid/ react-perf-invalid/
   ├─ jsx-a11y-valid/   jsx-a11y-invalid/
   ├─ nextjs-valid/     nextjs-invalid/
   ├─ promise-valid/    promise-invalid/
   ├─ node-valid/       node-invalid/
   ├─ vue-valid/        vue-invalid/
   └─ tailwind-valid/   tailwind-invalid/   # React + Tailwind CSS の UI
```

一部のパッケージには、他のルールと同時には有効化できないルール用のサブディレクトリがあります。

| サブディレクトリ                            | 内容                                                                                        |
| ------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `src/strict/`                               | `no-magic-numbers` / `no-ternary` / `no-hooks` など、通常のサンプルと両立しない厳格なルール |
| `src/sloppy/`                               | ES モジュールでは構文エラーになるもの（`.cts` のスクリプトで検証）                          |
| `src/solo/`                                 | 構文エラーが他のルールを止めてしまうため、1 ファイル 1 ルールに分けたもの                   |
| `src/alt/`                                  | `prefer-todo` と `warn-todo` のように、互いに排他的な方針を分けたもの                       |
| `src/default-only/`, `src/grouped-exports/` | `import/no-default-export` と `import/prefer-default-export` のような排他ルール             |

## セットアップ

```bash
pnpm install
```

Node.js は v22.18 以降（推奨 v24）が必要です。
`oxlint.config.ts` のような TypeScript 形式の設定ファイルは、Node.js 経由で oxlint を実行する場合にだけ使えます。

## 実行

```bash
pnpm fmt              # oxfmt で整形する
pnpm fmt:check        # 整形済みかどうかだけ確認する（書き換えない）

pnpm verify           # valid / invalid の期待値と、全ルールの発火を検証（推奨）
pnpm rules            # docs/RULES.md を再生成

pnpm lint             # リポジトリ全体（invalid があるので失敗します）
pnpm lint:valid       # packages/valid のみ（成功します）
pnpm lint:invalid     # packages/invalid のみ（エラーが出ます）
pnpm lint:type-aware  # 型情報が必要なルールを検証
pnpm print-config     # 実際に適用される設定を JSON で出力
```

`pnpm verify` は次の 3 点を検証します。

1. `packages/*-valid` … 診断 0 件・終了コード 0
2. `packages/*-invalid` … 診断 1 件以上・終了コード 1
3. `oxlint.config.ts` で `error` にした **すべてのルール** が invalid 側で実際に 1 回以上発火すること

3 番目があるため、「設定には書いたが動作確認していないルール」が残らないようになっています。

## GitHub Actions

[`.github/workflows/lint.yml`](./.github/workflows/lint.yml) に 5 つのジョブがあります。

| ジョブ    | 内容                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `format`  | `pnpm fmt:check`（oxfmt で整形済みであること）                                   |
| `valid`   | すべての `packages/*-valid` で oxlint が成功すること                             |
| `invalid` | すべての `packages/*-invalid` で oxlint が失敗すること（成功したら CI を落とす） |
| `verify`  | `pnpm verify`（全ルールの発火まで検証）                                          |
| `rules`   | `docs/RULES.md` が最新であること                                                 |

## 実プロジェクトでの推奨設定

**このリポジトリのように 870 ルールを列挙する必要はありません。**
それは「全ルールを 1 つずつ動作確認する」というこのリポジトリの目的のためであって、
実プロジェクトでは oxlint が用意している `categories` を使うのが本来の使い方です。

### まずは `oxlint --init`

```bash
pnpm add -D oxlint
npx oxlint --init
```

生成される `.oxlintrc.json` がそのまま推奨の出発点です。

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["typescript", "unicorn", "oxc"],
  "categories": {
    "correctness": "error"
  },
  "rules": {},
  "env": {
    "builtin": true
  }
}
```

これだけで **111 ルール** が有効になります。
`correctness` は「明確に間違っている／無意味なコード」だけを集めたカテゴリなので、
既存プロジェクトに後から入れても大量のエラーが出にくく、誤検知もほとんどありません。

### カテゴリで段階的に強くする

厳しさはルールを 1 つずつ足すのではなく、カテゴリ単位で調整します。
実際に `--print-config` で数えた有効ルール数は次のとおりです。

| 設定                             | 有効ルール数 | 想定                                 |
| -------------------------------- | -----------: | ------------------------------------ |
| 既定（`oxlint --init` のまま）   |          111 | まず入れてみる段階                   |
| 全 15 プラグイン + `correctness` |          272 | フレームワークまで含めた最小構成     |
| 上記 + `suspicious` + `perf`     |          350 | **多くのプロジェクトの落としどころ** |
| 上記 + `pedantic` + `style`      |          756 | コードスタイルまで統一したい場合     |
| CLI の `-D all`                  |          859 | `nursery` 以外すべて（試すとき用）   |

カテゴリは全部で 7 つあります。

| カテゴリ      | ルール数 | 内容                               | おすすめ                      |
| ------------- | -------: | ---------------------------------- | ----------------------------- |
| `correctness` |      272 | 明確に間違っている／無意味なコード | ✅ 既定で有効。必ず入れる     |
| `suspicious`  |       63 | ほぼ間違いだろうというコード       | ✅ 入れてよい                 |
| `perf`        |       15 | より高速に書けるコード             | ✅ 入れてよい                 |
| `pedantic`    |      126 | 厳しめ。まれに誤検知が出る         | 🔸 好みが分かれる             |
| `style`       |      280 | より慣用的な書き方に寄せる         | 🔸 フォーマッタと役割が重なる |
| `restriction` |      103 | 言語機能そのものの使用を制限する   | 🔸 プロジェクト方針しだい     |
| `nursery`     |       11 | 開発中の新ルール                   | ⚠️ 本番では非推奨             |

なお `all` は CLI の `-D all` でだけ使えます。`categories` には書けません。

### すぐ使える設定例

**React + TypeScript のアプリ（246 ルール）**

```ts
import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'react', 'jsx-a11y'],
  categories: {
    correctness: 'error',
    suspicious: 'error',
    perf: 'error',
  },
  env: { builtin: true, browser: true },
  rules: {
    // カテゴリで有効になったもののうち、合わないものだけ個別に外す
    'unicorn/no-null': 'off',
    'unicorn/prefer-top-level-await': 'off',
  },
  overrides: [
    {
      // テストファイルだけルールをゆるめる
      files: ['**/*.test.ts', '**/*.test.tsx'],
      plugins: ['vitest'],
      env: { vitest: true },
      rules: {
        'typescript/no-explicit-any': 'off',
      },
    },
  ],
})
```

**Node.js のライブラリ（171 ルール）**

```ts
import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'promise', 'node'],
  categories: {
    correctness: 'error',
    suspicious: 'error',
    perf: 'error',
  },
  env: { builtin: true, node: true },
  options: {
    // 型情報が必要なルールも使う（oxlint-tsgolint が必要）
    typeAware: true,
  },
})
```

### 設定を共有する

複数プロジェクトで同じ設定を使う場合は `extends` を使います。

```ts
// oxlint.config.ts
import { defineConfig } from 'oxlint'

import { base } from './configs/base.ts'

export default defineConfig({
  extends: [base],
  rules: {
    // プロジェクト固有の上書きだけをここに書く
    'eslint/no-console': 'error',
  },
})
```

JSON 形式では設定ファイルからの相対パスで指定します。

```json
{ "extends": ["./configs/base.json"] }
```

複数指定した場合は左から右へマージされ、後ろの設定が前を上書きします。
最終的に、継承先のファイル自身の指定が最優先です。

### モノレポではネスト設定

パッケージごとに設定を変えたい場合は、各ディレクトリに設定ファイルを置くだけです。
oxlint は **対象ファイルに一番近い設定ファイル** を使います。

```
my-project/
├── .oxlintrc.json          ← src/ 配下はこれ
├── src/index.ts
├── packages/web/
│   ├── oxlint.config.ts    ← packages/web/ 配下はこれ
│   └── index.tsx
└── packages/api/
    ├── .oxlintrc.json      ← packages/api/ 配下はこれ
    └── index.ts
```

親子の設定は **自動マージされません**（共有したい部分は `extends` で明示的に取り込みます）。
この挙動が不要なら `--disable-nested-config` で無効にできます。

### ESLint からの移行

既存の ESLint 設定があるなら、変換ツールが使えます。

```bash
npx @oxlint/migrate
```

### 個別ルールの微調整

カテゴリで有効にしたあと、合わないルールだけを外していくのが実務的です。

```ts
rules: {
  'unicorn/no-null': 'off',                 // 個別に無効化
  'eslint/no-console': 'warn',              // 重大度を下げる
  'eslint/max-params': ['error', { max: 4 }], // オプションを渡す
}
```

一時的に試すだけなら CLI でも切り替えられます（左から右へ適用されます）。

```bash
oxlint -D correctness -D suspicious -A unicorn/no-null
oxlint -D all -A nursery       # nursery 以外を全部試す
```

### このリポジトリが 870 ルールを列挙している理由

`packages/*-invalid` に置いた違反サンプルが本当に検出されるかを
`scripts/verify.ts` が 1 ルールずつ突き合わせるため、
「どのルールを検証したか」を設定ファイル上で明示する必要があるからです。
実プロジェクトの設定としてそのままコピーする用途は想定していません。

## 設定ファイル（oxlint.config.ts）

設定ファイルとして認識されるファイル名は次の 4 つです。

| ファイル名          | 形式               | 備考                     |
| ------------------- | ------------------ | ------------------------ |
| `.oxlintrc.json`    | JSON               | すべての実行環境で使える |
| `.oxlintrc.jsonc`   | JSON（コメント可） | 同上                     |
| `oxlint.config.ts`  | TypeScript         | Node.js 経由の実行が前提 |
| `oxlint.config.mts` | TypeScript         | 同上                     |

同一ディレクトリに JSON 形式と TypeScript 形式を同時に置くことはできません。

このリポジトリの `oxlint.config.ts` には、oxlint がサポートするトップレベル設定を
省略せずにすべて書いています。

| フィールド       | 内容                                                                    |
| ---------------- | ----------------------------------------------------------------------- |
| `$schema`        | エディタ補完・検証用の JSON Schema                                      |
| `extends`        | 他の設定の継承（TypeScript 形式では設定オブジェクトの配列）             |
| `plugins`        | 有効化する組み込みプラグイン（15 種類）                                 |
| `categories`     | カテゴリ単位の重大度（7 種類）                                          |
| `rules`          | ルール単位の設定                                                        |
| `settings`       | プラグイン共通の設定（jest / jsdoc / jsx-a11y / next / react / vitest） |
| `env`            | 事前定義済みグローバル変数セット                                        |
| `globals`        | 独自のグローバル変数                                                    |
| `ignorePatterns` | lint 対象から除外するパターン                                           |
| `jsPlugins`      | JavaScript で書かれた外部プラグイン（alpha）                            |
| `options`        | リンタ自身の挙動（CLI フラグ相当）                                      |
| `overrides`      | ファイルパターンごとの設定                                              |

### カテゴリ

| カテゴリ      | ルール数 | 内容                                             |
| ------------- | -------: | ------------------------------------------------ |
| `correctness` |      272 | 明確に間違っている／無意味なコード（既定で有効） |
| `suspicious`  |       63 | ほぼ間違いだろうというコード                     |
| `pedantic`    |      126 | 厳しめ。まれに誤検知が出る                       |
| `perf`        |       15 | より高速に書けるコード                           |
| `restriction` |      103 | 言語機能そのものの使用を制限する                 |
| `style`       |      280 | より慣用的な書き方に寄せる                       |
| `nursery`     |       11 | 開発中の新ルール（`all` にも含まれない）         |

### プラグイン

`plugins` を書くと既定値を上書きします。既定で有効なのは
`eslint` / `unicorn` / `typescript` / `oxc` の 4 つだけなので、
使いたいものはすべて列挙する必要があります。

## 型情報が必要なルール（--type-aware）

`typescript` プラグインの 110 ルールのうち **59 ルール** は型情報が必要で、
`--type-aware`（または `options.typeAware: true`）を付けたときだけ動作します。

```bash
pnpm add -D oxlint-tsgolint
pnpm lint:type-aware
```

このリポジトリでは `packages/type-aware-valid` / `packages/type-aware-invalid` で検証しています。
型情報を使うため、`tsconfig.json` の `include` に対象ファイルが含まれている必要があります。

## 自動修正

```bash
oxlint --fix                # 安全な修正だけを適用する
oxlint --fix-suggestions    # 提案レベルの修正も適用する（挙動が変わる可能性あり）
oxlint --fix-dangerously    # 危険な修正も適用する
```

`--fix` はソースを書き換えます。試す場合はコピーを取ってから実行してください。

## インラインでの抑制

```ts
// oxlint-disable-next-line eslint/no-console
console.log('temporary')

/* oxlint-disable eslint/no-console */
console.log('a')
/* oxlint-enable eslint/no-console */
```

`options.respectEslintDisableDirectives`（既定 `true`）が有効なら
`eslint-disable` 形式のコメントも尊重されます。
また `options.reportUnusedDisableDirectives` を設定すると、
効いていない抑制コメントが報告されます。

ルール名を書かない `/* oxlint-disable */` は `unicorn/no-abusive-eslint-disable` で検出されます。

## 出力フォーマット

```bash
oxlint -f default      # 既定
oxlint -f json         # 機械可読（scripts/verify.ts で使用）
oxlint -f github       # GitHub Actions のアノテーション
oxlint -f gitlab
oxlint -f checkstyle
oxlint -f junit
oxlint -f sarif
oxlint -f stylish
oxlint -f unix
oxlint -f agent        # コーディングエージェント向け
```

## 主な CLI オプション

| オプション                                                        | 内容                                             |
| ----------------------------------------------------------------- | ------------------------------------------------ |
| `-c, --config <path>`                                             | 設定ファイルを明示指定する                       |
| `--tsconfig <path>`                                               | import 解決に使う tsconfig を明示指定する        |
| `--init`                                                          | 既定値の設定ファイルを生成する                   |
| `-A, --allow <name>` / `-W, --warn <name>` / `-D, --deny <name>`  | ルール／カテゴリの重大度を左から順に上書きする   |
| `--type-aware`                                                    | 型情報が必要なルールを有効化する                 |
| `--type-check`                                                    | TypeScript のコンパイラ診断も出す（実験的）      |
| `--fix` / `--fix-suggestions` / `--fix-dangerously`               | 自動修正                                         |
| `--ignore-path <path>` / `--ignore-pattern <pat>` / `--no-ignore` | 無視設定                                         |
| `--quiet` / `--deny-warnings` / `--max-warnings <n>`              | 警告の扱い                                       |
| `-f, --format <fmt>`                                              | 出力フォーマット                                 |
| `--print-config`                                                  | マージ後の設定を JSON で出力する                 |
| `--rules`                                                         | 登録されているルールを一覧する                   |
| `--threads <n>`                                                   | 使用するスレッド数                               |
| `--silent`                                                        | 診断を表示しない                                 |
| `--no-error-on-unmatched-pattern`                                 | 対象ファイルが 0 件でもエラーにしない            |
| `--disable-nested-config`                                         | ネストした設定ファイルの自動読み込みを無効にする |
| `--lsp`                                                           | 言語サーバーとして起動する                       |
| `--debug files` / `--debug timings`                               | 対象ファイル一覧／ルールごとの実行時間           |
| `--report-unused-disable-directives`                              | 効いていない抑制コメントを報告する               |

プラグインを CLI から有効化するフラグもあります
（`--react-plugin` / `--jest-plugin` / `--vitest-plugin` / `--jsx-a11y-plugin` /
`--nextjs-plugin` / `--react-perf-plugin` / `--promise-plugin` / `--node-plugin` /
`--vue-plugin` / `--import-plugin` / `--jsdoc-plugin`、
および `--disable-unicorn-plugin` / `--disable-oxc-plugin` / `--disable-typescript-plugin`）。

## Tailwind CSS について

oxlint には Tailwind CSS 専用のネイティブプラグインはありません。
クラス名の並び順などを検査したい場合は、トップレベルの `jsPlugins` に
JavaScript で書かれた ESLint 互換プラグインを追加します。

```ts
jsPlugins: [{ name: 'tw', specifier: '<tailwind 用プラグイン>' }]
```

`packages/tailwind-valid` / `packages/tailwind-invalid` では、
Tailwind のユーティリティクラスを使った UI に対して
`react` / `jsx-a11y` のルールがそのまま働くことを確認しています。

## 検証できなかった 11 ルール

理由は `oxlint.config.ts` の該当箇所にコメントで書いています。

| ルール                              | 理由                                                                            |
| ----------------------------------- | ------------------------------------------------------------------------------- |
| `eslint/getter-return`              | TypeScript ファイルでは動作しない（型チェックが同等の検査を行うため）           |
| `eslint/no-dupe-class-members`      | メンバー名の重複が先に構文エラーになる                                          |
| `eslint/no-implicit-globals`        | 素の script でのみ成立するが、oxlint は `.cts` も CommonJS モジュールとして扱う |
| `eslint/no-with`                    | `with` は strict mode で構文エラーになる                                        |
| `import/named`                      | TypeScript ファイルでは報告されない（tsc が同等の検査を行うため）               |
| `oxc/no-barrel-file`                | 100 モジュール超の `export *` が必要                                            |
| `react/invariant`                   | React Compiler 内部のバグを報告するルール                                       |
| `react/jsx-filename-extension`      | `.ts` に JSX を書くと構文エラーになる                                           |
| `react/preserve-manual-memoization` | React Compiler がメモ化を保持できなかったときにだけ出る                         |
| `react/todo`                        | React Compiler が未対応機能に遭遇したときにだけ出る                             |
| `typescript/restrict-plus-operands` | tsgolint 側が未実装（型情報つき 61 ルール中 2 ルールが未実装）                  |

## 参考

- [Oxlint 公式ドキュメント](https://oxc.rs/docs/guide/usage/linter)
- [ルールリファレンス](https://oxc.rs/docs/guide/usage/linter/rules.html)
- [設定ファイルリファレンス](https://oxc.rs/docs/guide/usage/linter/config-file-reference.html)
- 各ルールのドキュメントは `https://oxc.rs/docs/guide/usage/linter/rules/<plugin>/<rule>.html`
  （`.md` に変えると Markdown 版が取得できます）
