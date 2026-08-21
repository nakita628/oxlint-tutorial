// フォーム UI の違反サンプル

// jsx-a11y/label-has-associated-control: label にはコントロールを紐付ける
// jsx-a11y/no-autofocus: autoFocus は使わない
export const SearchForm = (): JSX.Element => (
  <form className="flex flex-col gap-2">
    <label className="text-sm font-medium text-slate-700">キーワード</label>
    <input
      type="text"
      autoFocus
      className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
    />
    {/* jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions:
        操作できる要素には button を使う */}
    <div
      className="cursor-pointer rounded bg-blue-600 px-4 py-2 text-center text-white"
      onClick={(): void => undefined}
    >
      検索
    </div>
  </form>
)
