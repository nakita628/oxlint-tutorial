// クラスコンポーネントまわりの違反サンプル
import { Children, Component, PureComponent, cloneElement, createRef } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'

// react/prefer-es6-class: createReactClass ではなく class を使う
declare const createReactClass: (spec: object) => unknown
export const Legacy = createReactClass({
  render(): JSX.Element {
    return <div>legacy</div>
  },
})

export class Widget extends Component<{ label: string }, { count: number }> {
  // react/state-in-constructor: state はコンストラクタで初期化する設定にしている
  public state = { count: 0 }

  private readonly containerRef = createRef<HTMLDivElement>()

  // react/no-unsafe: UNSAFE_ 系のライフサイクルは使わない
  public UNSAFE_componentWillMount(): void {
    void 0
  }

  public componentDidMount(): void {
    // react/no-direct-mutation-state: state を直接書き換えない
    this.state.count = 1

    // react/no-did-mount-set-state: componentDidMount での setState は再レンダーを招く
    this.setState({ count: 1 })

    // react/no-is-mounted: isMounted() は非推奨
    this.isMounted()
    // react/no-find-dom-node: findDOMNode は非推奨
    findDOMNode(this)
  }

  public componentDidUpdate(): void {
    // react/no-did-update-set-state: componentDidUpdate での setState は無限ループを招く
    this.setState({ count: this.state.count })
  }

  public UNSAFE_componentWillUpdate(): void {
    // react/no-will-update-set-state: componentWillUpdate では setState できない
    this.setState({ count: 0 })
  }

  public render(): JSX.Element {
    return (
      // react/no-string-refs: 文字列 ref は非推奨
      <div ref="container" data-count={this.state.count}>
        {this.props.label}
        <span ref={this.containerRef} />
      </div>
    )
  }
}

// react/require-render-return: render は必ず値を返す
export class NoRender extends Component {
  public render(): void {
    void 0
  }
}

// react/no-redundant-should-component-update: PureComponent に shouldComponentUpdate は不要
export class Pure extends PureComponent {
  public shouldComponentUpdate(): boolean {
    return true
  }

  public render(): JSX.Element {
    return <div>pure</div>
  }
}

// react/no-render-return-value: render() の戻り値は使えない
export const instance = ReactDOM.render(<div />, document.body)

// react/no-clone-element: cloneElement は避ける
export function clone(element: JSX.Element): JSX.Element {
  return cloneElement(element, { key: 'a' })
}

// react/no-react-children: React.Children API は避ける
export function countChildren(children: JSX.Element): number {
  return Children.count(children)
}

// react/error-boundaries: エラーバウンダリは componentDidCatch と併用する
export class Boundary extends Component<{ children: JSX.Element }> {
  public static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  public render(): JSX.Element {
    return this.props.children
  }
}

// react/no-namespace: 名前空間付きの JSX 要素は React では使えない
export const Namespaced = (): JSX.Element => <svg:circle />

