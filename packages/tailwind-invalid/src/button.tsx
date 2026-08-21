// Tailwind CSS を使った UI コンポーネントの違反サンプル
// oxlint には Tailwind 専用のプラグインが無いため、
// クラス名そのものは検査されず、React / jsx-a11y のルールで検証する

// react/button-has-type: button には type を明示する
// jsx-a11y/control-has-associated-label: テキストラベルが無い（aria-hidden の子だけ）
export const IconButton = (): JSX.Element => (
  <button className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white hover:bg-slate-700">
    <span aria-hidden="true" className="text-lg leading-none" />
  </button>
)

// react/jsx-curly-brace-presence: 文字列リテラルに波括弧は不要
export const PrimaryButton = (): JSX.Element => (
  <button type="button" className={'rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white'}>
    送信
  </button>
)

// react/jsx-props-no-spreading: props のスプレッドを禁止
const buttonProps = { className: 'rounded bg-gray-100 px-3 py-1' }

export const SpreadButton = (): JSX.Element => <button type="button" {...buttonProps} />
