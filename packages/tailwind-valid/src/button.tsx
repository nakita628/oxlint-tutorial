// button.tsx の適合版

// react/button-has-type: type を明示する
// jsx-a11y/control-has-associated-label: aria-label でラベルを付ける
export const IconButton = (): JSX.Element => (
  <button
    type="button"
    aria-label="閉じる"
    className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white hover:bg-slate-700"
  >
    <span aria-hidden="true" className="text-lg leading-none">
      ×
    </span>
  </button>
)

// react/jsx-curly-brace-presence: 文字列はそのまま書く
export const PrimaryButton = (): JSX.Element => (
  <button type="button" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
    送信
  </button>
)

// react/jsx-props-no-spreading: props は明示的に渡す
export const PlainButton = (): JSX.Element => (
  <button type="button" className="rounded bg-gray-100 px-3 py-1">
    キャンセル
  </button>
)
