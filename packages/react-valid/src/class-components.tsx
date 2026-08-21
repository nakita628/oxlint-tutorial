// class-components.tsx の適合版
import { Component, createRef, type ReactNode } from 'react'

// react/prefer-es6-class: class で定義する
export class Widget extends Component<{ label: string }, { count: number }> {
  private readonly containerRef = createRef<HTMLDivElement>()

  // react/state-in-constructor: state はコンストラクタで初期化する
  public constructor(props: { label: string }) {
    super(props)
    this.state = { count: 0 }
  }

  // react/no-unsafe: UNSAFE_ 系ライフサイクルは使わない
  // react/no-did-mount-set-state, react/no-did-update-set-state,
  // react/no-will-update-set-state: ライフサイクルで setState しない
  public componentDidMount(): void {
    // react/no-direct-mutation-state: state は直接書き換えない
    // react/no-is-mounted, react/no-find-dom-node: 非推奨 API は使わない
    void this.containerRef.current
  }

  // react/require-render-return: render は値を返す
  public render(): JSX.Element {
    // react/no-string-refs: ref オブジェクトを使う
    return (
      <div ref={this.containerRef} data-count={this.state.count}>
        {this.props.label}
      </div>
    )
  }
}

// react/no-redundant-should-component-update: PureComponent には書かない
export class Pure extends Component {
  public shouldComponentUpdate(): boolean {
    return true
  }

  public render(): JSX.Element {
    return <div>pure</div>
  }
}

// react/no-render-return-value: render() の戻り値は使わない
// react/no-clone-element: cloneElement は使わず props をそのまま渡す
// react/no-react-children: children はそのまま描画する
export const WithKey = ({ children }: { children: ReactNode }): JSX.Element => (
  <div key="a">{children}</div>
)

// react/error-boundaries: componentDidCatch も実装する
export class Boundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  public constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  public static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  public componentDidCatch(): void {
    void 0
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return <div>error</div>
    }
    return this.props.children
  }
}

// react/no-namespace: 名前空間付き JSX 要素は使わない
export const NotNamespaced = (): JSX.Element => <svg />
