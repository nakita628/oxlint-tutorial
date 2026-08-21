// components.tsx の適合版
import { createContext, forwardRef, memo, useMemo, useState, type ReactNode } from 'react'

// react/function-component-definition: アロー関数に統一する
export const Title = (props: { text: string }): JSX.Element => <h1>{props.text}</h1>

// react/display-name: memo で包むコンポーネントには表示名を付ける
const NamedInner = (): JSX.Element => <span>named</span>
NamedInner.displayName = 'Named'

export const Named = memo(NamedInner)

// react/forward-ref-uses-ref: forwardRef では ref を使う
export const Forwarded = forwardRef<HTMLDivElement, { text: string }>((props, ref) => (
  <div ref={ref}>{props.text}</div>
))
Forwarded.displayName = 'Forwarded'

// react/hook-use-state: [value, setValue] の形で受け取る
export const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0)
  return (
    <button type="button" onClick={(): void => setCount(count + 1)}>
      {count}
    </button>
  )
}

// react/no-object-type-as-default-prop: 既定値はモジュールスコープに置く
const defaultOptions = { retries: 3 }

export const WithDefaults = ({
  options = defaultOptions,
}: {
  options?: { retries: number }
}): JSX.Element => <div>{options.retries}</div>

const ThemeContext = createContext({ theme: 'light' })

// react/jsx-no-constructed-context-values: value は useMemo で固定する
export const Provider = ({ children }: { children: ReactNode }): JSX.Element => {
  const value = useMemo(() => ({ theme: 'dark' }), [])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// react/no-unstable-nested-components: コンポーネントは外で定義する
const Inner = (): JSX.Element => <span>inner</span>

export const Outer = (): JSX.Element => (
  <div>
    <Inner />
  </div>
)

// react/static-components: 変化しない要素はモジュールスコープに置く
const staticElement = <span>static</span>

export const Static = (): JSX.Element => <div>{staticElement}</div>
