import { defineConfig } from 'oxlint'

/**
 * oxlint 設定ファイル（TypeScript 形式）
 * ==================================================================
 * このファイルには oxlint がサポートするトップレベル設定を、
 * 省略・抽象化せずにすべて日本語コメント付きで書いている。
 *   $schema / extends / plugins / categories / rules /
 *   settings / env / globals / ignorePatterns / jsPlugins /
 *   options / overrides
 *
 * 設定ファイルとして認識されるファイル名は次の 4 つ。
 *   .oxlintrc.json / .oxlintrc.jsonc / oxlint.config.ts / oxlint.config.mts
 * 同一ディレクトリに JSON 形式と TypeScript 形式を同時に置くことはできない。
 * TypeScript 形式は Node.js 経由の実行が前提（Node.js v22.18+ もしくは v24+）。
 * スタンドアロンバイナリで動かす場合は .oxlintrc.json を使う。
 *
 * overrides には、oxlint が持つ 870 ルールを
 * プラグインごとにすべて列挙し、1 行ずつ日本語で説明している。
 *   'error' … packages/<name>-invalid に違反サンプルがあり、動作確認済み
 *   'off'   … 同時には有効化できない／このリポジトリでは再現できない理由を併記
 */
export default defineConfig({
  // ==================================================================
  // $schema: エディタ補完・検証用の JSON Schema の場所
  //   JSON 形式（.oxlintrc.json）では必須級だが、TypeScript 形式では
  //   defineConfig の型で補完が効くため任意。
  // ==================================================================
  $schema: './node_modules/oxlint/configuration_schema.json',

  // ==================================================================
  // extends: 他の設定を継承する
  //   JSON 形式 → 文字列パスの配列（設定ファイルからの相対パス）
  //   TypeScript 形式 → 設定オブジェクトの配列
  //     import { base } from './base.ts'
  //     extends: [base]
  //   複数指定した場合は左から右へマージされ、後ろの設定が前を上書きする。
  //   最終的にこのファイル自身の指定が最優先される。
  //   このリポジトリでは設定を 1 ファイルに全部書く方針のため空にしている。
  // ==================================================================
  extends: [],

  // ==================================================================
  // plugins: 有効化する組み込みプラグイン（すべて Rust ネイティブ実装）
  //   このフィールドを書くとデフォルト値を「上書き」する。
  //   既定で有効なのは eslint / unicorn / typescript / oxc の 4 つだけなので、
  //   使いたいものをすべて列挙する必要がある。
  //   指定できるのは次の 15 種類ですべて（合計 870 ルール）。
  // ==================================================================
  plugins: [
    'eslint', // JavaScript 全般のルール
    'typescript', // TypeScript 固有のルール
    'unicorn', // モダンな書き方に寄せるルール
    'oxc', // oxlint 独自のルール
    'import', // import / export とモジュール解決のルール
    'jsdoc', // JSDoc コメントのルール
    'jest', // Jest のテストコード向けルール
    'vitest', // Vitest のテストコード向けルール
    'react', // React / React Hooks 向けルール
    'react-perf', // React の不要な再レンダーを検出するルール
    'jsx-a11y', // JSX のアクセシビリティルール
    'nextjs', // Next.js 向けルール
    'promise', // Promise の使い方のルール
    'node', // Node.js 向けルール
    'vue', // Vue 向けルール（.vue の script ブロックを検査）
  ],

  // ==================================================================
  // categories: カテゴリ単位で重大度をまとめて設定する
  //   個別の rules 指定のほうが優先される。
  //   カテゴリは次の 7 種類ですべて。
  //   値は 'error' | 'warn' | 'off'（'deny' | 'allow' も同義）。
  //
  //   このリポジトリでは「パッケージごとに検証したいルールを
  //   overrides で明示的に有効化する」方針のため、
  //   全体では correctness だけを error にしている。
  // ==================================================================
  categories: {
    correctness: 'error', // 明確に間違っている／無意味なコード（272 ルール・既定で有効）
    suspicious: 'off', // ほぼ間違いだろうというコード（63 ルール）
    pedantic: 'off', // 厳しめ。まれに誤検知が出る（126 ルール）
    perf: 'off', // より高速に書けるコード（15 ルール）
    restriction: 'off', // 言語機能そのものの使用を制限する（103 ルール）
    style: 'off', // より慣用的な書き方に寄せる（280 ルール）
    nursery: 'off', // 開発中の新ルール（11 ルール・'all' にも含まれない）
  },

  // ==================================================================
  // env: 事前定義済みのグローバル変数セットを有効化する
  //   指定できる環境は次のとおりで、ここに全部書いてある。
  //   このリポジトリ全体では browser / node / builtin / es2026 だけを使い、
  //   テスト用のグローバル（jest / vitest）は overrides 側で足す。
  // ==================================================================
  env: {
    amd: false, // require() と define() のグローバル
    applescript: false, // AppleScript のグローバル
    astro: false, // Astro のグローバル
    atomtest: false, // Atom のテスト用グローバル
    audioworklet: false, // AudioWorklet のグローバル
    browser: true, // ブラウザのグローバル（window / document / fetch など）
    builtin: true, // 最新の ECMAScript グローバル（es2026 相当）
    commonjs: false, // CommonJS のグローバルとスコープ（require / module）
    embertest: false, // Ember のテスト用グローバル
    es2015: false, // ECMAScript 2015 のグローバル
    es2016: false, // ECMAScript 2016 のグローバル
    es2017: false, // ECMAScript 2017 のグローバル
    es2018: false, // ECMAScript 2018 のグローバル
    es2019: false, // ECMAScript 2019 のグローバル
    es2020: false, // ECMAScript 2020 のグローバル
    es2021: false, // ECMAScript 2021 のグローバル
    es2022: false, // ECMAScript 2022 のグローバル
    es2023: false, // ECMAScript 2023 のグローバル
    es2024: false, // ECMAScript 2024 のグローバル
    es2025: false, // ECMAScript 2025 のグローバル
    es2026: true, // ECMAScript 2026 のグローバル
    es6: false, // ECMAScript 6 のグローバル（モジュールを除く）
    greasemonkey: false, // GreaseMonkey のグローバル
    jasmine: false, // Jasmine のグローバル
    jest: false, // Jest のグローバル（describe / it / expect など）
    jquery: false, // jQuery のグローバル
    meteor: false, // Meteor のグローバル
    mocha: false, // Mocha のグローバル
    mongo: false, // MongoDB のグローバル
    nashorn: false, // Java 8 Nashorn のグローバル
    node: true, // Node.js のグローバルとスコープ（process / Buffer など）
    phantomjs: false, // PhantomJS のグローバル
    prototypejs: false, // Prototype.js のグローバル
    protractor: false, // Protractor のグローバル
    qunit: false, // QUnit のグローバル
    serviceworker: false, // Service Worker のグローバル
    'shared-node-browser': false, // Node.js とブラウザに共通のグローバル
    shelljs: false, // ShellJS のグローバル
    svelte: false, // Svelte のグローバル
    vitest: false, // Vitest のグローバル（describe / test / vi など）
    vue: false, // Vue のグローバル
    webextensions: false, // WebExtensions のグローバル
    worker: false, // Web Worker のグローバル
  },

  // ==================================================================
  // globals: 独自のグローバル変数を宣言する
  //   'readonly' … 参照のみ可（再代入すると no-global-assign などが検出する）
  //   'writable' … 再代入も可
  //   'off'      … そのグローバルを「未定義扱い」に戻す
  // ==================================================================
  globals: {
    __APP_VERSION__: 'readonly', // ビルド時に差し込む定数の想定
    __BUILD_DATE__: 'readonly', // ビルド時に差し込む定数の想定
    __DEV__: 'readonly', // 開発ビルド判定フラグの想定
    __mutableCounter__: 'writable', // 再代入を許可するグローバルの例
    escape: 'off', // 非推奨の組み込みを「未定義」に戻す例
    unescape: 'off', // 非推奨の組み込みを「未定義」に戻す例
  },

  // ==================================================================
  // rules: ルール単位の設定
  //   'off' | 'allow' | 'warn' | 'error' | 'deny' のいずれか、または
  //   [重大度, オプション...] の配列形式。
  //   eslint プラグインのルールは、名前が一意なら `eslint/` 接頭辞を省略できる。
  //   ここにはリポジトリ全体に効かせたいものだけを書き、
  //   検証用の 870 ルールはすべて下の overrides に列挙している。
  // ==================================================================
  rules: {
    'eslint/no-debugger': 'error', // debugger 文の残骸を禁止
    'eslint/no-var': 'error', // var ではなく let / const を使う
    'eslint/no-empty': ['error', { allowEmptyCatch: false }], // 配列形式でオプションを渡す例
  },

  // ==================================================================
  // settings: プラグイン共通の設定値
  //   jest / jsdoc / jsx-a11y / next / react / vitest の 6 セクションがあり、
  //   ここに全部書いてある。
  // ==================================================================
  settings: {
    react: {
      version: '19.0.0', // バージョン依存ルールの判定に使う React のバージョン
      linkComponents: [
        // <a> の代わりに使うコンポーネント。文字列だけ書くと href とみなされる
        'Link',
        { name: 'NextLink', linkAttribute: 'href' },
      ],
      formComponents: [
        // <form> の代わりに使うコンポーネント
        'Form',
        { name: 'AppForm', formAttribute: 'action' },
      ],
      componentWrapperFunctions: [
        // コンポーネントを包む高階関数（HOC）の名前
        'memo',
        'forwardRef',
        'observer',
      ],
    },
    'jsx-a11y': {
      components: {
        // 独自コンポーネントを、どの DOM 要素とみなすかのマッピング
        Button: 'button',
        Image: 'img',
        Input: 'input',
        TextLink: 'a',
      },
      attributes: {
        // 独自の prop 名を、標準の属性名に読み替えるマッピング
        for: ['htmlFor', 'for'],
      },
      polymorphicPropName: 'as', // as="button" のような多相コンポーネントの prop 名
    },
    next: {
      // Next.js プロジェクトのルート。モノレポでは複数指定できる
      rootDir: ['packages/nextjs-valid', 'packages/nextjs-invalid'],
    },
    jsdoc: {
      ignorePrivate: false, // @private が付いた宣言を無視しない
      ignoreInternal: false, // @internal が付いた宣言を無視しない
      tagNamePreference: {
        // 別名タグを正規化する（jsdoc/check-tag-names と組み合わせて使う）
        return: 'returns',
        arg: 'param',
        argument: 'param',
      },
    },
    jest: {
      version: 29, // Jest のメジャーバージョン
    },
    vitest: {
      // 型テスト（expectTypeOf / assertType）を含むファイルとして扱うかどうか。
      // true にすると型テスト向けの解釈が優先され、
      // vitest/prefer-describe-function-title など一部のルールが報告しなくなる。
      typecheck: false,
    },
  },

  // ==================================================================
  // ignorePatterns: lint 対象から除外するパターン（.gitignore 形式）
  //   パターンは「この設定ファイルのあるディレクトリ」を基準に解決される。
  //   `..` を含むパターンは使えない。
  //   外部の無視ファイルを使いたい場合は CLI の --ignore-path で指定する。
  // ==================================================================
  ignorePatterns: [
    '**/node_modules/**', // 依存パッケージ
    '**/dist/**', // ビルド成果物
    '**/build/**', // ビルド成果物
    '**/coverage/**', // カバレッジレポート
    '**/*.generated.ts', // 自動生成コード
  ],

  // ==================================================================
  // jsPlugins: JavaScript で書かれた外部プラグインを読み込む（alpha）
  //   文字列（パッケージ名 / パス）か { name, specifier } を指定する。
  //   上の plugins に挙げた 15 個の名前は oxlint がネイティブ実装として
  //   予約しているため、同名の JS プラグインを使いたい場合は
  //   name にエイリアスを付ける必要がある。
  //
  //   Tailwind CSS 用のネイティブプラグインは oxlint には無い。
  //   クラス名の並び順まで検査したい場合はここに JS プラグインを足す。
  //     jsPlugins: [{ name: 'tw', specifier: 'eslint-plugin-better-tailwindcss' }]
  //   このリポジトリでは追加依存を増やさないため空にしている。
  // ==================================================================
  jsPlugins: [],

  // ==================================================================
  // options: リンタ自身の挙動（CLI フラグと同等の設定）
  //   このフィールドはルート設定ファイルでのみ有効。
  // ==================================================================
  options: {
    denyWarnings: false, // true にすると warn でも終了コードが 1 になる（--deny-warnings）
    maxWarnings: 0, // 警告がこの数を超えたらエラー終了（--max-warnings）
    reportUnusedDisableDirectives: 'warn', // 効いていない disable コメントを報告する
    respectEslintDisableDirectives: true, // 互換ディレクティブも尊重する（既定 true）
    typeAware: false, // 型情報が必要なルールを有効化（--type-aware / oxlint-tsgolint が必要）
    typeCheck: false, // TypeScript のコンパイラ診断も出す実験機能（--type-check）
  },

  // ==================================================================
  // overrides: ファイルパターンごとの設定
  //   files（必須） / excludeFiles / env / globals / plugins / jsPlugins / rules
  //   を指定できる（categories は指定できない）。
  //
  //   packages/<name>-valid と packages/<name>-invalid のペアごとに、
  //   そのプラグインが持つルールをすべて列挙している。
  //     valid   側 … 診断 0 件（exit code 0）
  //     invalid 側 … 診断あり（exit code 1）
  //   scripts/verify.ts が「'error' にしたすべてのルールが
  //   invalid 側で実際に発火するか」まで検証する。
  //
  //   ※ 各 override の files は [valid 側, invalid 側] の 2 要素で書くこと。
  //   ※ plugins を書くとそのパターンでの有効プラグインを切り替えられるが、
  //      categories で有効化された correctness ルールは全プラグイン分が
  //      引き続き適用される。必要なら rules で個別に 'off' にする。
  // ==================================================================
  overrides: [
    // ================================================================
    // nextjs プラグインのルールは Next.js アプリの構造を前提にしているため、
    // categories.correctness で全体に効いてしまうと他のパッケージの
    // 普通の React コードまで報告されてしまう。
    // packages/nextjs-* 以外では明示的に無効化する（21 ルールすべて）。
    // ================================================================
    {
      files: ['packages/**'],
      excludeFiles: ['packages/nextjs-valid/**', 'packages/nextjs-invalid/**'],
      rules: {
        'nextjs/google-font-display': 'off', // Google Fonts の display 指定
        'nextjs/google-font-preconnect': 'off', // Google Fonts への preconnect
        'nextjs/inline-script-id': 'off', // インライン Script の id
        'nextjs/next-script-for-ga': 'off', // Google Analytics は next/script で
        'nextjs/no-assign-module-variable': 'off', // module 変数への代入
        'nextjs/no-async-client-component': 'off', // async なクライアントコンポーネント
        'nextjs/no-before-interactive-script-outside-document': 'off', // Script の配置
        'nextjs/no-css-tags': 'off', // 手書きの CSS link タグ
        'nextjs/no-document-import-in-page': 'off', // next/document の import 位置
        'nextjs/no-duplicate-head': 'off', // Head の重複
        'nextjs/no-head-element': 'off', // 生の head 要素
        'nextjs/no-head-import-in-document': 'off', // next/head の import 位置
        'nextjs/no-html-link-for-pages': 'off', // 内部リンクは next/link で
        'nextjs/no-img-element': 'off', // img ではなく next/image
        'nextjs/no-page-custom-font': 'off', // ページ単位のカスタムフォント
        'nextjs/no-script-component-in-head': 'off', // Head の中の Script
        'nextjs/no-styled-jsx-in-document': 'off', // _document 内の styled-jsx
        'nextjs/no-sync-scripts': 'off', // 同期読み込みの script
        'nextjs/no-title-in-document-head': 'off', // _document の title
        'nextjs/no-typos': 'off', // Next.js の予約関数名のタイポ
        'nextjs/no-unwanted-polyfillio': 'off', // 不要な polyfill.io
      },
    },
    // ================================================================
    // packages/valid, packages/invalid : eslint プラグイン（187 ルール）
    //   JavaScript 全般のルール。ここに 187 ルールすべてを列挙している。
    //   他のルールと同時に有効化できないものは
    //   下の「厳格グループ」（src/strict 配下）に分けている。
    // ================================================================
    {
      files: ['packages/valid/**', 'packages/invalid/**'],
      plugins: ['eslint'], // このパターンでは eslint プラグインだけを使う
      rules: {
        'eslint/accessor-pairs': 'error', // setter があるなら getter も定義する
        'eslint/array-callback-return': 'error', // map / filter などのコールバックは値を返す
        'eslint/arrow-body-style': 'error', // アロー関数の本体は必要なときだけブロックにする
        'eslint/block-scoped-var': 'error', // var をブロックスコープ変数のように使わない
        'eslint/class-methods-use-this': 'error', // this を使わないメソッドは static にする
        'eslint/constructor-super': 'error', // 派生クラスのコンストラクタでは super() を呼ぶ
        'eslint/curly': 'error', // if / for などは必ずブロックで書く
        'eslint/default-case': 'error', // switch には default 節を書く
        'eslint/default-case-last': 'error', // default 節は最後に置く
        'eslint/default-param-last': 'error', // 既定値付き引数は最後に置く
        'eslint/eqeqeq': 'error', // == ではなく === を使う
        'eslint/for-direction': 'error', // 終了しない for ループを検出する
        'eslint/func-name-matching': 'error', // 代入先の変数名と関数名を一致させる
        'eslint/func-names': 'error', // 関数式には名前を付ける
        // getter-return は TypeScript ファイルでは動作しない（型チェックが同等の検査を行うため）
        'eslint/getter-return': 'off', // getter は必ず値を返す
        'eslint/grouped-accessor-pairs': 'error', // getter と setter は隣接させる
        'eslint/guard-for-in': 'error', // for-in はガード付きで使う
        'eslint/id-denylist': ['error', 'data', 'callback'], // 使用を禁止する識別子名
        'eslint/id-match': ['error', '^[a-zA-Z][a-zA-Z0-9]*$'], // 識別子名はキャメルケースに限る
        'eslint/init-declarations': 'error', // 宣言時に初期化する
        'eslint/logical-assignment-operators': 'error', // ||= &&= ??= を使う
        'eslint/max-params': ['error', { max: 3 }], // 引数は 3 個まで
        'eslint/new-cap': 'error', // コンストラクタ名は大文字始まりにする
        'eslint/no-alert': 'error', // alert / confirm / prompt を禁止
        'eslint/no-array-constructor': 'error', // new Array() ではなく配列リテラル
        'eslint/no-async-promise-executor': 'error', // Promise の executor を async にしない
        'eslint/no-await-in-loop': 'error', // ループ内 await は直列実行になる
        'eslint/no-bitwise': 'error', // ビット演算子を禁止
        'eslint/no-caller': 'error', // arguments.caller / arguments.callee を禁止
        'eslint/no-case-declarations': 'error', // case 節の中で宣言しない
        'eslint/no-class-assign': 'error', // クラス名への再代入を禁止
        'eslint/no-compare-neg-zero': 'error', // -0 との比較を禁止
        'eslint/no-cond-assign': 'error', // 条件式の中で代入しない
        'eslint/no-console': 'error', // console.* を禁止
        'eslint/no-const-assign': 'error', // const への再代入を禁止
        'eslint/no-constant-binary-expression': 'error', // 結果が定数になる比較を禁止
        'eslint/no-constant-condition': 'error', // 常に真偽が決まる条件式を禁止
        'eslint/no-constructor-return': 'error', // コンストラクタから値を返さない
        'eslint/no-continue': 'error', // continue を禁止
        'eslint/no-control-regex': 'error', // 正規表現に制御文字を書かない
        'eslint/no-debugger': 'error', // debugger 文を禁止
        'eslint/no-delete-var': 'error', // 変数を delete しない
        'eslint/no-div-regex': 'error', // 除算と紛らわしい正規表現を禁止
        // no-dupe-class-members はメンバー名の重複が先に構文エラーになるため再現できない
        'eslint/no-dupe-class-members': 'off', // クラスメンバー名の重複を禁止
        'eslint/no-dupe-else-if': 'error', // else-if の条件の重複を禁止
        'eslint/no-dupe-keys': 'error', // オブジェクトのキーの重複を禁止
        'eslint/no-duplicate-case': 'error', // case ラベルの重複を禁止
        'eslint/no-duplicate-imports': 'error', // 同一モジュールの重複 import を禁止
        'eslint/no-else-return': 'error', // return 済みの if に else は不要
        'eslint/no-empty-character-class': 'error', // 何にもマッチしない空の文字クラス
        'eslint/no-empty-function': 'error', // 空関数を禁止
        'eslint/no-empty-pattern': 'error', // 空の分割代入パターンを禁止
        'eslint/no-empty-static-block': 'error', // 空の static ブロックを禁止
        'eslint/no-eq-null': 'error', // null との == 比較を禁止
        'eslint/no-eval': 'error', // eval を禁止
        'eslint/no-ex-assign': 'error', // catch の引数への再代入を禁止
        'eslint/no-extend-native': 'error', // 組み込みのプロトタイプを拡張しない
        'eslint/no-extra-bind': 'error', // 不要な bind を禁止
        'eslint/no-extra-boolean-cast': 'error', // 不要な真偽値変換を禁止
        'eslint/no-extra-label': 'error', // 不要なラベルを禁止
        'eslint/no-fallthrough': 'error', // case のフォールスルーを禁止
        'eslint/no-func-assign': 'error', // 関数宣言への再代入を禁止
        'eslint/no-global-assign': 'error', // グローバルへの再代入を禁止
        'eslint/no-implicit-coercion': 'error', // !! や +x による暗黙変換を禁止
        'eslint/no-implied-eval': 'error', // setTimeout に文字列を渡さない
        'eslint/no-import-assign': 'error', // import した束縛への代入を禁止
        'eslint/no-inner-declarations': 'error', // ブロック内での関数宣言を禁止
        'eslint/no-invalid-regexp': 'error', // 構文として不正な正規表現を検出
        'eslint/no-irregular-whitespace': 'error', // 通常でない空白文字を禁止
        'eslint/no-iterator': 'error', // 廃止された __iterator__ を禁止
        'eslint/no-label-var': 'error', // 変数名と同じラベル名を禁止
        'eslint/no-labels': 'error', // ラベル付き文を禁止
        'eslint/no-lone-blocks': 'error', // 意味のないブロックを禁止
        'eslint/no-lonely-if': 'error', // else 内の単独 if は else if に
        'eslint/no-loop-func': 'error', // ループ内で関数を生成しない
        'eslint/no-loss-of-precision': 'error', // 精度が失われる数値リテラルを禁止
        'eslint/no-misleading-character-class': 'error', // 誤解を招く文字クラスを禁止
        'eslint/no-multi-assign': 'error', // 連鎖代入を禁止
        'eslint/no-multi-str': 'error', // 行継続による複数行文字列を禁止
        'eslint/no-negated-condition': 'error', // 否定条件 + else を禁止
        'eslint/no-nested-ternary': 'error', // 三項演算子のネストを禁止
        'eslint/no-new': 'error', // 副作用目的の new を禁止
        'eslint/no-new-func': 'error', // Function コンストラクタを禁止
        'eslint/no-new-native-nonconstructor': 'error', // Symbol / BigInt を new しない
        'eslint/no-new-wrappers': 'error', // new String() などのラッパーを禁止
        'eslint/no-nonoctal-decimal-escape': 'error', // \8 \9 のエスケープを禁止
        'eslint/no-obj-calls': 'error', // Math() のような呼び出しを禁止
        'eslint/no-object-constructor': 'error', // new Object() ではなくリテラル
        'eslint/no-param-reassign': 'error', // 引数への再代入を禁止
        'eslint/no-plusplus': 'error', // ++ / -- を禁止
        'eslint/no-promise-executor-return': 'error', // executor から値を返さない
        'eslint/no-proto': 'error', // __proto__ を禁止
        'eslint/no-prototype-builtins': 'error', // hasOwnProperty を直接呼ばない
        'eslint/no-redeclare': 'error', // 同名の再宣言を禁止
        'eslint/no-regex-spaces': 'error', // 正規表現内の連続スペースを禁止
        'eslint/no-restricted-exports': ['error', { restrictedNamedExports: ['then'] }], // 禁止する export 名
        'eslint/no-restricted-globals': ['error', 'event'], // 禁止するグローバル名
        'eslint/no-restricted-imports': ['error', 'node:sys'], // 禁止する import 元
        'eslint/no-restricted-properties': ['error', { object: 'Math', property: 'pow' }], // 禁止するプロパティ
        'eslint/no-return-assign': 'error', // return 文の中で代入しない
        'eslint/no-script-url': 'error', // javascript: URL を禁止
        'eslint/no-self-assign': 'error', // 自分自身への代入を禁止
        'eslint/no-self-compare': 'error', // 自分自身との比較を禁止
        'eslint/no-sequences': 'error', // カンマ演算子を禁止
        'eslint/no-setter-return': 'error', // setter から値を返さない
        'eslint/no-shadow': 'error', // 外側スコープの変数を隠さない
        'eslint/no-shadow-restricted-names': 'error', // undefined などを再定義しない
        'eslint/no-sparse-arrays': 'error', // 疎な配列リテラルを禁止
        'eslint/no-template-curly-in-string': 'error', // 通常文字列内の ${} を検出
        'eslint/no-this-before-super': 'error', // super() より前の this を禁止
        'eslint/no-throw-literal': 'error', // Error 以外を throw しない
        'eslint/no-unassigned-vars': 'error', // 一度も代入されない let を禁止
        'eslint/no-undef': 'error', // 未定義の変数の参照を禁止
        'eslint/no-undefined': 'error', // undefined リテラルの直接使用を禁止
        'eslint/no-underscore-dangle': 'error', // 先頭・末尾のアンダースコアを禁止
        'eslint/no-unexpected-multiline': 'error', // 意図しない行継続を検出
        'eslint/no-unmodified-loop-condition': 'error', // 更新されないループ条件を禁止
        'eslint/no-unneeded-ternary': 'error', // cond ? true : false を禁止
        'eslint/no-unreachable': 'error', // 到達不能コードを禁止
        'eslint/no-unreachable-loop': 'error', // 1 回しか回らないループを禁止
        'eslint/no-unsafe-finally': 'error', // finally 内の return / throw を禁止
        'eslint/no-unsafe-negation': 'error', // in / instanceof の左辺の否定を禁止
        'eslint/no-unsafe-optional-chaining': 'error', // ?. の結果をそのまま演算しない
        'eslint/no-unused-expressions': 'error', // 値を捨てるだけの式文を禁止
        'eslint/no-unused-labels': 'error', // 使われていないラベルを禁止
        'eslint/no-unused-private-class-members': 'error', // 使われていない private メンバーを禁止
        'eslint/no-unused-vars': 'error', // 未使用変数を禁止
        'eslint/no-use-before-define': 'error', // 定義より前の使用を禁止
        'eslint/no-useless-assignment': 'error', // 読まれずに上書きされる代入を禁止
        'eslint/no-useless-backreference': 'error', // 常にマッチしない後方参照を禁止
        'eslint/no-useless-call': 'error', // 不要な call / apply を禁止
        'eslint/no-useless-catch': 'error', // 再 throw するだけの catch を禁止
        'eslint/no-useless-computed-key': 'error', // 不要な計算プロパティ名を禁止
        'eslint/no-useless-concat': 'error', // リテラル同士の連結を禁止
        'eslint/no-useless-constructor': 'error', // 何もしないコンストラクタを禁止
        'eslint/no-useless-escape': 'error', // 不要なエスケープを禁止
        'eslint/no-useless-rename': 'error', // 同名リネームを禁止
        'eslint/no-useless-return': 'error', // 末尾の無意味な return を禁止
        'eslint/no-var': 'error', // var を禁止
        'eslint/no-warning-comments': 'error', // TODO / FIXME コメントを禁止
        'eslint/object-shorthand': 'error', // オブジェクトの短縮記法を強制
        'eslint/operator-assignment': 'error', // x = x + 1 は x += 1 に
        'eslint/prefer-arrow-callback': 'error', // コールバックはアロー関数で
        'eslint/prefer-const': 'error', // 再代入しない let は const に
        'eslint/prefer-destructuring': 'error', // 分割代入を使う
        'eslint/prefer-exponentiation-operator': 'error', // Math.pow ではなく **
        'eslint/prefer-named-capture-group': 'error', // 名前付きキャプチャグループを使う
        'eslint/prefer-numeric-literals': 'error', // parseInt(..., 2) は 0b... に
        'eslint/prefer-object-has-own': 'error', // Object.hasOwn を使う
        'eslint/prefer-object-spread': 'error', // Object.assign ではなくスプレッド
        'eslint/prefer-promise-reject-errors': 'error', // reject には Error を渡す
        'eslint/prefer-regex-literals': 'error', // 静的パターンは正規表現リテラルで
        'eslint/prefer-rest-params': 'error', // arguments ではなくレストパラメータ
        'eslint/prefer-spread': 'error', // apply ではなくスプレッド
        'eslint/prefer-template': 'error', // 文字列連結ではなくテンプレートリテラル
        'eslint/preserve-caught-error': 'error', // 再 throw 時に cause で元エラーを残す
        'eslint/radix': 'error', // parseInt の基数を必須にする
        'eslint/require-await': 'error', // await の無い async 関数を禁止
        'eslint/require-unicode-regexp': 'error', // 正規表現に u / v フラグを必須にする
        'eslint/require-yield': 'error', // yield の無いジェネレータを禁止
        'eslint/symbol-description': 'error', // Symbol() に説明を付ける
        'eslint/unicode-bom': 'error', // ファイル先頭の BOM を禁止
        'eslint/use-isnan': 'error', // NaN との比較は Number.isNaN で
        'eslint/valid-typeof': 'error', // typeof の比較先文字列を検証
        'eslint/yoda': 'error', // ヨーダ記法を禁止

        // ---- 以下は「厳格グループ」（src/strict 配下）でのみ有効にする ----
        // 通常のサンプルコードと同時には成立しないため、ここでは無効にしている
        'eslint/capitalized-comments': 'off', // → src/strict で有効化
        'eslint/complexity': 'off', // → src/strict で有効化
        'eslint/func-style': 'off', // → src/strict で有効化
        'eslint/id-length': 'off', // → src/strict で有効化
        'eslint/max-classes-per-file': 'off', // → src/strict で有効化
        'eslint/max-depth': 'off', // → src/strict で有効化
        'eslint/max-lines': 'off', // → src/strict で有効化
        'eslint/max-lines-per-function': 'off', // → src/strict で有効化
        'eslint/max-nested-callbacks': 'off', // → src/strict で有効化
        'eslint/max-statements': 'off', // → src/strict で有効化
        'eslint/no-inline-comments': 'off', // → src/strict で有効化
        'eslint/no-magic-numbers': 'off', // → src/strict で有効化
        'eslint/no-ternary': 'off', // → src/strict で有効化
        'eslint/no-void': 'off', // → src/strict で有効化
        'eslint/one-var': 'off', // → src/strict で有効化
        'eslint/sort-imports': 'off', // → src/strict で有効化
        'eslint/sort-keys': 'off', // → src/strict で有効化
        'eslint/sort-vars': 'off', // → src/strict で有効化
        'eslint/vars-on-top': 'off', // → src/strict で有効化

        // ---- 素の script（非モジュール）でしか成立しないため再現できないもの ----
        // oxlint は .cts / .cjs も CommonJS モジュールとして解釈するため、
        // 「script かどうか」を条件にするこれらのルールは発火させられない
        'eslint/no-implicit-globals': 'off', // 暗黙のグローバル宣言を禁止
        'eslint/no-with': 'off', // with 文を禁止（strict mode では構文エラー）
      },
    },
    // ----------------------------------------------------------------
    // packages/valid/src/strict, packages/invalid/src/strict :
    //   上のグループと同時には成立しない「厳格ルール」だけを追加で有効化する
    // ----------------------------------------------------------------
    {
      files: ['packages/valid/src/strict/**', 'packages/invalid/src/strict/**'],
      plugins: ['eslint'],
      rules: {
        'eslint/capitalized-comments': 'error', // コメントは大文字始まりにする
        'eslint/complexity': ['error', { max: 3 }], // 循環的複雑度の上限
        'eslint/func-style': ['error', 'expression'], // 関数は関数式で定義する
        'eslint/id-length': ['error', { min: 3 }], // 識別子の最小文字数
        'eslint/max-classes-per-file': ['error', 1], // 1 ファイル 1 クラスまで
        'eslint/max-depth': ['error', { max: 2 }], // ブロックのネストの上限
        'eslint/max-lines': ['error', { max: 30 }], // 1 ファイルの行数の上限
        'eslint/max-lines-per-function': ['error', { max: 10 }], // 1 関数の行数の上限
        'eslint/max-nested-callbacks': ['error', { max: 2 }], // コールバックのネストの上限
        'eslint/max-statements': ['error', { max: 5 }], // 1 関数の文の数の上限
        'eslint/no-inline-comments': 'error', // コードと同じ行のコメントを禁止
        'eslint/no-magic-numbers': 'error', // 名前の無い数値リテラルを禁止
        'eslint/no-ternary': 'error', // 三項演算子を禁止
        'eslint/no-void': 'error', // void 演算子を禁止
        'eslint/one-var': ['error', 'never'], // 変数宣言はひとつずつ書く
        'eslint/sort-imports': 'error', // import を並び替える
        'eslint/sort-keys': 'error', // オブジェクトのキーを並び替える
        'eslint/sort-vars': 'error', // 同一宣言内の変数を並び替える
        'eslint/vars-on-top': 'error', // var 宣言はスコープの先頭にまとめる
      },
    },
    // ================================================================
    // packages/typescript-* : typescript プラグイン（110 ルール）
    //   このうち 59 ルールは型情報が必要なため --type-aware でのみ動作する。
    //   それらは packages/type-aware-* 側で検証している。
    // ================================================================
    {
      files: ['packages/typescript-valid/**', 'packages/typescript-invalid/**'],
      plugins: ['typescript'],
      rules: {
        'typescript/adjacent-overload-signatures': 'error', // 同名シグネチャは隣接させる
        'typescript/array-type': ['error', { default: 'generic' }], // 配列型は Array<T> 表記に統一
        'typescript/ban-ts-comment': 'error', // @ts-ignore などの抑制コメントを禁止
        'typescript/ban-tslint-comment': 'error', // tslint: コメントを禁止
        'typescript/ban-types': 'error', // 既定で禁止されている型（Object / Function など）の使用
        'typescript/class-literal-property-style': 'error', // リテラルを返す getter はフィールドに
        'typescript/consistent-generic-constructors': 'error', // 型引数はコンストラクタ側に書く
        'typescript/consistent-indexed-object-style': 'error', // インデックス型より Record
        'typescript/consistent-type-assertions': 'error', // `<T>x` ではなく `x as T`
        'typescript/consistent-type-definitions': ['error', 'interface'], // オブジェクト型は interface
        'typescript/consistent-type-imports': 'error', // 型のみの import は import type
        'typescript/explicit-function-return-type': 'error', // 戻り値の型を明示する
        'typescript/explicit-member-accessibility': 'error', // public / private を明示する
        'typescript/explicit-module-boundary-types': 'error', // 公開 API の型を明示する
        'typescript/method-signature-style': ['error', 'property'], // メソッドはプロパティ構文で
        'typescript/no-confusing-non-null-assertion': 'error', // `a! == b` のような紛らわしい記述
        'typescript/no-duplicate-enum-values': 'error', // enum の値の重複
        'typescript/no-dynamic-delete': 'error', // 動的キーの delete
        'typescript/no-empty-interface': 'error', // 空の interface
        'typescript/no-empty-object-type': 'error', // `{}` 型
        'typescript/no-explicit-any': 'error', // any の使用
        'typescript/no-extra-non-null-assertion': 'error', // `!!` の重ねがけ
        'typescript/no-extraneous-class': 'error', // static だけのクラス
        'typescript/no-import-type-side-effects': 'error', // inline type import を import type に
        'typescript/no-inferrable-types': 'error', // 冗長な型注釈
        'typescript/no-invalid-void-type': 'error', // 不正な位置の void
        'typescript/no-misused-new': 'error', // 誤った new シグネチャ
        'typescript/no-namespace': 'error', // namespace の使用
        'typescript/no-non-null-asserted-nullish-coalescing': 'error', // `a! ?? b`
        'typescript/no-non-null-asserted-optional-chain': 'error', // `a?.b!`
        'typescript/no-non-null-assertion': 'error', // `!` による非 null アサーション
        'typescript/no-require-imports': 'error', // require() の使用
        'typescript/no-restricted-types': ['error', { types: { Symbol: 'symbol を使う' } }], // 禁止する型
        'typescript/no-this-alias': 'error', // this の変数退避
        'typescript/no-unnecessary-parameter-property-assignment': 'error', // 不要な再代入
        'typescript/no-unnecessary-type-constraint': 'error', // `extends any`
        'typescript/no-unsafe-declaration-merging': 'error', // class と interface のマージ
        'typescript/no-unsafe-function-type': 'error', // Function 型
        'typescript/no-useless-empty-export': 'error', // 不要な `export {}`
        'typescript/no-var-requires': 'error', // `const x = require()`
        'typescript/no-wrapper-object-types': 'error', // String / Number などのラッパー型
        'typescript/parameter-properties': 'error', // パラメータプロパティを禁止
        'typescript/prefer-as-const': 'error', // `as 'x'` は `as const`
        'typescript/prefer-enum-initializers': 'error', // enum は初期値を明示
        'typescript/prefer-for-of': 'error', // 添字だけの for は for-of に
        'typescript/prefer-function-type': 'error', // 呼び出しシグネチャのみの interface
        'typescript/prefer-literal-enum-member': 'error', // enum の値はリテラルで
        'typescript/prefer-namespace-keyword': 'error', // `module` ではなく `namespace`
        'typescript/prefer-ts-expect-error': 'error', // @ts-ignore ではなく @ts-expect-error
        'typescript/triple-slash-reference': 'error', // /// <reference> ではなく import
        'typescript/unified-signatures': 'error', // 統合できるオーバーロード
      },
    },
    // ================================================================
    // packages/type-aware-* : typescript プラグインのうち型情報が必要な 59 ルール
    //   実行には --type-aware（または options.typeAware: true）と
    //   oxlint-tsgolint パッケージが必要。
    //     pnpm lint:type-aware
    //   型情報を使うため、tsconfig.json の include に対象ファイルが
    //   含まれている必要がある。
    // ================================================================
    {
      files: ['packages/type-aware-valid/**', 'packages/type-aware-invalid/**'],
      plugins: ['typescript'],
      rules: {
        'typescript/await-thenable': 'error', // Promise 以外を await しない
        'typescript/consistent-return': 'error', // return の有無をそろえる
        'typescript/consistent-type-exports': 'error', // 型のみの export は export type に
        'typescript/dot-notation': 'error', // 文字列キーはドット記法で書く
        'typescript/no-array-delete': 'error', // 配列要素を delete しない
        'typescript/no-base-to-string': 'error', // オブジェクトをそのまま文字列化しない
        'typescript/no-confusing-void-expression': 'error', // void を返す式をそのまま返さない
        'typescript/no-deprecated': 'error', // 非推奨の API を使わない
        'typescript/no-duplicate-type-constituents': 'error', // ユニオンの型の重複
        'typescript/no-floating-promises': 'error', // Promise を放置しない
        'typescript/no-for-in-array': 'error', // 配列に for-in を使わない
        'typescript/no-implied-eval': 'error', // 文字列を評価させない
        'typescript/no-meaningless-void-operator': 'error', // 意味のない void 演算子
        'typescript/no-misused-promises': 'error', // Promise を誤った場所で使わない
        'typescript/no-misused-spread': 'error', // 誤ったスプレッド
        'typescript/no-mixed-enums': 'error', // 数値と文字列が混在した enum
        'typescript/no-redundant-type-constituents': 'error', // 冗長なユニオン構成要素
        'typescript/no-unnecessary-boolean-literal-compare': 'error', // 真偽値との比較は不要
        'typescript/no-unnecessary-condition': 'error', // 常に結果が決まる条件
        'typescript/no-unnecessary-qualifier': 'error', // 不要な名前空間修飾
        'typescript/no-unnecessary-template-expression': 'error', // 不要なテンプレート補間
        'typescript/no-unnecessary-type-arguments': 'error', // 既定値と同じ型引数
        'typescript/no-unnecessary-type-assertion': 'error', // 型が変わらないアサーション
        'typescript/no-unnecessary-type-conversion': 'error', // 不要な型変換
        'typescript/no-unnecessary-type-parameters': 'error', // 一度しか使わない型引数
        'typescript/no-unsafe-argument': 'error', // any を引数に渡さない
        'typescript/no-unsafe-assignment': 'error', // any を代入しない
        'typescript/no-unsafe-call': 'error', // any を呼び出さない
        'typescript/no-unsafe-enum-comparison': 'error', // enum と生の値を比較しない
        'typescript/no-unsafe-member-access': 'error', // any のプロパティを触らない
        'typescript/no-unsafe-return': 'error', // any を返さない
        'typescript/no-unsafe-type-assertion': 'error', // 危険な型アサーション
        'typescript/no-unsafe-unary-minus': 'error', // 数値でない値への単項マイナス
        'typescript/no-useless-default-assignment': 'error', // 無意味な既定値
        'typescript/non-nullable-type-assertion-style': 'error', // `as NonNullable<T>` は `!` に
        'typescript/only-throw-error': 'error', // Error 以外を throw しない
        'typescript/prefer-find': 'error', // filter()[0] ではなく find()
        'typescript/prefer-includes': 'error', // indexOf !== -1 ではなく includes()
        'typescript/prefer-nullish-coalescing': 'error', // || ではなく ??
        'typescript/prefer-optional-chain': 'error', // && の連鎖ではなく ?.
        'typescript/prefer-promise-reject-errors': 'error', // reject には Error を渡す
        'typescript/prefer-readonly': 'error', // 再代入しない private は readonly に
        'typescript/prefer-readonly-parameter-types': 'error', // 変更しない引数は readonly に
        'typescript/prefer-reduce-type-parameter': 'error', // reduce の型引数を使う
        'typescript/prefer-regexp-exec': 'error', // match() ではなく exec()
        'typescript/prefer-return-this-type': 'error', // チェーンの戻り値は this 型に
        'typescript/prefer-string-starts-ends-with': 'error', // startsWith / endsWith を使う
        'typescript/promise-function-async': 'error', // Promise を返す関数は async に
        'typescript/related-getter-setter-pairs': 'error', // getter と setter の型をそろえる
        'typescript/require-array-sort-compare': 'error', // sort() に比較関数を渡す
        'typescript/require-await': 'error', // await の無い async 関数を禁止
        // restrict-plus-operands は tsgolint 側が未実装のため、この版では診断が出ない
        //（型情報つきルール 61 個のうち未実装の 2 個に該当する）
        'typescript/restrict-plus-operands': 'off', // + の左右の型をそろえる
        'typescript/restrict-template-expressions': 'error', // テンプレートに埋め込める型を制限
        'typescript/return-await': 'error', // try の中では await して返す
        'typescript/strict-boolean-expressions': 'error', // 条件式には真偽値を使う
        'typescript/strict-void-return': 'error', // void を期待する場所で値を返さない
        'typescript/switch-exhaustiveness-check': 'error', // switch で全ケースを網羅する
        'typescript/unbound-method': 'error', // メソッドを this から切り離さない
        'typescript/use-unknown-in-catch-callback-variable': 'error', // catch の引数は unknown
      },
    },
    // ================================================================
    // packages/unicorn-* : unicorn プラグイン（138 ルール）
    // ================================================================
    {
      files: ['packages/unicorn-valid/**', 'packages/unicorn-invalid/**'],
      plugins: ['unicorn'],
      rules: {
        'unicorn/catch-error-name': 'error', // catch の引数名は error に統一
        'unicorn/consistent-assert': 'error', // assert は node:assert のものを使う
        'unicorn/consistent-date-clone': 'error', // Date の複製は new Date(date) で書く
        'unicorn/consistent-empty-array-spread': 'error', // 条件付きスプレッドの型をそろえる
        'unicorn/consistent-existence-index-check': 'error', // indexOf の存在判定は !== -1
        'unicorn/consistent-function-scoping': 'error', // 外側を使わない関数は外に出す
        'unicorn/consistent-template-literal-escape': 'error', // テンプレート内のエスケープをそろえる
        'unicorn/custom-error-definition': 'error', // 独自エラーの定義方法をそろえる
        'unicorn/empty-brace-spaces': 'error', // 空ブロック内の空白を禁止
        'unicorn/error-message': 'error', // Error にメッセージを必須にする
        'unicorn/escape-case': 'error', // エスケープシーケンスは大文字
        'unicorn/explicit-length-check': 'error', // length は明示的に比較する
        'unicorn/explicit-timer-delay': 'error', // タイマーの遅延時間を明示する
        'unicorn/filename-case': 'error', // ファイル名は kebab-case
        'unicorn/import-style': 'error', // モジュールごとの import 形式をそろえる
        'unicorn/max-nested-calls': 'error', // 呼び出しのネストの上限
        'unicorn/new-for-builtins': 'error', // 組み込みは new を付けて呼ぶ
        'unicorn/no-abusive-eslint-disable': 'error', // ルール名なしの disable コメントを禁止
        'unicorn/no-accessor-recursion': 'error', // 自分自身を参照する getter / setter
        'unicorn/no-anonymous-default-export': 'error', // 無名の default export
        'unicorn/no-array-callback-reference': 'error', // コールバックに関数参照を直接渡さない
        'unicorn/no-array-fill-with-reference-type': 'error', // fill に参照型を渡さない
        'unicorn/no-array-for-each': 'error', // forEach ではなく for-of
        'unicorn/no-array-method-this-argument': 'error', // 配列メソッドの thisArg を使わない
        'unicorn/no-array-reduce': 'error', // reduce を禁止
        'unicorn/no-array-reverse': 'error', // 破壊的な reverse() を禁止
        'unicorn/no-array-sort': 'error', // 破壊的な sort() を禁止
        'unicorn/no-await-expression-member': 'error', // (await x).y を禁止
        'unicorn/no-await-in-promise-methods': 'error', // Promise.all の中の await
        'unicorn/no-confusing-array-with': 'error', // 紛らわしい Array#with
        'unicorn/no-console-spaces': 'error', // console 引数の余分な空白
        'unicorn/no-document-cookie': 'error', // document.cookie への代入
        'unicorn/no-empty-file': 'error', // 空ファイルを禁止
        'unicorn/no-hex-escape': 'error', // \x エスケープを禁止
        'unicorn/no-immediate-mutation': 'error', // 生成直後の破壊的変更を禁止
        'unicorn/no-instanceof-array': 'error', // instanceof Array を禁止
        'unicorn/no-instanceof-builtins': 'error', // 組み込み型の instanceof を禁止
        'unicorn/no-invalid-fetch-options': 'error', // GET/HEAD に body を渡さない
        'unicorn/no-invalid-remove-event-listener': 'error', // 解除できないリスナー登録
        'unicorn/no-length-as-slice-end': 'error', // slice の終端に length を渡さない
        'unicorn/no-lonely-if': 'error', // 入れ子の単独 if
        'unicorn/no-magic-array-flat-depth': 'error', // flat() の深さに数値リテラルを直接書かない
        'unicorn/no-negated-condition': 'error', // 否定条件 + else
        'unicorn/no-negation-in-equality-check': 'error', // !a === b
        'unicorn/no-nested-ternary': 'error', // 三項演算子のネスト
        'unicorn/no-new-array': 'error', // new Array(n)
        'unicorn/no-new-buffer': 'error', // new Buffer を禁止
        'unicorn/no-null': 'error', // null ではなく undefined
        'unicorn/no-object-as-default-parameter': 'error', // オブジェクトを既定値にしない
        'unicorn/no-process-exit': 'error', // process.exit()
        'unicorn/no-single-promise-in-promise-methods': 'error', // 要素 1 つの Promise.all
        'unicorn/no-static-only-class': 'error', // static だけのクラス
        'unicorn/no-thenable': 'error', // then という名前のメンバー
        'unicorn/no-this-assignment': 'error', // this の変数退避
        'unicorn/no-typeof-undefined': 'error', // typeof x === 'undefined'
        'unicorn/no-unnecessary-array-flat-depth': 'error', // 既定値と同じ flat の深さ
        'unicorn/no-unnecessary-array-splice-count': 'error', // 末尾までの splice の第 2 引数
        'unicorn/no-unnecessary-await': 'error', // Promise でない値への await
        'unicorn/no-unnecessary-slice-end': 'error', // 末尾までの slice の第 2 引数
        'unicorn/no-unreadable-array-destructuring': 'error', // 空要素だらけの分割代入
        'unicorn/no-unreadable-iife': 'error', // 読みにくい即時実行関数
        'unicorn/no-useless-collection-argument': 'error', // Set / Map への空引数
        'unicorn/no-useless-error-capture-stack-trace': 'error', // 不要な captureStackTrace
        'unicorn/no-useless-fallback-in-spread': 'error', // スプレッド内の `|| {}`
        'unicorn/no-useless-iterator-to-array': 'error', // 不要な iterator → 配列変換
        'unicorn/no-useless-length-check': 'error', // some/every の前の length チェック
        'unicorn/no-useless-promise-resolve-reject': 'error', // 不要な Promise.resolve
        'unicorn/no-useless-spread': 'error', // 不要なスプレッド
        'unicorn/no-useless-switch-case': 'error', // default と同じ内容の case
        'unicorn/no-useless-undefined': 'error', // 不要な undefined
        'unicorn/no-zero-fractions': 'error', // 1.0 のような表記
        'unicorn/number-literal-case': 'error', // 数値リテラルの大文字小文字
        'unicorn/numeric-separators-style': 'error', // 桁区切り（1_000_000）
        'unicorn/prefer-add-event-listener': 'error', // onclick ではなく addEventListener
        'unicorn/prefer-array-find': 'error', // filter()[0] ではなく find()
        'unicorn/prefer-array-flat': 'error', // concat(...x) ではなく flat()
        'unicorn/prefer-array-flat-map': 'error', // map().flat() ではなく flatMap()
        'unicorn/prefer-array-index-of': 'error', // findIndex ではなく indexOf
        'unicorn/prefer-array-some': 'error', // find() の真偽判定は some()
        'unicorn/prefer-at': 'error', // arr[arr.length - 1] ではなく at(-1)
        'unicorn/prefer-bigint-literals': 'error', // BigInt(1) ではなく 1n
        'unicorn/prefer-blob-reading-methods': 'error', // FileReader ではなく blob.text()
        'unicorn/prefer-class-fields': 'error', // 定数の代入はクラスフィールドで書く
        'unicorn/prefer-classlist-toggle': 'error', // add / remove の分岐は toggle に
        'unicorn/prefer-code-point': 'error', // charCodeAt ではなく codePointAt
        'unicorn/prefer-date-now': 'error', // new Date().getTime() ではなく Date.now()
        'unicorn/prefer-default-parameters': 'error', // 既定値は引数側で書く
        'unicorn/prefer-dom-node-append': 'error', // appendChild ではなく append
        'unicorn/prefer-dom-node-dataset': 'error', // data-* は dataset で読む
        'unicorn/prefer-dom-node-remove': 'error', // removeChild ではなく remove()
        'unicorn/prefer-dom-node-text-content': 'error', // innerText ではなく textContent
        'unicorn/prefer-event-target': 'error', // EventEmitter ではなく EventTarget
        'unicorn/prefer-export-from': 'error', // import してすぐ export するなら export from
        'unicorn/prefer-global-this': 'error', // window ではなく globalThis
        'unicorn/prefer-import-meta-properties': 'error', // import.meta.dirname などを使う
        'unicorn/prefer-includes': 'error', // indexOf !== -1 ではなく includes()
        'unicorn/prefer-keyboard-event-key': 'error', // keyCode ではなく key
        'unicorn/prefer-logical-operator-over-ternary': 'error', // x ? x : y は x ?? y
        'unicorn/prefer-math-min-max': 'error', // 三項演算子ではなく Math.min/max
        'unicorn/prefer-math-trunc': 'error', // ~~x ではなく Math.trunc()
        'unicorn/prefer-modern-dom-apis': 'error', // insertAdjacent* ではなく before/after
        'unicorn/prefer-modern-math-apis': 'error', // Math.log2 などを使う
        'unicorn/prefer-module': 'error', // CommonJS ではなく ES モジュール
        'unicorn/prefer-native-coercion-functions': 'error', // (v) => String(v) は String
        'unicorn/prefer-negative-index': 'error', // slice(-1) の書き方
        'unicorn/prefer-node-protocol': 'error', // 'node:' プロトコルを付ける
        'unicorn/prefer-number-coercion': 'error', // 単項プラスではなく Number()
        'unicorn/prefer-number-properties': 'error', // Number.parseInt などを使う
        'unicorn/prefer-object-from-entries': 'error', // Object.fromEntries()
        'unicorn/prefer-optional-catch-binding': 'error', // 使わない catch 引数は省略
        'unicorn/prefer-prototype-methods': 'error', // Object.prototype.toString を使う
        'unicorn/prefer-query-selector': 'error', // querySelector を使う
        'unicorn/prefer-reflect-apply': 'error', // Reflect.apply() を使う
        'unicorn/prefer-regexp-test': 'error', // match() ではなく test()
        'unicorn/prefer-response-static-json': 'error', // Response.json() を使う
        'unicorn/prefer-set-has': 'error', // 繰り返し includes するなら Set にする
        'unicorn/prefer-set-size': 'error', // [...set].length ではなく set.size
        'unicorn/prefer-single-call': 'error', // push などはまとめて 1 回で呼ぶ
        'unicorn/prefer-spread': 'error', // Array.from ではなくスプレッド
        'unicorn/prefer-string-raw': 'error', // String.raw を使う
        'unicorn/prefer-string-replace-all': 'error', // replaceAll() を使う
        'unicorn/prefer-string-slice': 'error', // substr/substring ではなく slice()
        'unicorn/prefer-string-starts-ends-with': 'error', // startsWith/endsWith を使う
        'unicorn/prefer-string-trim-start-end': 'error', // trimStart/trimEnd を使う
        'unicorn/prefer-structured-clone': 'error', // structuredClone() を使う
        'unicorn/prefer-ternary': 'error', // 代入だけの if/else は三項演算子に
        'unicorn/prefer-top-level-await': 'error', // main().then() ではなくトップレベル await
        'unicorn/prefer-type-error': 'error', // 型チェック失敗は TypeError
        'unicorn/relative-url-style': 'error', // 相対 URL の書き方をそろえる
        'unicorn/require-array-join-separator': 'error', // join() の区切り文字を明示
        'unicorn/require-module-attributes': 'error', // 動的 import に import attributes を付ける
        'unicorn/require-module-specifiers': 'error', // import する名前を明示する
        'unicorn/require-number-to-fixed-digits-argument': 'error', // toFixed() の桁数を明示
        'unicorn/require-post-message-target-origin': 'error', // postMessage に targetOrigin を渡す
        'unicorn/switch-case-braces': 'error', // case にブレースを付ける
        'unicorn/switch-case-break-position': 'error', // break の位置をそろえる
        'unicorn/text-encoding-identifier-case': 'error', // 'utf8' 表記に統一
        'unicorn/throw-new-error': 'error', // Error は new を付けて投げる
      },
    },
    // ================================================================
    // packages/oxc-* : oxc プラグイン（27 ルール）
    //   他のリンタには無い、oxlint 独自のルール
    // ================================================================
    {
      files: ['packages/oxc-valid/**', 'packages/oxc-invalid/**'],
      plugins: ['oxc'],
      rules: {
        'oxc/approx-constant': 'error', // Math.PI などを手打ちしている
        'oxc/bad-array-method-on-arguments': 'error', // arguments に配列メソッド
        'oxc/bad-bitwise-operator': 'error', // 論理演算のつもりのビット演算
        'oxc/bad-char-at-comparison': 'error', // charAt() と複数文字の比較
        'oxc/bad-comparison-sequence': 'error', // a < b < c
        'oxc/bad-match-all-arg': 'error', // matchAll に g フラグが無い
        'oxc/bad-min-max-func': 'error', // 常に定数になる min/max
        'oxc/bad-object-literal-comparison': 'error', // オブジェクトリテラルとの比較
        'oxc/bad-replace-all-arg': 'error', // replaceAll に g フラグが無い
        'oxc/branches-sharing-code': 'error', // 分岐が同じコードを共有している
        'oxc/const-comparisons': 'error', // 常に true / false になる比較
        'oxc/double-comparisons': 'error', // `a < b || a === b`
        'oxc/erasing-op': 'error', // 常に 0 になる演算
        'oxc/misrefactored-assign-op': 'error', // `a += a + b`
        'oxc/missing-throw': 'error', // Error を作って throw していない
        'oxc/no-accumulating-spread': 'error', // ループ内でのスプレッド蓄積
        'oxc/no-async-endpoint-handlers': 'error', // async なエンドポイントハンドラ
        'oxc/no-const-enum': 'error', // const enum を禁止
        'oxc/no-map-spread': 'error', // map 内のスプレッド
        'oxc/no-this-in-exported-function': 'error', // export した関数内の this
        'oxc/number-arg-out-of-range': 'error', // 範囲外の数値引数
        'oxc/only-used-in-recursion': 'error', // 再帰でしか使われない引数
        'oxc/uninvoked-array-callback': 'error', // 呼ばれないコールバック

        // ---- 以下は他のサンプルと同時に有効化できないため src/strict で扱う ----
        'oxc/no-async-await': 'off', // → src/strict で有効化
        'oxc/no-barrel-file': 'off', // 100 モジュール超の `export *` が必要で再現できない
        'oxc/no-optional-chaining': 'off', // → src/strict で有効化
        'oxc/no-rest-spread-properties': 'off', // → src/strict で有効化
      },
    },
    // ----------------------------------------------------------------
    // packages/*/src/strict : 言語機能そのものを制限するルール
    // ----------------------------------------------------------------
    {
      files: ['packages/oxc-valid/src/strict/**', 'packages/oxc-invalid/src/strict/**'],
      plugins: ['oxc'],
      rules: {
        'oxc/no-async-await': 'error', // async / await の使用を禁止
        // no-barrel-file は `export *` が 100 モジュール超のサブツリーを読み込む場合にだけ
        // 報告されるため、このリポジトリの規模では再現できない
        'oxc/no-barrel-file': 'off', // バレルファイルを禁止
        'oxc/no-optional-chaining': 'error', // ?. の使用を禁止
        'oxc/no-rest-spread-properties': 'error', // オブジェクトのレスト / スプレッドを禁止
      },
    },
    // ================================================================
    // packages/promise-* : promise プラグイン（16 ルール）
    // ================================================================
    {
      files: ['packages/promise-valid/**', 'packages/promise-invalid/**'],
      plugins: ['promise'],
      rules: {
        'promise/always-return': 'error', // then では必ず値を返すか throw する
        'promise/avoid-new': 'error', // new Promise を避ける
        'promise/catch-or-return': 'error', // Promise は catch するか return する
        'promise/no-callback-in-promise': 'error', // then の中でコールバックを呼ばない
        'promise/no-multiple-resolved': 'error', // 複数回 resolve / reject しない
        'promise/no-nesting': 'error', // then のネストを禁止
        'promise/no-new-statics': 'error', // new Promise.resolve() を禁止
        'promise/no-promise-in-callback': 'error', // コールバック内の Promise を禁止
        'promise/no-return-in-finally': 'error', // finally での return を禁止
        'promise/no-return-wrap': 'error', // then 内の Promise.resolve を禁止
        'promise/param-names': 'error', // executor の引数名を resolve / reject に
        'promise/prefer-await-to-callbacks': 'error', // コールバックより async/await
        'promise/prefer-await-to-then': 'error', // then より await
        'promise/prefer-catch': 'error', // then の第 2 引数より catch()
        'promise/spec-only': 'error', // 仕様外の Promise メソッドを禁止
        'promise/valid-params': 'error', // Promise メソッドの引数の個数を検証
      },
    },
    // ================================================================
    // packages/node-* : node プラグイン（11 ルール）
    //   CommonJS 特有のルールは .cts ファイルで検証している
    // ================================================================
    {
      files: ['packages/node-valid/**', 'packages/node-invalid/**'],
      plugins: ['node'],
      env: { node: true }, // このパターンでは Node.js のグローバルを有効にする
      rules: {
        'node/callback-return': 'error', // コールバックは return を付けて呼ぶ
        'node/exports-style': ['error', 'module.exports'], // module.exports に統一
        'node/global-require': 'error', // require はトップレベルで呼ぶ
        'node/handle-callback-err': 'error', // エラー引数を必ず処理する
        'node/no-exports-assign': 'error', // exports 自体への代入を禁止
        'node/no-mixed-requires': 'error', // require と他の宣言を混ぜない
        'node/no-new-require': 'error', // new require(...) を禁止
        'node/no-path-concat': 'error', // パスの文字列連結を禁止
        'node/no-process-env': 'error', // process.env の直接参照を禁止
        'node/no-sync': 'error', // 同期 API を禁止
        'node/no-top-level-await': 'error', // トップレベル await を禁止
      },
    },
    // ================================================================
    // packages/jsdoc-* : jsdoc プラグイン（23 ルール）
    //   settings.jsdoc の tagNamePreference（@return → @returns など）も効く
    // ================================================================
    {
      files: ['packages/jsdoc-valid/**', 'packages/jsdoc-invalid/**'],
      plugins: ['jsdoc'],
      rules: {
        'jsdoc/check-access': 'error', // @access の値を検証
        'jsdoc/check-property-names': 'error', // @property の名前を検証
        'jsdoc/check-tag-names': 'error', // 存在しないタグ名を検出
        'jsdoc/empty-tags': 'error', // 内容を持てないタグに内容が書かれている
        'jsdoc/implements-on-classes': 'error', // @implements はクラスのみ
        'jsdoc/no-blank-blocks': 'error', // 空の JSDoc ブロック
        'jsdoc/no-defaults': 'error', // @param に既定値を書かない
        'jsdoc/require-param': 'error', // 引数には @param を書く
        'jsdoc/require-param-description': 'error', // @param に説明を書く
        'jsdoc/require-param-name': 'error', // @param に名前を書く
        'jsdoc/require-param-type': 'error', // @param に型を書く
        'jsdoc/require-property': 'error', // @typedef {object} には @property を書く
        'jsdoc/require-property-description': 'error', // @property に説明を書く
        'jsdoc/require-property-name': 'error', // @property に名前を書く
        'jsdoc/require-property-type': 'error', // @property に型を書く
        'jsdoc/require-returns': 'error', // 戻り値には @returns を書く
        'jsdoc/require-returns-description': 'error', // @returns に説明を書く
        'jsdoc/require-returns-type': 'error', // @returns に型を書く
        'jsdoc/require-throws-description': 'error', // @throws に説明を書く
        'jsdoc/require-throws-type': 'error', // @throws に型を書く
        'jsdoc/require-yields': 'error', // ジェネレータには @yields を書く
        'jsdoc/require-yields-description': 'error', // @yields に説明を書く
        'jsdoc/require-yields-type': 'error', // @yields に型を書く
      },
    },
    // ================================================================
    // packages/import-* : import プラグイン（33 ルール）
    //   モジュール解決を伴うため、他のプラグインより実行コストが高い
    // ================================================================
    {
      files: ['packages/import-valid/**', 'packages/import-invalid/**'],
      plugins: ['import'],
      rules: {
        'import/consistent-type-specifier-style': 'error', // 型指定子の書き方をそろえる
        'import/default': 'error', // default export が無いモジュールからの default import
        'import/export': 'error', // 同じ名前の重複 export
        'import/extensions': ['error', 'always'], // import パスに拡張子を必須にする
        'import/first': 'error', // import はファイルの先頭にまとめる
        'import/max-dependencies': ['error', { max: 5 }], // 依存モジュール数の上限
        // named は TypeScript ファイルでは報告されない（tsc が同等の検査を行うため）。
        // このリポジトリは .ts / .tsx のみなので off にしている
        'import/named': 'off', // 存在しない名前付き import
        'import/namespace': 'error', // 名前空間 import の存在しないメンバー参照
        'import/newline-after-import': 'error', // import の後に空行を入れる
        'import/no-absolute-path': 'error', // 絶対パス import を禁止
        'import/no-amd': 'error', // AMD の define / require を禁止
        'import/no-anonymous-default-export': 'error', // 無名の default export を禁止
        'import/no-commonjs': 'error', // require / module.exports を禁止
        'import/no-cycle': 'error', // 循環 import を禁止
        'import/no-duplicates': 'error', // 同一モジュールの重複 import を禁止
        'import/no-dynamic-require': 'error', // 動的 require を禁止
        'import/no-empty-named-blocks': 'error', // 空の名前付き import を禁止
        'import/no-mutable-exports': 'error', // let / var の export を禁止
        'import/no-named-as-default': 'error', // default を名前付き export と同名で受けない
        'import/no-named-as-default-member': 'error', // default 経由で名前付き export を参照しない
        'import/no-named-default': 'error', // `{ default as x }` を禁止
        'import/no-namespace': 'error', // 名前空間 import を禁止
        'import/no-relative-parent-imports': 'error', // 親ディレクトリへの相対 import を禁止
        'import/no-self-import': 'error', // 自己 import を禁止
        'import/no-unassigned-import': 'error', // 副作用だけの import を禁止
        'import/no-webpack-loader-syntax': 'error', // ローダー構文を禁止
        'import/unambiguous': 'error', // ES モジュールと判別できるファイルにする

        // ---- 以下は同時に有効化できないため、サブディレクトリで扱う ----
        'import/no-default-export': 'off', // → src/grouped-exports で有効化
        'import/no-named-export': 'off', // → src/default-only で有効化
        'import/prefer-default-export': 'off', // → src/default-only で有効化
        'import/exports-last': 'off', // → src/grouped-exports で有効化
        'import/group-exports': 'off', // → src/grouped-exports で有効化
        'import/no-nodejs-modules': 'off', // → src/grouped-exports で有効化
      },
    },
    // ----------------------------------------------------------------
    // packages/*/src/default-only : default export に寄せるルール
    // ----------------------------------------------------------------
    {
      files: [
        'packages/import-valid/src/default-only/**',
        'packages/import-invalid/src/default-only/**',
      ],
      plugins: ['import'],
      rules: {
        'import/no-named-export': 'error', // 名前付き export を禁止
        'import/prefer-default-export': 'error', // export がひとつなら default export に
      },
    },
    // ----------------------------------------------------------------
    // packages/*/src/grouped-exports : 名前付き export に寄せるルール
    // ----------------------------------------------------------------
    {
      files: [
        'packages/import-valid/src/grouped-exports/**',
        'packages/import-invalid/src/grouped-exports/**',
      ],
      plugins: ['import'],
      rules: {
        'import/exports-last': 'error', // export はファイルの末尾にまとめる
        'import/group-exports': 'error', // export 文はひとつにまとめる
        'import/no-default-export': 'error', // default export を禁止
        'import/no-nodejs-modules': 'error', // Node.js 組み込みモジュールを禁止
      },
    },
    // ================================================================
    // packages/jsx-a11y-* : jsx-a11y プラグイン（36 ルール）
    //   settings['jsx-a11y'] の components / attributes / polymorphicPropName も効く
    // ================================================================
    {
      files: ['packages/jsx-a11y-valid/**', 'packages/jsx-a11y-invalid/**'],
      plugins: ['jsx-a11y'],
      rules: {
        'jsx-a11y/alt-text': 'error', // img などに代替テキストを付ける
        'jsx-a11y/anchor-ambiguous-text': 'error', // 「click here」など曖昧なリンク文言を禁止
        'jsx-a11y/anchor-has-content': 'error', // a には内容を持たせる
        'jsx-a11y/anchor-is-valid': 'error', // href の無い a を禁止
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error', // tabIndex とセットで使う
        'jsx-a11y/aria-props': 'error', // 存在しない aria-* 属性を禁止
        'jsx-a11y/aria-proptypes': 'error', // aria 属性の値の型を検証
        'jsx-a11y/aria-role': 'error', // 存在しない role を禁止
        'jsx-a11y/aria-unsupported-elements': 'error', // aria 非対応要素への指定を禁止
        'jsx-a11y/autocomplete-valid': 'error', // autocomplete の値を検証
        'jsx-a11y/click-events-have-key-events': 'error', // onClick にはキーボード操作も
        'jsx-a11y/control-has-associated-label': 'error', // コントロールにラベルを付ける
        'jsx-a11y/heading-has-content': 'error', // 見出しに内容を持たせる
        'jsx-a11y/html-has-lang': 'error', // html に lang を付ける
        'jsx-a11y/iframe-has-title': 'error', // iframe に title を付ける
        'jsx-a11y/img-redundant-alt': 'error', // alt に「画像」などの語を入れない
        'jsx-a11y/interactive-supports-focus': 'error', // 対話的な要素はフォーカス可能にする
        'jsx-a11y/label-has-associated-control': 'error', // label にコントロールを紐付ける
        'jsx-a11y/lang': 'error', // lang の値を検証
        'jsx-a11y/media-has-caption': 'error', // video / audio に字幕を付ける
        'jsx-a11y/mouse-events-have-key-events': 'error', // マウス操作にキーボード操作も
        'jsx-a11y/no-access-key': 'error', // accessKey を禁止
        'jsx-a11y/no-aria-hidden-on-focusable': 'error', // フォーカス可能要素の aria-hidden を禁止
        'jsx-a11y/no-autofocus': 'error', // autoFocus を禁止
        'jsx-a11y/no-distracting-elements': 'error', // marquee / blink を禁止
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error', // role の付け替えを禁止
        'jsx-a11y/no-noninteractive-element-interactions': 'error', // 非対話要素のハンドラを禁止
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error', // role の付け替えを禁止
        'jsx-a11y/no-noninteractive-tabindex': 'error', // 非対話要素の tabIndex を禁止
        'jsx-a11y/no-redundant-roles': 'error', // 冗長な role を禁止
        'jsx-a11y/no-static-element-interactions': 'error', // 静的要素のハンドラを禁止
        'jsx-a11y/prefer-tag-over-role': 'error', // role より意味のあるタグを使う
        'jsx-a11y/role-has-required-aria-props': 'error', // role の必須 aria 属性を検証
        'jsx-a11y/role-supports-aria-props': 'error', // role がサポートする aria 属性を検証
        'jsx-a11y/scope': 'error', // scope は th にだけ指定する
        'jsx-a11y/tabindex-no-positive': 'error', // 正の tabIndex を禁止
      },
    },
    // ================================================================
    // packages/nextjs-* : nextjs プラグイン（21 ルール）
    //   settings.next.rootDir でプロジェクトのルートを指定している
    // ================================================================
    {
      files: ['packages/nextjs-valid/**', 'packages/nextjs-invalid/**'],
      plugins: ['nextjs', 'react'],
      rules: {
        'nextjs/google-font-display': 'error', // Google Fonts に display を指定する
        'nextjs/google-font-preconnect': 'error', // fonts.gstatic.com に preconnect を付ける
        'nextjs/inline-script-id': 'error', // インライン Script には id を付ける
        'nextjs/next-script-for-ga': 'error', // Google Analytics は next/script で読み込む
        'nextjs/no-assign-module-variable': 'error', // module 変数への代入を禁止
        'nextjs/no-async-client-component': 'error', // async なクライアントコンポーネントを禁止
        'nextjs/no-before-interactive-script-outside-document': 'error', // Script の配置を検証
        'nextjs/no-css-tags': 'error', // 手書きの CSS link タグを禁止
        'nextjs/no-document-import-in-page': 'error', // ページからの next/document import を禁止
        'nextjs/no-duplicate-head': 'error', // Head の重複を禁止
        'nextjs/no-head-element': 'error', // 生の head 要素を禁止
        'nextjs/no-head-import-in-document': 'error', // _document での next/head を禁止
        'nextjs/no-html-link-for-pages': 'error', // 内部リンクは next/link を使う
        'nextjs/no-img-element': 'error', // img ではなく next/image を使う
        'nextjs/no-page-custom-font': 'error', // ページ単位のカスタムフォントを禁止
        'nextjs/no-script-component-in-head': 'error', // Head の中の Script を禁止
        'nextjs/no-styled-jsx-in-document': 'error', // _document 内の styled-jsx を禁止
        'nextjs/no-sync-scripts': 'error', // 同期読み込みの script を禁止
        'nextjs/no-title-in-document-head': 'error', // _document の title を禁止
        'nextjs/no-typos': 'error', // Next.js の予約関数名のタイポを検出
        'nextjs/no-unwanted-polyfillio': 'error', // 不要な polyfill.io を禁止
      },
    },
    // ================================================================
    // packages/react-perf-* : react-perf プラグイン（4 ルール）
    //   毎回新しい参照を props に渡すと、子コンポーネントが不要に再レンダーされる
    // ================================================================
    {
      files: ['packages/react-perf-valid/**', 'packages/react-perf-invalid/**'],
      plugins: ['react-perf', 'react'],
      rules: {
        'react-perf/jsx-no-jsx-as-prop': 'error', // JSX を props に直接渡さない
        'react-perf/jsx-no-new-array-as-prop': 'error', // 配列リテラルを props に直接渡さない
        'react-perf/jsx-no-new-function-as-prop': 'error', // 関数を props に直接渡さない
        'react-perf/jsx-no-new-object-as-prop': 'error', // オブジェクトを props に直接渡さない
      },
    },
    // ================================================================
    // packages/react-* : react プラグイン（85 ルール）
    //   settings.react の version / linkComponents / formComponents /
    //   componentWrapperFunctions も効く
    // ================================================================
    {
      files: ['packages/react-valid/**', 'packages/react-invalid/**'],
      plugins: ['react'],
      rules: {
        'react/button-has-type': 'error', // button には type を明示する
        'react/capitalized-calls': 'error', // コンポーネントを関数として直接呼ばない
        'react/checked-requires-onchange-or-readonly': 'error', // checked には onChange か readOnly
        'react/display-name': 'error', // コンポーネントに表示名を付ける
        'react/error-boundaries': 'error', // エラーバウンダリの実装を検証
        'react/exhaustive-deps': 'error', // フックの依存配列を網羅する
        'react/exhaustive-effect-dependencies': 'error', // effect の依存配列を網羅する
        'react/forward-ref-uses-ref': 'error', // forwardRef では ref を使う
        'react/function-component-definition': [
          'error',
          { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ], // 関数コンポーネントはアロー関数で定義する
        'react/globals': 'error', // React が予約するグローバルの誤用を検出
        'react/hook-use-state': 'error', // useState の分割代入の命名をそろえる
        'react/hooks': 'error', // フックの使い方を検証
        'react/iframe-missing-sandbox': 'error', // iframe に sandbox を指定する
        'react/immutability': 'error', // props / state を書き換えない
        'react/incompatible-library': 'error', // React Compiler と相性の悪い書き方を検出
        // invariant は React Compiler 内部のバグを報告するルールなので、
        // 意図的に発生させることができない
        'react/invariant': 'off', // React 内部の不変条件違反を検出
        'react/jsx-boolean-value': 'error', // 真偽値 props の書き方をそろえる
        'react/jsx-curly-brace-presence': 'error', // 不要な波括弧を禁止
        'react/jsx-fragments': 'error', // フラグメントの書き方をそろえる
        'react/jsx-handler-names': 'error', // ハンドラ名の付け方をそろえる
        'react/jsx-key': 'error', // リストには key を付ける
        'react/jsx-max-depth': ['error', { max: 3 }], // JSX のネストの上限
        'react/jsx-no-comment-textnodes': 'error', // JSX 内のコメント風テキストを検出
        'react/jsx-no-constructed-context-values': 'error', // Context の value を毎回作らない
        'react/jsx-no-duplicate-props': 'error', // props の重複を禁止
        'react/jsx-no-script-url': 'error', // javascript: URL を禁止
        'react/jsx-no-target-blank': 'error', // target="_blank" には rel を付ける
        'react/jsx-no-undef': 'error', // 未定義のコンポーネントを禁止
        'react/jsx-no-useless-fragment': 'error', // 不要なフラグメントを禁止
        'react/jsx-pascal-case': 'error', // コンポーネント名は PascalCase
        'react/jsx-props-no-spread-multi': 'error', // 同じスプレッドの重複を禁止
        'react/jsx-props-no-spreading': 'error', // props のスプレッドを禁止
        'react/memo-dependencies': 'error', // memo 化の依存関係を検証
        'react/no-array-index-key': 'error', // 配列の添字を key にしない
        'react/no-children-prop': 'error', // children を props で渡さない
        'react/no-clone-element': 'error', // cloneElement を避ける
        'react/no-danger': 'error', // dangerouslySetInnerHTML を禁止
        'react/no-danger-with-children': 'error', // dangerouslySetInnerHTML と子要素の併用を禁止
        'react/no-deriving-state-in-effects': 'error', // effect で state を導出しない
        'react/no-did-mount-set-state': 'error', // componentDidMount の setState を禁止
        'react/no-did-update-set-state': 'error', // componentDidUpdate の setState を禁止
        'react/no-direct-mutation-state': 'error', // state の直接変更を禁止
        'react/no-find-dom-node': 'error', // findDOMNode を禁止
        'react/no-is-mounted': 'error', // isMounted() を禁止
        'react/no-namespace': 'error', // 名前空間付き JSX 要素を禁止
        'react/no-object-type-as-default-prop': 'error', // オブジェクトを既定値にしない
        'react/no-react-children': 'error', // React.Children API を避ける
        'react/no-redundant-should-component-update': 'error', // 冗長な shouldComponentUpdate
        'react/no-render-return-value': 'error', // render() の戻り値を使わない
        'react/no-string-refs': 'error', // 文字列 ref を禁止
        'react/no-this-in-sfc': 'error', // 関数コンポーネント内の this を禁止
        'react/no-unescaped-entities': 'error', // エスケープしていない文字を検出
        'react/no-unknown-property': 'error', // 存在しない DOM 属性を禁止
        'react/no-unsafe': 'error', // UNSAFE_ 系ライフサイクルを禁止
        'react/no-unstable-nested-components': 'error', // 入れ子のコンポーネント定義を禁止
        'react/no-will-update-set-state': 'error', // componentWillUpdate の setState を禁止
        'react/only-export-components': 'error', // コンポーネント以外を export しない
        'react/prefer-es6-class': 'error', // createReactClass ではなく class を使う
        // preserve-manual-memoization は React Compiler が既存の手書きメモ化を
        // 保持できなかった場合にのみ報告されるため、意図的に再現するのが難しい
        'react/preserve-manual-memoization': 'off', // 手書きのメモ化を壊さない
        'react/purity': 'error', // レンダーを純粋に保つ
        'react/refs': 'error', // ref の使い方を検証
        'react/require-render-return': 'error', // render は値を返す
        'react/rules-of-hooks': 'error', // フックのルールを守る
        'react/self-closing-comp': 'error', // 子の無い要素は自己終了タグに
        'react/set-state-in-effect': 'error', // effect 内の setState を検証
        'react/set-state-in-render': 'error', // レンダー中の setState を禁止
        'react/state-in-constructor': 'error', // state の初期化位置をそろえる
        'react/static-components': 'error', // 変化しない要素を作り直さない
        'react/style-prop-object': 'error', // style にはオブジェクトを渡す
        'react/syntax': 'error', // React として不正な構文を検出
        'react/unsupported-syntax': 'error', // React Compiler が未対応の構文を検出
        'react/use-memo': 'error', // useMemo の使い方を検証
        'react/void-dom-elements-no-children': 'error', // void 要素に子を持たせない
        'react/void-use-memo': 'error', // 値を返さない useMemo を禁止

        // ---- 以下は他のサンプルと同時に有効化できないため src/strict で扱う ----
        'react/forbid-component-props': 'off', // → src/strict で有効化
        'react/forbid-dom-props': 'off', // → src/strict で有効化
        'react/forbid-elements': 'off', // → src/strict で有効化
        'react/jsx-no-literals': 'off', // → src/strict で有効化
        'react/no-multi-comp': 'off', // → src/strict で有効化
        'react/no-set-state': 'off', // → src/strict で有効化
        'react/prefer-function-component': 'off', // → src/strict で有効化
        'react/react-in-jsx-scope': 'off', // → src/strict で有効化
        'react/rule-suppression': 'off', // → src/strict で有効化
        'react/todo': 'off', // → src/strict で有効化
        'react/jsx-filename-extension': 'off', // → src/strict で有効化
      },
    },
    // ----------------------------------------------------------------
    // packages/react-*/src/strict : 他と両立しない React ルール
    // ----------------------------------------------------------------
    {
      files: ['packages/react-valid/src/strict/**', 'packages/react-invalid/src/strict/**'],
      plugins: ['react'],
      rules: {
        'react/forbid-component-props': ['error', { forbid: ['className'] }], // 禁止する props
        'react/forbid-dom-props': ['error', { forbid: ['id'] }], // 禁止する DOM props
        'react/forbid-elements': ['error', { forbid: ['marquee'] }], // 禁止する要素
        // jsx-filename-extension は「.ts に JSX を書く」ことで違反になるが、
        // oxlint は .ts の JSX を構文エラーとして扱うため再現できない
        'react/jsx-filename-extension': 'off', // JSX を書けるファイル拡張子を制限
        'react/jsx-no-literals': 'error', // JSX 内の生の文字列を禁止
        'react/no-multi-comp': 'error', // 1 ファイル 1 コンポーネント
        'react/no-set-state': 'error', // this.setState を禁止
        'react/prefer-function-component': 'error', // 関数コンポーネントに統一
        'react/react-in-jsx-scope': 'error', // React を import する
        'react/rule-suppression': 'error', // React ルールの抑制コメントを禁止
        // todo は React Compiler が未実装機能に遭遇したときの報告なので、
        // 意図的に発生させることができない
        'react/todo': 'off', // React Compiler の未対応機能を検出
      },
    },
    // ================================================================
    // packages/jest-* : jest プラグイン（60 ルール）
    //   env.jest でグローバル（describe / test / expect など）を有効にする
    // ================================================================
    {
      files: ['packages/jest-valid/**', 'packages/jest-invalid/**'],
      plugins: ['jest'],
      env: { jest: true, jasmine: true },
      rules: {
        'jest/consistent-test-it': ['error', { fn: 'test' }], // it ではなく test に統一
        'jest/expect-expect': 'error', // 期待値の無いテストを禁止
        'jest/max-expects': 'error', // 1 テスト内の expect 数の上限
        'jest/max-nested-describe': ['error', { max: 3 }], // describe のネストの上限
        'jest/no-alias-methods': 'error', // toBeCalled などの別名を禁止
        'jest/no-commented-out-tests': 'error', // コメントアウトされたテストを禁止
        'jest/no-conditional-expect': 'error', // 条件分岐の中の expect を禁止
        'jest/no-conditional-in-test': 'error', // テスト内の条件分岐を禁止
        'jest/no-confusing-set-timeout': 'error', // jest.setTimeout の位置を検証
        'jest/no-deprecated-functions': 'error', // 非推奨 API を禁止
        'jest/no-disabled-tests': 'error', // skip したテストを禁止
        'jest/no-done-callback': 'error', // done コールバックを禁止
        'jest/no-duplicate-hooks': 'error', // 同じフックの重複定義を禁止
        'jest/no-export': 'error', // テストファイルからの export を禁止
        'jest/no-focused-tests': 'error', // only を残さない
        'jest/no-identical-title': 'error', // 同一タイトルのテストを禁止
        'jest/no-interpolation-in-snapshots': 'error', // スナップショット内の補間を禁止
        'jest/no-jasmine-globals': 'error', // jasmine のグローバルを禁止
        'jest/no-mocks-import': 'error', // __mocks__ の直接 import を禁止
        'jest/no-restricted-jest-methods': ['error', { useFakeTimers: '実時間で検証する' }], // 禁止する jest メソッド
        'jest/no-restricted-matchers': ['error', { toBeFalsy: 'toBe(false) を使う' }], // 禁止するマッチャー
        'jest/no-standalone-expect': 'error', // テスト外の expect を禁止
        'jest/no-test-prefixes': 'error', // fit / xit を禁止
        'jest/no-test-return-statement': 'error', // テストからの return を禁止
        'jest/no-unneeded-async-expect-function': 'error', // 不要な async 関数を禁止
        'jest/no-untyped-mock-factory': 'error', // jest.mock のファクトリに型引数を付ける
        'jest/padding-around-after-all-blocks': 'error', // afterAll の前後に空行
        'jest/padding-around-test-blocks': 'error', // テストブロックの前後に空行
        'jest/prefer-called-with': 'error', // toHaveBeenCalledWith を推奨
        'jest/prefer-comparison-matcher': 'error', // toBeGreaterThan などを推奨
        'jest/prefer-each': 'error', // 繰り返しは each でまとめる
        'jest/prefer-equality-matcher': 'error', // === の比較ではなく toBe
        'jest/prefer-expect-resolves': 'error', // await expect(x).resolves を推奨
        'jest/prefer-hooks-in-order': 'error', // フックの定義順を統一
        'jest/prefer-hooks-on-top': 'error', // フックはテストより前に置く
        'jest/prefer-importing-jest-globals': 'error', // @jest/globals から import する
        'jest/prefer-jest-mocked': 'error', // jest.mocked() を推奨
        'jest/prefer-lowercase-title': 'error', // タイトルは小文字始まり
        'jest/prefer-mock-promise-shorthand': 'error', // mockResolvedValue を推奨
        'jest/prefer-mock-return-shorthand': 'error', // mockReturnValue を推奨
        'jest/prefer-snapshot-hint': ['error', 'always'], // スナップショットにヒントを付ける
        'jest/prefer-spy-on': 'error', // jest.spyOn を推奨
        'jest/prefer-strict-equal': 'error', // toStrictEqual を推奨
        'jest/prefer-to-be': 'error', // toBe を推奨
        'jest/prefer-to-contain': 'error', // toContain を推奨
        'jest/prefer-to-have-been-called': 'error', // toHaveBeenCalled を推奨
        'jest/prefer-to-have-been-called-times': 'error', // toHaveBeenCalledTimes を推奨
        'jest/prefer-to-have-length': 'error', // toHaveLength を推奨
        'jest/prefer-todo': 'error', // 空テストは test.todo に
        'jest/require-hook': 'error', // セットアップはフックの中で行う
        'jest/require-to-throw-message': 'error', // toThrow にメッセージを渡す
        'jest/require-top-level-describe': 'error', // トップレベルの describe を必須にする
        'jest/valid-describe-callback': 'error', // describe のコールバックを検証
        'jest/valid-expect': 'error', // expect の使い方を検証
        'jest/valid-expect-in-promise': 'error', // Promise の中の expect を検証
        'jest/valid-title': 'error', // タイトルを検証

        // ---- 他と両立しないため src/strict で扱う ----
        'jest/no-hooks': 'off', // → src/strict で有効化
        'jest/no-large-snapshots': 'off', // → src/strict で有効化
        'jest/prefer-ending-with-an-expect': 'off', // → src/strict で有効化
        'jest/prefer-expect-assertions': 'off', // → src/strict で有効化

        // vitest プラグインの correctness ルールは categories 設定で全体に効いているため、
        // jest 用のパッケージでは明示的に無効化しておく
        'vitest/warn-todo': 'off',
      },
    },
    // ----------------------------------------------------------------
    // packages/jest-*/src/strict : さらに厳しいテスト規約
    // ----------------------------------------------------------------
    {
      files: ['packages/jest-valid/src/strict/**', 'packages/jest-invalid/src/strict/**'],
      plugins: ['jest'],
      env: { jest: true },
      rules: {
        'jest/no-hooks': 'error', // フックの使用を禁止
        'jest/no-large-snapshots': ['error', { maxSize: 5 }], // スナップショットの行数上限
        'jest/prefer-ending-with-an-expect': 'error', // テストは expect で終える
        'jest/prefer-expect-assertions': 'error', // expect.assertions() を宣言する
      },
    },
    // ================================================================
    // packages/vitest-* : vitest プラグイン（73 ルール）
    //   env.vitest でグローバル（describe / test / expect / vi など）を有効にする
    // ================================================================
    {
      files: ['packages/vitest-valid/**', 'packages/vitest-invalid/**'],
      plugins: ['vitest'],
      env: { vitest: true },
      rules: {
        'vitest/consistent-each-for': ['error', { test: 'for', it: 'for' }], // each ではなく for に統一
        'vitest/consistent-test-filename': 'error', // テストファイル名の形式を統一
        'vitest/consistent-test-it': ['error', { fn: 'test' }], // it ではなく test に統一
        'vitest/consistent-vitest-vi': ['error', { fn: 'vi' }], // vitest.* ではなく vi.*
        'vitest/expect-expect': 'error', // 期待値の無いテストを禁止
        'vitest/hoisted-apis-on-top': 'error', // vi.mock などは先頭に置く
        'vitest/max-expects': 'error', // 1 テスト内の expect 数の上限
        'vitest/max-nested-describe': ['error', { max: 3 }], // describe のネストの上限
        'vitest/no-alias-methods': 'error', // toBeCalled などの別名を禁止
        'vitest/no-commented-out-tests': 'error', // コメントアウトされたテストを禁止
        'vitest/no-conditional-expect': 'error', // 条件分岐の中の expect を禁止
        'vitest/no-conditional-in-test': 'error', // テスト内の条件分岐を禁止
        'vitest/no-conditional-tests': 'error', // 条件分岐によるテスト定義を禁止
        'vitest/no-disabled-tests': 'error', // skip したテストを禁止
        'vitest/no-duplicate-hooks': 'error', // 同じフックの重複定義を禁止
        'vitest/no-focused-tests': 'error', // only を残さない
        'vitest/no-identical-title': 'error', // 同一タイトルのテストを禁止
        'vitest/no-import-node-test': 'error', // node:test からの import を禁止
        'vitest/no-interpolation-in-snapshots': 'error', // スナップショット内の補間を禁止
        'vitest/no-mocks-import': 'error', // __mocks__ の直接 import を禁止
        'vitest/no-restricted-matchers': ['error', { toBeDefined: 'toBe で具体的に検証する' }], // 禁止するマッチャー
        'vitest/no-restricted-vi-methods': ['error', { useFakeTimers: '実時間で検証する' }], // 禁止する vi メソッド
        'vitest/no-standalone-expect': 'error', // テスト外の expect を禁止
        'vitest/no-test-prefixes': 'error', // fit / xit を禁止
        'vitest/no-test-return-statement': 'error', // テストからの return を禁止
        'vitest/no-unneeded-async-expect-function': 'error', // 不要な async 関数を禁止
        'vitest/padding-around-after-all-blocks': 'error', // afterAll の前後に空行
        'vitest/padding-around-test-blocks': 'error', // テストブロックの前後に空行
        'vitest/prefer-called-exactly-once-with': 'error', // 1 回だけの呼び出しは専用マッチャーで
        'vitest/prefer-called-once': 'off', // → src/alt で有効化（prefer-called-times と排他）
        'vitest/prefer-called-times': 'error', // toHaveBeenCalledTimes() を推奨
        'vitest/prefer-called-with': 'error', // toHaveBeenCalledWith を推奨
        'vitest/prefer-comparison-matcher': 'error', // toBeGreaterThan などを推奨
        'vitest/prefer-describe-function-title': 'error', // describe には関数そのものを渡す
        'vitest/prefer-each': 'error', // 繰り返しは each / for でまとめる
        'vitest/prefer-equality-matcher': 'error', // === の比較ではなく toBe
        'vitest/prefer-expect-resolves': 'error', // await expect(x).resolves を推奨
        'vitest/prefer-expect-type-of': 'error', // 型の検証には expectTypeOf を使う
        'vitest/prefer-hooks-in-order': 'error', // フックの定義順を統一
        'vitest/prefer-hooks-on-top': 'error', // フックはテストより前に置く
        'vitest/prefer-import-in-mock': 'error', // モックファクトリでは import を使う
        'vitest/prefer-importing-vitest-globals': 'error', // 'vitest' から import する
        'vitest/prefer-lowercase-title': 'error', // タイトルは小文字始まり
        'vitest/prefer-mock-promise-shorthand': 'error', // mockResolvedValue を推奨
        'vitest/prefer-mock-return-shorthand': 'error', // mockReturnValue を推奨
        'vitest/prefer-snapshot-hint': ['error', 'always'], // スナップショットにヒントを付ける
        'vitest/prefer-spy-on': 'error', // vi.spyOn を推奨
        'vitest/prefer-strict-equal': 'error', // toStrictEqual を推奨
        'vitest/prefer-to-be': 'error', // toBe を推奨
        'vitest/prefer-to-be-falsy': 'error', // toBeFalsy() を推奨
        'vitest/prefer-to-be-object': 'error', // toBeObject() を推奨
        'vitest/prefer-to-be-truthy': 'error', // toBeTruthy() を推奨
        'vitest/prefer-to-contain': 'error', // toContain を推奨
        'vitest/prefer-to-have-been-called-times': 'error', // toHaveBeenCalledTimes を推奨
        'vitest/prefer-to-have-length': 'error', // toHaveLength を推奨
        'vitest/require-awaited-expect-poll': 'error', // expect.poll は await する
        'vitest/require-hook': 'error', // セットアップはフックの中で行う
        'vitest/require-local-test-context-for-concurrent-snapshots': 'error', // 並行テストのスナップショット
        'vitest/require-mock-type-parameters': 'error', // vi.fn() に型引数を付ける
        'vitest/require-to-throw-message': 'error', // toThrow にメッセージを渡す
        'vitest/require-top-level-describe': 'error', // トップレベルの describe を必須にする
        'vitest/valid-describe-callback': 'error', // describe のコールバックを検証
        'vitest/valid-expect': 'error', // expect の使い方を検証
        'vitest/valid-expect-in-promise': 'error', // Promise の中の expect を検証
        'vitest/valid-title': 'error', // タイトルを検証
        'vitest/warn-todo': 'error', // todo を残さない

        // ---- 他と両立しないため src/strict と src/alt で扱う ----
        'vitest/no-hooks': 'off', // → src/strict で有効化
        'vitest/no-large-snapshots': 'off', // → src/strict で有効化
        'vitest/prefer-expect-assertions': 'off', // → src/strict で有効化
        'vitest/require-test-timeout': 'off', // → src/strict で有効化
        'vitest/no-importing-vitest-globals': 'off', // → src/alt で有効化
        'vitest/prefer-strict-boolean-matchers': 'off', // → src/alt で有効化
        'vitest/prefer-todo': 'off', // → src/alt で有効化

        // jest プラグインの correctness ルールは categories 設定で全体に効いているため、
        // vitest 用のパッケージでは明示的に無効化しておく
        'jest/expect-expect': 'off',
        'jest/no-conditional-expect': 'off',
        'jest/no-disabled-tests': 'off',
        'jest/no-focused-tests': 'off',
        'jest/no-standalone-expect': 'off',
        'jest/require-to-throw-message': 'off',
        'jest/valid-describe-callback': 'off',
        'jest/valid-expect': 'off',
        'jest/valid-expect-in-promise': 'off',
        'jest/valid-title': 'off',
      },
    },
    // ----------------------------------------------------------------
    // packages/vitest-*/src/strict : さらに厳しいテスト規約
    // ----------------------------------------------------------------
    {
      files: ['packages/vitest-valid/src/strict/**', 'packages/vitest-invalid/src/strict/**'],
      plugins: ['vitest'],
      env: { vitest: true },
      rules: {
        'vitest/no-hooks': 'error', // フックの使用を禁止
        'vitest/no-large-snapshots': ['error', { maxSize: 5 }], // スナップショットの行数上限
        'vitest/prefer-expect-assertions': 'error', // expect.assertions() を宣言する
        'vitest/require-test-timeout': 'error', // テストにタイムアウトを明示する
      },
    },
    // ----------------------------------------------------------------
    // packages/vitest-*/src/alt : グローバル利用・厳密な真偽値マッチャーの方針
    // ----------------------------------------------------------------
    {
      files: ['packages/vitest-valid/src/alt/**', 'packages/vitest-invalid/src/alt/**'],
      plugins: ['vitest'],
      env: { vitest: true },
      rules: {
        'vitest/no-importing-vitest-globals': 'error', // グローバルを使い import しない
        'vitest/prefer-importing-vitest-globals': 'off', // 上のルールと排他
        'vitest/prefer-called-once': 'error', // toHaveBeenCalledOnce() を推奨
        'vitest/prefer-called-times': 'off', // 上のルールと排他
        'vitest/prefer-strict-boolean-matchers': 'error', // toBe(true) / toBe(false) を使う
        'vitest/prefer-to-be-falsy': 'off', // 上のルールと排他
        'vitest/prefer-to-be-truthy': 'off', // 上のルールと排他
        'vitest/prefer-todo': 'error', // 空テストは test.todo に
        'vitest/warn-todo': 'off', // 上のルールと排他
      },
    },
    // ================================================================
    // packages/tailwind-* : Tailwind CSS を使った React コンポーネント
    //   oxlint には Tailwind 専用のネイティブプラグインが無いため、
    //   クラス名そのものは検査されない（並び順などを検査したい場合は
    //   トップレベルの jsPlugins に JS プラグインを追加する）。
    //   ここでは Tailwind を使った UI に対して react / jsx-a11y のルールが
    //   そのまま働くことを確認する。
    // ================================================================
    {
      files: ['packages/tailwind-valid/**', 'packages/tailwind-invalid/**'],
      plugins: ['react', 'jsx-a11y'],
      rules: {
        'react/button-has-type': 'error', // button には type を明示する
        'react/jsx-curly-brace-presence': 'error', // 文字列リテラルの波括弧を禁止
        'react/jsx-max-depth': ['error', { max: 3 }], // JSX のネストの上限
        'react/jsx-props-no-spreading': 'error', // props のスプレッドを禁止
        'react/no-unknown-property': 'error', // class ではなく className を使う
        'react/style-prop-object': 'error', // style にはオブジェクトを渡す
        'jsx-a11y/alt-text': 'error', // img に alt を付ける
        'jsx-a11y/click-events-have-key-events': 'error', // onClick にはキーボード操作も
        'jsx-a11y/control-has-associated-label': 'error', // コントロールにラベルを付ける
        'jsx-a11y/label-has-associated-control': 'error', // label にコントロールを紐付ける
        'jsx-a11y/no-autofocus': 'error', // autoFocus を禁止
        'jsx-a11y/no-static-element-interactions': 'error', // 静的要素のハンドラを禁止
      },
    },
    // ================================================================
    // packages/vue-* : vue プラグイン（46 ルール）
    //   oxlint は .vue ファイルの <script> ブロックだけを検査する。
    //   サンプルの script ブロックはすべて TypeScript（lang="ts"）で書いている。
    // ================================================================
    {
      files: ['packages/vue-valid/**', 'packages/vue-invalid/**'],
      plugins: ['vue'],
      rules: {
        'vue/component-definition-name-casing': 'error', // コンポーネント名は PascalCase
        'vue/define-emits-declaration': 'error', // defineEmits は型ベースで宣言する
        'vue/define-props-declaration': 'error', // defineProps は型ベースで宣言する
        'vue/define-props-destructuring': 'error', // props は分割代入で受け取らない
        'vue/max-props': ['error', { maxProps: 3 }], // props の数の上限
        'vue/next-tick-style': 'error', // $nextTick は Promise で使う
        'vue/no-arrow-functions-in-watch': 'error', // watch のハンドラはアロー関数にしない
        'vue/no-async-in-computed-properties': 'error', // computed を非同期にしない
        'vue/no-computed-properties-in-data': 'error', // data で computed を参照しない
        'vue/no-deprecated-data-object-declaration': 'error', // data は関数で返す
        'vue/no-deprecated-delete-set': 'error', // $delete / $set を禁止
        'vue/no-deprecated-destroyed-lifecycle': 'error', // destroyed を禁止
        'vue/no-deprecated-events-api': 'error', // $on / $off / $once を禁止
        'vue/no-deprecated-model-definition': 'error', // model オプションを禁止
        'vue/no-deprecated-props-default-this': 'error', // default 関数内の this を禁止
        'vue/no-deprecated-vue-config-keycodes': 'error', // Vue.config.keyCodes を禁止
        'vue/no-dupe-keys': 'error', // data / props / computed のキー重複を禁止
        'vue/no-export-in-script-setup': 'error', // script setup での export を禁止
        'vue/no-expose-after-await': 'error', // await の後の defineExpose を禁止
        'vue/no-import-compiler-macros': 'error', // コンパイラマクロの import を禁止
        'vue/no-lifecycle-after-await': 'error', // await の後のライフサイクル登録を禁止
        'vue/no-multiple-slot-args': 'error', // スロットの引数はひとつだけ
        'vue/no-required-prop-with-default': 'error', // required な props に既定値を付けない
        'vue/no-reserved-keys': 'error', // Vue が予約するキーを使わない
        'vue/no-reserved-props': 'error', // key / ref を props 名に使わない
        'vue/no-shared-component-data': 'error', // data は関数で返す
        'vue/no-side-effects-in-computed-properties': 'error', // computed で副作用を起こさない
        'vue/no-this-in-before-route-enter': 'error', // beforeRouteEnter の this を禁止
        'vue/no-watch-after-await': 'error', // await の後の watch を禁止
        'vue/prefer-import-from-vue': 'error', // 'vue' から import する
        'vue/prop-name-casing': 'error', // props 名は camelCase
        'vue/require-default-prop': 'error', // 必須でない props には既定値を付ける
        'vue/require-prop-type-constructor': 'error', // 型はコンストラクタで書く
        'vue/require-prop-types': 'error', // props には型を指定する
        'vue/require-render-return': 'error', // render は値を返す
        'vue/require-slots-as-functions': 'error', // $slots のメンバーは関数として呼ぶ
        'vue/require-typed-ref': 'error', // ref には型引数を付ける
        'vue/return-in-computed-property': 'error', // computed は値を返す
        'vue/valid-define-emits': 'error', // defineEmits の使い方を検証
        'vue/valid-define-options': 'error', // defineOptions の使い方を検証
        'vue/valid-define-props': 'error', // defineProps の使い方を検証
        'vue/valid-next-tick': 'error', // nextTick の使い方を検証

        // ---- 他と両立しないため src/alt で扱う ----
        'vue/no-reserved-component-names': 'off', // → src/alt で有効化
        'vue/require-default-export': 'off', // → src/alt で有効化
        'vue/require-direct-export': 'off', // → src/alt で有効化
        'vue/return-in-emits-validator': 'off', // → src/alt で有効化
      },
    },
    // ----------------------------------------------------------------
    // packages/vue-*/src/alt : Options API 寄りの規約
    // ----------------------------------------------------------------
    {
      files: ['packages/vue-valid/src/alt/**', 'packages/vue-invalid/src/alt/**'],
      plugins: ['vue'],
      rules: {
        'vue/no-reserved-component-names': 'error', // HTML 要素名をコンポーネント名にしない
        'vue/require-default-export': 'error', // コンポーネントは default export する
        'vue/require-direct-export': 'error', // export default に直接オブジェクトを書く
        'vue/return-in-emits-validator': 'error', // emits のバリデータは真偽値を返す
      },
    },
  ],
})
