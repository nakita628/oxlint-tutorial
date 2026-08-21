// form.tsx の適合版

// jsx-a11y/label-has-associated-control: label にコントロールを紐付ける
// jsx-a11y/no-autofocus: autoFocus は使わない
// jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions:
// 操作できる要素には button を使う
export const SearchForm = (): JSX.Element => (
  <form className="flex flex-col gap-2">
    <label htmlFor="keyword" className="text-sm font-medium text-slate-700">
      キーワード
      <input
        id="keyword"
        type="text"
        className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
      />
    </label>
    <button
      type="submit"
      className="rounded bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
    >
      検索
    </button>
  </form>
)
