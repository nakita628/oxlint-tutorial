// jsx.tsx の適合版

export const List = ({ items }: { items: Array<string> }): JSX.Element => (
  <ul>
    {/* react/jsx-key, react/no-array-index-key: 安定した値を key にする */}
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

// react/jsx-no-duplicate-props: props は 1 回だけ書く
export const Duplicated = (): JSX.Element => <div className="a" />

// react/jsx-boolean-value: 真偽値の props は値を省略する
export const BooleanProp = (): JSX.Element => <input type="text" disabled />

// react/jsx-curly-brace-presence: 文字列はそのまま書く
export const CurlyString = (): JSX.Element => <div className="container" />

// react/jsx-fragments: <> を使う
export const Fragmented = (): JSX.Element => (
  <>
    <span>a</span>
    <span>b</span>
  </>
)

// react/jsx-no-useless-fragment: 不要なフラグメントは書かない
export const NoUselessFragment = (): JSX.Element => <span>only</span>

// react/self-closing-comp: 自己終了タグにする
export const SelfClosing = (): JSX.Element => <div />

// react/jsx-max-depth: ネストを浅く保つ
export const Shallow = (): JSX.Element => (
  <div>
    <span>shallow</span>
  </div>
)

// react/jsx-props-no-spread-multi, react/jsx-props-no-spreading: props は明示的に渡す
export const NoSpread = (): JSX.Element => <div id="a" />

// react/jsx-handler-names: ハンドラを渡す props 名は on〜 にそろえる
const MyComponent = (props: { onChange: () => void }): JSX.Element => (
  <button type="button" onClick={props.onChange} aria-label="change" />
)

export const Handler = (): JSX.Element => {
  const handleChange = (): void => undefined
  return <MyComponent onChange={handleChange} />
}

// react/jsx-pascal-case: コンポーネント名は PascalCase にする
const MyPascalComponent = (): JSX.Element => <span>pascal</span>

export const PascalCase = (): JSX.Element => <MyPascalComponent />

// react/jsx-no-comment-textnodes: コメントは JSX コメントとして書く
export const CommentText = (): JSX.Element => (
  <div>
    {/* これはコメント */}
    text
  </div>
)

// react/no-unescaped-entities: エスケープして書く
export const Escaped = (): JSX.Element => <div>It&apos;s fine</div>

// react/jsx-no-undef: 定義済みのコンポーネントだけを使う
export const Defined = (): JSX.Element => <MyPascalComponent />

// react/capitalized-calls: コンポーネントは JSX として描画する
export const NotCalled = (): JSX.Element => (
  <div>
    <MyPascalComponent />
  </div>
)
