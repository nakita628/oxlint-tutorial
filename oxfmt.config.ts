import { defineConfig } from 'oxfmt'

/**
 * oxfmt 設定ファイル（TypeScript 形式）
 * ==================================================================
 * oxfmt は Oxc スタック上に作られたフォーマッタ。
 * Prettier の JavaScript / TypeScript 適合テストを 100% 通過しており、
 * Prettier ベースのワークフローにそのまま置き換えられる。
 *
 * 設定ファイルとして自動検出されるファイル名:
 *   .oxfmtrc.json / .oxfmtrc.jsonc / oxfmt.config.ts
 *   （`-c` で明示指定する場合は .js / .mjs / .cjs / .mts / .cts も使える）
 *   ※ `.oxfmtrc.ts` は自動検出されないので注意。
 *
 * このファイルには oxfmt がサポートする設定を、
 * 省略せずにすべて日本語コメント付きで書いている（全 27 フィールド）。
 */
export default defineConfig({
  // ==================================================================
  // 基本の整形オプション（Prettier と同名・同義）
  // ==================================================================

  // printWidth: 折り返しの目安になる 1 行の長さ（既定 100）
  printWidth: 100,

  // tabWidth: インデント 1 段あたりのスペース数（既定 2）
  tabWidth: 2,

  // useTabs: インデントにタブを使うか（既定 false = スペース）
  useTabs: false,

  // semi: 文末にセミコロンを付けるか（既定 true）
  //   このリポジトリのサンプルはセミコロンなしで書いているため false
  semi: false,

  // singleQuote: 文字列をシングルクォートにするか（既定 false = ダブルクォート）
  singleQuote: true,

  // jsxSingleQuote: JSX の属性値をシングルクォートにするか（既定 false）
  //   JSX では HTML に合わせてダブルクォートのままにする
  jsxSingleQuote: false,

  // quoteProps: オブジェクトのプロパティ名を引用符で囲むか
  //   'as-needed'（既定）… 必要なときだけ囲む
  //   'consistent'      … 1 つでも必要ならすべて囲む
  //   'preserve'        … 書いたとおりに残す
  quoteProps: 'as-needed',

  // trailingComma: 複数行のときに末尾のカンマを付けるか
  //   'all'（既定）… 関数の引数まで含めて付ける
  //   'es5'         … ES5 で有効な位置にだけ付ける
  //   'none'        … 付けない
  trailingComma: 'all',

  // bracketSpacing: オブジェクトリテラルの括弧の内側に空白を入れるか（既定 true）
  //   true  → { a: 1 }
  //   false → {a: 1}
  bracketSpacing: true,

  // bracketSameLine: 複数行になった HTML / JSX 要素の閉じ `>` を
  //   最後の属性と同じ行に置くか（既定 false）
  bracketSameLine: false,

  // singleAttributePerLine: HTML / JSX の属性を必ず 1 行に 1 つ書くか（既定 false）
  singleAttributePerLine: false,

  // arrowParens: 引数が 1 つのアロー関数に括弧を付けるか
  //   'always'（既定）… (value) => value
  //   'avoid'          … value => value
  arrowParens: 'always',

  // objectWrap: オブジェクトリテラルを折り返すかどうかの判定方法
  //   'preserve'（既定）… 元のコードで `{` の直後に改行があれば複数行のまま保つ
  //   'collapse'        … 幅に収まるなら 1 行にまとめる
  objectWrap: 'preserve',

  // experimentalOperatorPosition: 式を折り返したときの演算子の位置（実験的）
  //   'end'（既定）… 行末に演算子を置く
  //   'start'       … 次の行の先頭に演算子を置く
  experimentalOperatorPosition: 'end',

  // endOfLine: 改行コード（既定 'lf'）
  endOfLine: 'lf',

  // insertFinalNewline: ファイル末尾に改行を入れるか（既定 true）
  insertFinalNewline: true,

  // proseWrap: Markdown などの文章の折り返し
  //   'preserve'（既定）… 書いたとおりに残す
  //   'always'          … printWidth で折り返す
  //   'never'           … 1 段落 1 行にする
  proseWrap: 'preserve',

  // embeddedLanguageFormatting: テンプレートリテラル内の CSS / GraphQL などを整形するか
  //   'auto'（既定）／ 'off'
  embeddedLanguageFormatting: 'auto',

  // htmlWhitespaceSensitivity: HTML 系の空白の扱い
  //   'css'（既定）… CSS の display 既定値に従う
  //   'strict'      … すべての空白を意味があるものとして扱う
  //   'ignore'      … 空白を無視する
  htmlWhitespaceSensitivity: 'css',

  // vueIndentScriptAndStyle: .vue の <script> / <style> の中身をインデントするか（既定 false）
  vueIndentScriptAndStyle: false,

  // ==================================================================
  // 除外設定
  //   .gitignore / .prettierignore は既定で参照される（--ignore-path で変更可）
  //   ここに書いたパターンは、この設定ファイルのあるディレクトリを基準に解決される
  // ==================================================================
  //
  //   なお「その書き方そのものが lint の違反サンプル」になっている箇所は、
  //   ファイル単位で除外するのではなく、コード側に `// oxfmt-ignore` コメントを
  //   置いて構文単位で整形対象から外している
  //   （`// prettier-ignore` も同じように使える）。
  ignorePatterns: [
    '**/node_modules/**',
    'docs/RULES.md', // 自動生成ファイル
  ],

  // ==================================================================
  // 拡張機能（すべて既定では無効。ここでは明示的に指定している）
  // ==================================================================

  // jsdoc: JSDoc コメントの正規化（既定 false）
  //   packages/jsdoc-* のサンプルは「JSDoc の書き方そのもの」を検証しているため無効のまま
  jsdoc: false,

  // sortImports: import 文の並び替え（既定 false）
  //   packages/import-* は import の並び順そのものを検証しているため無効のまま。
  //   有効にする場合は次のように書く:
  //     sortImports: {
  //       groups: ['builtin', 'external', ['internal', 'subpath'],
  //                ['parent', 'sibling', 'index'], 'style', 'unknown'],
  //       internalPattern: ['~/', '@/', '#'],
  //       order: 'asc',
  //       ignoreCase: true,
  //       newlinesBetween: true,
  //       partitionByComment: false,
  //       partitionByNewline: false,
  //       sortSideEffects: false,
  //     }
  sortImports: false,

  // sortPackageJson: package.json のキーを推奨順に並び替える（既定 true）
  sortPackageJson: {
    sortScripts: false, // scripts の中身は書いた順を保つ
  },

  // sortTailwindcss: Tailwind CSS のクラス名を推奨順に並び替える（既定 false）
  //   oxlint には Tailwind 用のプラグインが無いが、oxfmt はクラス並び替えを内蔵している。
  //   有効にするには Tailwind の設定ファイル（tailwind.config.js）か
  //   テーマの CSS（theme.css）を解決できる必要があるため、
  //   このリポジトリでは無効にしている。
  //   有効にする場合の例:
  //     sortTailwindcss: {
  //       attributes: ['className', 'class'],
  //       functions: ['clsx', 'cva', 'twMerge'],
  //       config: './tailwind.config.js',
  //       preserveDuplicates: false,
  //       preserveWhitespace: false,
  //     }
  sortTailwindcss: false,

  // svelte: Svelte 固有の整形（既定 false）
  //   このリポジトリに .svelte ファイルは無い
  svelte: false,

  // ==================================================================
  // overrides: ファイルパターンごとの上書き
  //   files / excludeFiles / options を指定できる
  // ==================================================================
  overrides: [
    {
      // JSON / JSONC はダブルクォート固定なので singleQuote を戻す
      files: ['**/*.json', '**/*.jsonc'],
      options: {
        singleQuote: false,
      },
    },
    {
      // Markdown は文章なので、折り返しは書いたとおりに残す
      files: ['**/*.md'],
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
})
