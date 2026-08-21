// カード UI の違反サンプル

// react/jsx-max-depth: JSX のネストが深すぎる
export const Card = ({ title }: { title: string }): JSX.Element => (
  <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
    <div className="border-b border-slate-100 px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-500">
          <span className="sr-only">{title}</span>
        </div>
      </div>
    </div>
  </div>
)

// jsx-a11y/alt-text: img には alt を付ける
// react/no-unknown-property: class ではなく className を使う
export const Thumbnail = (): JSX.Element => (
  <img src="/thumb.png" class="h-24 w-24 rounded object-cover" />
)

// react/style-prop-object: style には文字列ではなくオブジェクトを渡す
export const Banner = (): JSX.Element => (
  <div className="bg-amber-50 p-4 text-amber-900" style="border-radius: 8px">
    お知らせ
  </div>
)
