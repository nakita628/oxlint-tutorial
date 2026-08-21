// card.tsx の適合版

// react/jsx-max-depth: ネストを浅く保つ（内側を別コンポーネントに切り出す）
const StatusDot = ({ title }: { title: string }): JSX.Element => (
  <div className="h-2 w-2 rounded-full bg-emerald-500">
    <span className="sr-only">{title}</span>
  </div>
)

export const Card = ({ title }: { title: string }): JSX.Element => (
  <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
    <div className="border-b border-slate-100 px-4 py-3">
      <StatusDot title={title} />
    </div>
  </div>
)

// jsx-a11y/alt-text: alt を付ける
// react/no-unknown-property: className を使う
export const Thumbnail = (): JSX.Element => (
  <img src="/thumb.png" alt="サムネイル" className="h-24 w-24 rounded object-cover" />
)

// react/style-prop-object: style にはオブジェクトを渡す
export const Banner = (): JSX.Element => (
  <div className="rounded-lg bg-amber-50 p-4 text-amber-900">お知らせ</div>
)
