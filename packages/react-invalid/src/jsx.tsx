// JSX の書き方まわりの違反サンプル
import { Fragment } from 'react'

export const List = ({ items }: { items: Array<string> }): JSX.Element => (
  <ul>
    {items.map((item, index) => (
      // react/no-array-index-key: index を key にしない
      <li key={index}>{item}</li>
    ))}
  </ul>
)

// react/jsx-no-duplicate-props: 同じ props を 2 回書いている
export const Duplicated = (): JSX.Element => <div className="a" className="b" />

// react/jsx-boolean-value: 真偽値の props は値を省略する
export const BooleanProp = (): JSX.Element => <input type="text" disabled={true} />

// react/jsx-curly-brace-presence: 文字列リテラルに波括弧は不要
export const CurlyString = (): JSX.Element => <div className={'container'} />

// react/jsx-fragments: <Fragment> ではなく <> を使う
export const Fragmented = (): JSX.Element => (
  <Fragment>
    <span>a</span>
    <span>b</span>
  </Fragment>
)

// react/jsx-no-useless-fragment: 子が 1 つだけのフラグメントは不要
export const UselessFragment = (): JSX.Element => (
  <>
    <span>only</span>
  </>
)

// react/self-closing-comp: 子を持たない要素は自己終了タグにする
export const NotSelfClosing = (): JSX.Element => <div></div>

// react/jsx-max-depth: JSX のネストが深すぎる
export const Deep = (): JSX.Element => (
  <div>
    <div>
      <div>
        <div>
          <span>deep</span>
        </div>
      </div>
    </div>
  </div>
)

// react/jsx-props-no-spread-multi: 同じスプレッドを複数回書いている
const spreadProps = { id: 'a' }
export const SpreadMulti = (): JSX.Element => <div {...spreadProps} {...spreadProps} />

// react/jsx-props-no-spreading: props のスプレッドを禁止
export const Spread = (): JSX.Element => <div {...spreadProps} />

// react/jsx-key: リストには key が必要
export const NoKey = ({ items }: { items: Array<string> }): JSX.Element => (
  <ul>
    {items.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
)

// react/jsx-handler-names: ハンドラを渡す props 名は on〜 にそろえる
const MyComponent = (props: { handleChange: () => void }): JSX.Element => (
  <button type="button" onClick={props.handleChange} />
)

export class Handler {
  public handleChange = (): void => undefined

  public render(): JSX.Element {
    return <MyComponent handleChange={this.handleChange} />
  }
}

// react/jsx-pascal-case: コンポーネント名は PascalCase にする
const My_Component = (): JSX.Element => <span>snake</span>

export const PascalCase = (): JSX.Element => <My_Component />

// react/jsx-no-comment-textnodes: JSX の中の // はテキストとして表示される
export const CommentText = (): JSX.Element => <div>// これはコメントではない</div>

// react/no-unescaped-entities: JSX 内の生のクォートはエスケープする
export const Unescaped = (): JSX.Element => <div>It's fine</div>

// react/jsx-no-undef: 未定義のコンポーネントを使っている
export const Undefined = (): JSX.Element => <NotDefinedComponent />
