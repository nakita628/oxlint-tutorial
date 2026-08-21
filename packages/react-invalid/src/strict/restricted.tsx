// 同時に有効化できないルール群の違反サンプル
import React, { Component } from 'react'

// react/react-in-jsx-scope: React を import していないとエラーになる設定
// （ここでは import しているので、この行自体は適合している）
void React

// react/prefer-function-component: クラスコンポーネントを禁止する設定にしている
// react/no-set-state: this.setState を禁止する設定にしている
export class ClassComponent extends Component<Record<string, never>, { count: number }> {
  public state = { count: 0 }

  public increment(): void {
    this.setState({ count: this.state.count + 1 })
  }

  public render(): JSX.Element {
    // react/jsx-no-literals: JSX 内の生の文字列を禁止する設定にしている
    return <div>count</div>
  }
}

// react/no-multi-comp: 1 ファイルに複数のコンポーネントを定義している
export const Another = (): JSX.Element => <span>{'another'}</span>

// react/forbid-elements: 設定で禁止した要素を使っている
export const Forbidden = (): JSX.Element => <marquee>{'moving'}</marquee>

// react/forbid-dom-props: 設定で禁止した DOM の props を使っている
export const ForbiddenDomProp = (): JSX.Element => <div id="app">{'app'}</div>

// react/forbid-component-props: 設定で禁止したコンポーネントの props を使っている
export const ForbiddenComponentProp = (): JSX.Element => (
  <Another className="wrapper" />
)
